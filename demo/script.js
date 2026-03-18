// Modal functions
function showLoginModal() {
    document.getElementById('loginModal')?.classList.add('active');
}

function showRegisterModal() {
    document.getElementById('registerModal')?.classList.add('active');
}

function showUploadModal() {
    document.getElementById('uploadModal')?.classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId)?.classList.remove('active');
}

// Switch between login and register
function switchToRegister() {
    closeModal('loginModal');
    showRegisterModal();
    alert('注册功能 - 请联系园区主账户开通');
}

function switchToLogin() {
    closeModal('registerModal');
    showLoginModal();
}

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// 需要登录才能访问的页面列表
const AUTH_REQUIRED_PAGES = [
    'index.html',
    'models.html',
    'resources.html',
    'agent.html',
    'innovation.html',
    'activities.html',
    'dashboard.html'
];

// 检查当前页面是否需要登录验证
function checkPageAuth() {
    const currentPage = window.location.pathname.split('/').pop();

    // login.html 和 portal.html 不需要登录验证
    if (currentPage === 'login.html' || currentPage === 'portal.html' || currentPage === '') {
        return true;
    }

    // 其他页面需要登录
    const currentUser = checkAuthStatus();
    if (!currentUser) {
        window.location.href = 'login.html';
        return false;
    }

    // 检查园区权限
    const urlParams = new URLSearchParams(window.location.search);
    const requestedParkId = urlParams.get('park');

    if (requestedParkId && requestedParkId !== currentUser.parkId) {
        // 通用账号：允许访问所有园区
        if (currentUser.canSwitchParks) {
            return true;
        }
        
        // 普通账号：只能访问自己所属的园区
        const requestedPark = PARK_CONFIG.parks[requestedParkId];
        const userPark = PARK_CONFIG.parks[currentUser.parkId];
        alert(`您没有权限访问 ${requestedPark.name}\n您只能访问您所属的园区：${userPark.name}`);
        // 重定向到用户自己的园区
        window.location.href = `${currentPage}?park=${currentUser.parkId}`;
        return false;
    }

    return true;
}

// 更新UI以反映登录状态
function updateAuthUI() {
    const currentUser = checkAuthStatus();
    const authButtons = document.querySelector('.auth-buttons');
    const userInfo = document.getElementById('userInfo');
    const userName = document.getElementById('userName');

    if (currentUser) {
        // 已登录
        if (authButtons) {
            authButtons.style.display = 'none';
        }
        if (userInfo) {
            userInfo.style.display = 'flex';
            if (userName) {
                userName.textContent = currentUser.companyName || currentUser.username;
            }
        }

        // 更新企业信息（如果有）
        const companyNameEl = document.querySelector('.company-info span');
        if (companyNameEl && companyNameEl.textContent === 'XX科技有限公司') {
            companyNameEl.textContent = currentUser.companyName;
        }
        const parkNameEl = document.querySelectorAll('.company-info span')[1];
        if (parkNameEl) {
            parkNameEl.textContent = PARK_CONFIG.parks[currentUser.parkId].name;
        }
    } else {
        // 未登录
        if (authButtons) {
            authButtons.style.display = 'flex';
        }
        if (userInfo) {
            userInfo.style.display = 'none';
        }
    }
}

// Model tabs filtering
const tabBtns = document.querySelectorAll('.tab-btn');
const modelCards = document.querySelectorAll('.model-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.tab;

        modelCards.forEach(card => {
            const cardCategories = card.dataset.category || '';
            if (category === 'all' || cardCategories.includes(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Resource type switching
const resourceBtns = document.querySelectorAll('.resource-btn');
const resourceContents = document.querySelectorAll('.resource-content');

resourceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        resourceBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        resourceContents.forEach(content => {
            content.classList.remove('active');
        });

        const type = btn.dataset.type;
        const targetContent = document.getElementById(`resources-${type}`);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// User dropdown toggle
const userInfo = document.getElementById('userInfo');
if (userInfo) {
    userInfo.addEventListener('click', () => {
        userInfo.querySelector('.user-dropdown').classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!userInfo.contains(e.target)) {
            userInfo.querySelector('.user-dropdown')?.classList.remove('active');
        }
    });
}

// 登录表单处理 - 仅用于模态框场景（login.html 有独立处理）
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        alert('请输入用户名和密码');
        return;
    }

    // 在预设账户中查找用户
    const user = Object.values(USER_ACCOUNTS).find(u => u.username === username && u.password === password);

    if (!user) {
        alert('用户名或密码错误\n\n提示：请使用园区预设账户登录\n例如：lingangmofang_demo / demo123');
        return;
    }

    // 登录成功
    setCurrentUser(user);

    // 关闭登录模态框
    document.getElementById('loginModal')?.classList.remove('active');

    // 更新UI
    updateAuthUI();

    // 显示成功消息
    const parkName = PARK_CONFIG.parks[user.parkId].name;
    showNotification(`登录成功！欢迎来到 ${parkName}`);

    // 刷新页面以应用园区配置
    const currentUrl = new URL(window.location.href);
    if (!currentUrl.searchParams.get('park')) {
        currentUrl.searchParams.set('park', user.parkId);
        window.location.href = currentUrl.toString();
    } else {
        location.reload();
    }
});

document.getElementById('registerForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('注册功能 - 请联系园区主账户开通');
});

function logout() {
    if (confirm('确定要退出登录吗？')) {
        clearCurrentUser();

        // 重定向到登录页面
        window.location.href = 'login.html';
    }
}

// Range slider for reward
const rewardRange = document.getElementById('rewardRange');
const rewardValue = document.getElementById('rewardValue');

