/**
 * 临港创新智算服务平台 - 身份验证和账户管理
 */

// 预设用户账户（园区管理员/企业账户）
const USER_ACCOUNTS = {
    // 科技城园区账户
    keji_demo: {
        username: 'keji_demo',
        password: 'demo123',
        parkId: 'keji',
        companyName: '科技城示范企业',
        role: 'enterprise'
    },
    keji_admin: {
        username: 'keji_admin',
        password: 'admin123',
        parkId: 'keji',
        companyName: '科技城园区运营方',
        role: 'admin'
    },

    // 影视基地园区账户
    yingshi_demo: {
        username: 'yingshi_demo',
        password: 'demo123',
        parkId: 'yingshi',
        companyName: '影视制作公司',
        role: 'enterprise'
    },
    yingshi_admin: {
        username: 'yingshi_admin',
        password: 'admin123',
        parkId: 'yingshi',
        companyName: '影视基地运营方',
        role: 'admin'
    },

    // 零界魔方园区账户
    lingangmofang_demo: {
        username: 'lingangmofang_demo',
        password: 'demo123',
        parkId: 'lingangmofang',
        companyName: 'AI应用初创企业',
        role: 'enterprise'
    },
    lingangmofang_admin: {
        username: 'lingangmofang_admin',
        password: 'admin123',
        parkId: 'lingangmofang',
        companyName: '零界魔方运营方',
        role: 'admin'
    },

    // AI创新港账户
    aiinnovation_demo: {
        username: 'aiinnovation_demo',
        password: 'demo123',
        parkId: 'aiinnovation',
        companyName: '大模型研发公司',
        role: 'enterprise'
    },
    aiinnovation_admin: {
        username: 'aiinnovation_admin',
        password: 'admin123',
        parkId: 'aiinnovation',
        companyName: 'AI创新港运营方',
        role: 'admin'
    },

    // IC创新港账户
    icinnovation_demo: {
        username: 'icinnovation_demo',
        password: 'demo123',
        parkId: 'icinnovation',
        companyName: '芯片设计公司',
        role: 'enterprise'
    },
    icinnovation_admin: {
        username: 'icinnovation_admin',
        password: 'admin123',
        parkId: 'icinnovation',
        companyName: 'IC创新港运营方',
        role: 'admin'
    },

    // 国际数据港账户
    dataharbor_demo: {
        username: 'dataharbor_demo',
        password: 'demo123',
        parkId: 'dataharbor',
        companyName: '数据服务企业',
        role: 'enterprise'
    },
    dataharbor_admin: {
        username: 'dataharbor_admin',
        password: 'admin123',
        parkId: 'dataharbor',
        companyName: '国际数据港运营方',
        role: 'admin'
    },

    // 金融湾账户
    financialbay_demo: {
        username: 'financialbay_demo',
        password: 'demo123',
        parkId: 'financialbay',
        companyName: '金融科技公司',
        role: 'enterprise'
    },
    financialbay_admin: {
        username: 'financialbay_admin',
        password: 'admin123',
        parkId: 'financialbay',
        companyName: '金融湾运营方',
        role: 'admin'
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

// 将函数和用户账户暴露到全局作用域
window.USER_ACCOUNTS = USER_ACCOUNTS;
window.checkAuthStatus = checkAuthStatus;
window.setCurrentUser = setCurrentUser;
window.clearCurrentUser = clearCurrentUser;
window.getCurrentPark = getCurrentPark;
window.initPark = initPark;
window.applyParkTheme = applyParkTheme;
window.updateNavLinks = updateNavLinks;

console.log('auth.js loaded successfully');
console.log('User accounts count:', Object.keys(USER_ACCOUNTS).length);
