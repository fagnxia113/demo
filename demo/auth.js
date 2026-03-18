/**
 * 临港创新智算服务平台 - 身份验证和账户管理
 */

// 预设用户账户（保留3个园区 + 1个通用账号）
const USER_ACCOUNTS = {
    // 零界魔方OPC社区账户
    lingangmofang_demo: {
        username: 'lingangmofang_demo',
        password: 'demo123',
        parkId: 'lingangmofang',
        companyName: 'AI应用初创企业',
        role: 'enterprise'
    },

    // 东方明珠影视基地账户
    yingshi_demo: {
        username: 'yingshi_demo',
        password: 'demo123',
        parkId: 'yingshi',
        companyName: '影视制作公司',
        role: 'enterprise'
    },

    // 滴水湖AI创新港账户
    aiinnovation_demo: {
        username: 'aiinnovation_demo',
        password: 'demo123',
        parkId: 'aiinnovation',
        companyName: '大模型研发公司',
        role: 'enterprise'
    },

    // 临港新片区通用平台账户（可切换所有园区）
    lingang_demo: {
        username: 'lingang_demo',
        password: 'demo123',
        parkId: 'unified',
        companyName: '临港新片区通用平台',
        role: 'super_admin',
        canSwitchParks: true
    }
};

/**
 * 检查用户登录状态
 */
function checkAuthStatus() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    return currentUser || null;
}

/**
 * 设置当前登录用户
 */
function setCurrentUser(user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
}

/**
 * 清除当前登录用户
 */
function clearCurrentUser() {
    sessionStorage.removeItem('currentUser');
}

/**
 * 根据凭证设置用户
 */
function setUserByCredentials(username, password, parkId) {
    const user = USER_ACCOUNTS[username];
    if (user && user.password === password) {
        setCurrentUser(user);
        window.location.href = 'home.html?park=' + parkId;
    } else {
        alert('登录失败：用户名或密码错误');
    }
}

/**
 * 获取当前园区配置（从 config.js）
 */
function getCurrentPark() {
    if (typeof PARK_CONFIG === 'undefined') {
        console.error('PARK_CONFIG not defined. Make sure config.js is loaded before auth.js');
        return null;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const parkId = urlParams.get('park') || PARK_CONFIG.default;
    const park = PARK_CONFIG.parks[parkId];

    if (park) {
        sessionStorage.setItem('currentParkId', parkId);
    }

    return park || PARK_CONFIG.parks[PARK_CONFIG.default];
}

/**
 * 应用园区主题色
 */
function applyParkTheme(park) {
    if (!park) return;

    document.documentElement.style.setProperty('--primary-color', park.theme.primary);
    document.documentElement.style.setProperty('--primary-dark', park.theme.primaryDark);
    document.documentElement.style.setProperty('--primary-gradient', park.theme.gradient);
}

/**
 * 初始化园区配置
 */
function initPark() {
    const park = getCurrentPark();
    applyParkTheme(park);
    updateNavLinks(park);
    return park;
}

/**
 * 更新导航链接，添加园区参数
 */
function updateNavLinks(park) {
    if (!park) return;

    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        const href = link.getAttribute('href');
        if (href.startsWith('http') || href === 'login.html' || href === 'portal.html') return;
        const separator = href.includes('?') ? '&' : '?';
        const newHref = href + separator + 'park=' + park.id;
        link.setAttribute('href', newHref);
    });
}

/**
 * 切换当前园区（仅限有切换权限的用户）
 * @param {string} parkId - 目标园区ID
 */
function switchPark(parkId) {
    const currentUser = checkAuthStatus();
    
    if (!currentUser) {
        alert('请先登录');
        window.location.href = 'login.html';
        return false;
    }

    // 检查是否有切换园区的权限
    if (!currentUser.canSwitchParks) {
        const currentPark = PARK_CONFIG.parks[currentUser.parkId];
        if (currentPark) {
            alert(`您当前所属园区是：${currentPark.name}\n\n只有通用平台账号可以自由切换园区`);
        }
        return false;
    }

    // 检查目标园区是否存在
    if (!PARK_CONFIG.parks[parkId]) {
        alert('目标园区不存在');
        return false;
    }

    // 切换到目标园区
    const currentPage = window.location.pathname.split('/').pop();
    const newUrl = `${currentPage}?park=${parkId}`;
    window.location.href = newUrl;
    
    return true;
}

/**
 * 获取所有可切换的园区列表（供UI使用）
 */
function getSwitchableParks() {
    if (typeof PARK_CONFIG === 'undefined') {
        return [];
    }

    return Object.values(PARK_CONFIG.parks).map(park => ({
        id: park.id,
        name: park.name,
        icon: park.icon
    }));
}

/**
 * 检查当前用户是否有切换园区的权限
 */
function canUserSwitchParks() {
    const currentUser = checkAuthStatus();
    return currentUser && currentUser.canSwitchParks === true;
}

// 将函数和用户账户暴露到全局作用域
window.USER_ACCOUNTS = USER_ACCOUNTS;
window.checkAuthStatus = checkAuthStatus;
window.setCurrentUser = setCurrentUser;
window.clearCurrentUser = clearCurrentUser;
window.setUserByCredentials = setUserByCredentials;
window.getCurrentPark = getCurrentPark;
window.initPark = initPark;
window.applyParkTheme = applyParkTheme;
window.updateNavLinks = updateNavLinks;
window.switchPark = switchPark;
window.getSwitchableParks = getSwitchableParks;
window.canUserSwitchParks = canUserSwitchParks;

console.log('auth.js loaded successfully');
console.log('Available accounts:', Object.keys(USER_ACCOUNTS));