if (rewardRange && rewardValue) {
    rewardRange.addEventListener('input', () => {
        rewardValue.textContent = `${rewardRange.value}%`;
    });
}

// Chat widget
let chatOpen = false;

function toggleChat() {
    const chatWidget = document.getElementById('chatWidget');
    if (chatWidget) {
        chatOpen = !chatOpen;
        if (chatOpen) {
            chatWidget.classList.add('active');
        } else {
            chatWidget.classList.remove('active');
        }
    }
}

function closeChat() {
    chatOpen = false;
    const chatWidget = document.getElementById('chatWidget');
    if (chatWidget) {
        chatWidget.classList.remove('active');
    }
}

function startAgentChat(agentType) {
    const agentNames = {
        'policy': '政策问答助手',
        'technique': '应用技巧助手',
        'business': '业务咨询助手'
    };

    const chatAgentName = document.getElementById('chatAgentName');
    if (chatAgentName) {
        chatAgentName.textContent = agentNames[agentType] || '智能助手';
    }

    const chatWidget = document.getElementById('chatWidget');
    if (chatWidget) {
        chatWidget.classList.add('active');
        chatOpen = true;
    }

    // Clear previous messages and add greeting
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        chatMessages.innerHTML = `
            <div class="chat-message agent">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <p>您好！我是${agentNames[agentType]|| '智能助手'}。请问有什么可以帮助您的？</p>
                </div>
            </div>
        `;
    }

    const currentUser = checkAuthStatus();
    if (!currentUser) {
        showNotification('请先登录后再使用智能助手');
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    if (!input || !chatMessages) return;

    const message = input.value.trim();

    if (!message) return;

    // 添加用户消息
    chatMessages.innerHTML += `
        <div class="chat-message user">
            <div class="message-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="message-content">
                <p>${escapeHtml(message)}</p>
            </div>
        </div>
    `;

    input.value = '';

    // 模拟助手回复
    setTimeout(() => {
        const currentUser = checkAuthStatus();
        const parkName = currentUser ? PARK_CONFIG.parks[currentUser.parkId].name : '临港创新智算服务平台';

        const responses = [
            `感谢您的咨询！作为${parkName}的智能助手，我已收到您的问题，正在为您查找相关信息。`,
            '这是一个很好的问题！关于您提到的内容，我可以为您提供以下帮助...',
            `根据${parkName}的政策规定，您可以享受相应的补贴优惠。`,
            '如果您需要更详细的信息，建议您联系我们园区的客服团队。',
            '您的问题已经记录，我们会尽快给您答复。'
        ];

        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        chatMessages.innerHTML += `
            <div class="chat-message agent">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <p>${randomResponse}</p>
                </div>
            </div>
        `;

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChatKeypress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Action functions
function useModel(modelName) {
    const currentUser = checkAuthStatus();
    if (!currentUser) {
        showLoginModal();
        showNotification('请先登录后再使用模型');
        return;
    }

    const parkName = PARK_CONFIG.parks[currentUser.parkId].name;
    showNotification(`[${parkName}] 即将为您部署 ${modelName} 模型...`);
}

function orderResource(resourceName) {
    const currentUser = checkAuthStatus();
    if (!currentUser) {
        showLoginModal();
        showNotification('请先登录后再预订资源');
        return;
    }

    const parkName = PARK_CONFIG.parks[currentUser.parkId].name;
    showNotification(`[${parkName}] 正在为您预订 ${resourceName}，请耐心等待...`);
}

function useApp(appName) {
    const currentUser = checkAuthStatus();
    if (!currentUser) {
        showLoginModal();
        showNotification('请先登录后再使用应用');
        return;
    }

    const parkName = PARK_CONFIG.parks[currentUser.parkId].name;
    showNotification(`[${parkName}] 正在为您打开 ${appName}...`);
}

function signUpActivity(activityName) {
    const currentUser = checkAuthStatus();
    if (!currentUser) {
        showLoginModal();
        showNotification('请先登录后再报名活动');
        return;
    }

    formNotification(`报名成功！${activityName} 开办前我们会发提醒通知`);
}

function showCommunityModal() {
    showNotification('请通过企业微信扫描二维码加入社群');
}

function showUploadModal() {
    document.getElementById('uploadModal')?.classList.add('active');
}

// Notification system
function showNotification(message, duration = 3000) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: #1e293b;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        font-size: 14px;
    `;

    document.body.appendChild(notification);

    // Remove after duration
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, duration);
}

// 修正方法名（之前的 typo）
function formNotification(message, duration = 3000) {
    showNotification(message, duration);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Initialize - mark first nav item as active on page load
document.addEventListener('DOMContentLoaded', () => {
    // 检查登录状态和页面权限
    checkPageAuth();
    updateAuthUI();

    // Set active nav based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Add keyboard support for modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
            closeChat();
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and other sections
document.querySelectorAll('.feature-card, .model-card, .resource-card, .agent-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Dynamic stats counter animation
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (element.dataset.suffix || '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate hero stats when section is visible
const heroStatsSection = document.querySelector('.hero-stats');
let statsAnimated = false;

if (heroStatsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                const statNumbers = document.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    if (text.includes('+')) {
                        stat.dataset.suffix = '+';
                        animateValue(stat, 0, parseInt(text), 2000);
                    } else if (text.includes('%')) {
                        stat.dataset.suffix = '%';
                        animateValue(stat, 0, parseInt(text), 2000);
                    } else if (text.includes('.')) {
                        stat.dataset.suffix = '%';
                        animateValue(stat, 0, parseFloat(text) * 10, 2000 / 10);
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(heroStatsSection);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
