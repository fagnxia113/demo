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
    showLoginModal();
    // Open register modal in real implementation
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

// Simulate login
let isLoggedIn = false;

document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value || '企业用户';

    isLoggedIn = true;
    document.getElementById('userName').textContent = username;

    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('userInfo').style.display = 'flex';

    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons) {
        authButtons.style.display = 'none';
    }

    showNotification('登录成功！欢迎回来');
});

document.getElementById('registerForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const company = document.getElementById('registerCompany')?.value || '新用户';

    isLoggedIn = true;
    document.getElementById('userName').textContent = company;

    document.getElementById('registerModal').classList.remove('active');
    document.getElementById('userInfo').style.display = 'flex';

    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons) {
        authButtons.style.display = 'none';
    }

    showNotification('注册成功！欢迎加入');
});

function logout() {
    if (confirm('确定要退出登录吗？')) {
        isLoggedIn = false;

        const authButtons = document.querySelector('.auth-buttons');
        if (authButtons) {
            authButtons.style.display = 'flex';
        }

        document.getElementById('userInfo').style.display = 'none';
        document.getElementById('userInfo').querySelector('.user-dropdown')?.classList.remove('active');

        showNotification('已退出登录');
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

    if (!isLoggedIn) {
        showNotification('请先登录后再使用智能助手');
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    if (!input || !chatMessages) return;

    const message = input.value.trim();

    if (!message) return;

    // Add user message
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

    // Simulate agent response
    setTimeout(() => {
        const responses = [
            '感谢您的咨询！我已收到您的问题，正在为您查找相关信息。',
            '这是一个很好的问题！关于您提到的内容，我可以为您提供以下帮助...',
            '根据平台的政策规定，您可以享受相应的补贴优惠。',
            '如果您需要更详细的信息，建议您联系我们的客服团队。',
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
    if (!isLoggedIn) {
        showLoginModal();
        showNotification('请先登录后再使用模型');
        return;
    }
    showNotification(`即将为您部署 ${modelName} 模型...`);
}

function orderResource(resourceName) {
    if (!isLoggedIn) {
        showLoginModal();
        showNotification('请先登录后再预订资源');
        return;
    }
    showNotification(`正在为您预订 ${resourceName}，请耐心等待...`);
}

function useApp(appName) {
    if (!isLoggedIn) {
        showLoginModal();
        showNotification('请先登录后再使用应用');
        return;
    }
    showNotification(`正在为您打开 ${appName}...`);
}

function signUpActivity(activityName) {
    if (!isLoggedIn) {
        showLoginModal();
        showNotification('请先登录后再报名活动');
        return;
    }
    showNotification(`报名成功！${activityName} 开办前我们会发提醒通知`);
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