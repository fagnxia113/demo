/**
 * 临港创新智算服务平台 - 园区配置
 */

const RESOURCE_SUPPLIERS = {
    'youfu': {
        name: '有孚',
        resources: {
            servers: [
                { name: '4070ti', price: '3500' },
                { name: '4090', price: '4500' },
                { name: 'A100', price: '8500' },
                { name: 'H100', price: '15000' }
            ],
            专线: [
                { name: '10G', price: '80000' },
                { name: '500M', price: '30000' },
                { name: '50M', price: '8000' }
            ],
            机柜: [
                { name: '6KW', price: '5000' },
                { name: '7KW', price: '6000' }
            ]
        },
        contact: {
            phone: '400-888-0001',
            email: 'service@youfu.com',
            address: '上海市临港新片区...'
        }
    },
    'shanghaidianxin': {
        name: '上海电信',
        resources: {
            servers: [
                { name: '4090', price: '4600' },
                { name: 'A800', price: '16000' },
                { name: 'H800', price: '18000' },
                { name: 'H200', price: '20000' }
            ],
            专线: [
                { name: '10G', price: '100000' },
                { name: '跨境专线', price: '300000' }
            ],
            机柜: [
                { name: '6KW', price: '5500' },
                { name: '10KW', price: '8000' },
                { name: '12KW', price: '9000' }
            ]
        },
        contact: {
            phone: '400-888-0002',
            email: 'business@sh.telecom.cn',
            address: '上海市浦东新区...'
        }
    }
};

const PARK_CONFIG = {
    // 默认园区（无参数时使用）
    default: 'lingangmofang',

    // 园区列表
    parks: {
        // 零界魔方园区 - AI应用与智能体
        lingangmofang: {
            id: 'lingangmofang',
            name: '零界魔方OPC社区',
            shortName: '零界魔方',
            icon: 'fa-cube',
            theme: {
                primary: '#8b5cf6',
                primaryDark: '#7c3aed',
                gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
            },
            features: {
                models: true,
                resources: true,
                agent: true,
                innovation: true,
                activities: true
            },
            hero: {
                title: 'AI应用创新与智能体生态',
                subtitle: '模型超市、应用超市、算力超市一站式服务'
            },
            stats: {
                companies: '300+',
                gpus: '800+',
                availability: '99.9%',
                subsidy: '45%'
            },
            description: '临港"超级个体"孵化社区，为青年创业者提供零门槛、零成本创业服务，打造一人公司"效率引擎"',
            models: [
                { name: 'GLM-4.6V', desc: '智谱视觉推理模型，全球100B级效果最佳，原生支持工具调用，能看会干', context: '视觉Agent', price: '¥0.02/1K tokens', tags: ['cv', 'multi'], badge: 'hot' },
                { name: 'Qwen3-Omni', desc: '通义全模态模型，支持文本、图像、音频、视频多模态理解与生成', context: '全模态', price: '¥0.025/1K tokens', tags: ['multi'], badge: 'new' },
                { name: 'Qwen3-VL-Plus', desc: '通义视觉感知模型，视觉理解能力强，支持图像视频分析', context: '视觉感知', price: '¥0.015/次', tags: ['cv', 'multi'], badge: 'recommend' },
                { name: '豆包视频生成模型2.0', desc: '字节跳动最新视频生成模型，支持高保真4K视频生成', context: '4K视频', price: '¥0.80/次', tags: ['video', 'multi'], badge: 'hot' },
                { name: '豆包实时语音模型', desc: '字节跳动实时语音交互模型，极速响应', context: '实时交互', price: '¥0.10/分钟', tags: ['audio'], badge: 'new' },
                { name: '豆包音乐模型', desc: '字节跳动AI音乐生成模型，支持多风格音乐创作', context: '专业级', price: '¥0.25/首', tags: ['audio', 'multi'], badge: 'recommend' },
                { name: '豆包语音合成模型2.0', desc: '字节跳动语音合成模型升级版，超拟人语音', context: '语音合成', price: '¥0.012/分钟', tags: ['audio'], badge: 'hot' },
                { name: '豆包角色扮演模型', desc: '字节跳动角色扮演专用模型，多角色演绎', context: '128K', price: '¥0.015/1K tokens', tags: ['nlp', 'multi'], badge: 'new' },
                { name: 'GLM-ASR', desc: '智谱实时高精度语音转写，多场景多语言表现出色', context: '实时转写', price: '¥0.018/分钟', tags: ['audio'], badge: 'recommend' },
                { name: 'GLM-TTS', desc: '智谱超拟人语音合成，塑造生动自然的听觉体验', context: '语音合成', price: '¥0.015/分钟', tags: ['audio'], badge: '' },
                { name: 'Fun-ASR', desc: '通义语音识别模型，精准识别嘈杂环境、专业术语及混合语种', context: '多语言', price: '¥0.02/分钟', tags: ['audio'], badge: 'new' },
                { name: 'DeepSeek Coder V2', desc: '深度求索代码模型，编程能力卓越，适合开发场景', context: '64K', price: '¥0.008/1K tokens', tags: ['nlp'], badge: 'recommend' }
            ]
        },

        // 影视基地园区 - 专注数字内容创作
        yingshi: {
            id: 'yingshi',
            name: '东方明珠影视基地',
            shortName: '影视基地',
            icon: 'fa-tv',
            theme: {
                primary: '#f59e0b',
                primaryDark: '#d97706',
                gradient: 'linear-gradient(135deg, #f59e0b, #d97706)'
            },
            features: {
                models: true,
                resources: true,
                agent: true,
                innovation: true,
                activities: true
            },
            hero: {
                title: '赋能数字内容创作',
                subtitle: '渲染算力与AI辅助工具，加速影视制作流程'
            },
            stats: {
                companies: '200+',
                gpus: '500+',
                availability: '99.9%',
                subsidy: '40%'
            },
            description: 'SMG BesTV+流媒体战略载体，占地面积超8万平方米，提供数字内容创作、影视渲染算力与AI工具',
            models: [
                { name: '可灵 2.6', desc: '快手新一代AI创意生产力平台，支持视频生成、图片生成、动作控制、数字人等', context: '4K视频', price: '¥0.50/次', tags: ['video', 'multi'], badge: 'hot' },
                { name: 'Wan2.6-T2V', desc: '通义万相视频生成模型，自然音画同步，智能多镜头叙事', context: '高清视频', price: '¥0.60/次', tags: ['video', 'multi'], badge: 'new' },
                { name: 'Wan2.6-I2V', desc: '通义图生视频模型，智能多镜头叙事，角色一致性保持', context: '视频生成', price: '¥0.55/次', tags: ['video', 'multi'], badge: 'recommend' },
                { name: '豆包视频生成模型2.0', desc: '字节跳动最新视频生成模型，支持高保真4K视频生成，智能镜头控制', context: '4K视频', price: '¥0.80/次', tags: ['video', 'multi'], badge: 'hot' },
                { name: '豆包实时语音模型', desc: '字节跳动实时语音交互模型，极速响应，自然流畅', context: '实时交互', price: '¥0.10/分钟', tags: ['audio'], badge: 'new' },
                { name: '豆包音乐模型', desc: '字节跳动AI音乐生成模型，支持多风格音乐创作与编曲', context: '专业级', price: '¥0.25/首', tags: ['audio', 'multi'], badge: 'recommend' },
                { name: '豆包语音合成模型2.0', desc: '字节跳动语音合成模型升级版，超拟人语音，情感表达丰富', context: '语音合成', price: '¥0.012/分钟', tags: ['audio'], badge: 'hot' },
                { name: 'Midjourney V6', desc: '顶尖AI绘画工具，生成专业级影视概念图与海报', context: '专业级', price: '¥0.50/张', tags: ['cv', 'multi'], badge: 'hot' },
                { name: 'GLM-Image', desc: '智谱图像生成模型，文字渲染开源SOTA，海报科普图表现佳', context: '图文混排', price: '¥0.03/张', tags: ['cv', 'multi'], badge: 'recommend' },
                { name: 'Wan2.6-T2I', desc: '通义文生图模型，强大的指令遵循能力', context: '高清输出', price: '¥0.04/张', tags: ['cv', 'multi'], badge: 'recommend' },
                { name: 'CosyVoice-V3', desc: '通义语音合成模型，超拟人语音，塑造生动自然的听觉体验', context: '语音合成', price: '¥0.015/分钟', tags: ['audio'], badge: 'new' },
                { name: 'Suno AI', desc: 'AI音乐生成，支持影视配乐与音效创作', context: '音乐生成', price: '¥0.20/首', tags: ['audio', 'multi'], badge: 'recommend' }
            ]
        },

        // 滴水湖AI创新港 - AI研发与大模型
        aiinnovation: {
            id: 'aiinnovation',
            name: '滴水湖AI创新港',
            shortName: 'AI创新港',
            icon: 'fa-brain',
            theme: {
                primary: '#10b981',
                primaryDark: '#059669',
                gradient: 'linear-gradient(135deg, #10b981, #059669)'
            },
            features: {
                models: true,
                resources: true,
                agent: true,
                innovation: true,
                activities: true
            },
            hero: {
                title: 'AI研发创新高地',
                subtitle: '大模型研发、AI应用孵化、智能体生态构建'
            },
            stats: {
                companies: '150+',
                gpus: '600+',
                availability: '99.9%',
                subsidy: '55%'
            },
            description: '目标3年集聚AI人才2-3万人，汇集企业500家，已集聚270家企业，产业规模达270亿元',
            models: [
                { name: 'DeepSeek V3.2', desc: '深度求索最新旗舰模型，强化Agent能力，融入思考推理', context: '128K', price: '¥0.01/1K tokens', tags: ['nlp', 'multi'], badge: 'hot' },
                { name: 'Qwen3-Max', desc: '阿里通义旗舰模型，全能至强，超万亿参数', context: '128K', price: '¥0.02/1K tokens', tags: ['nlp', 'multi'], badge: 'recommend' },
                { name: 'GLM-5', desc: '智谱旗舰模型，面向Agentic Engineering', context: '128K', price: '¥0.015/1K tokens', tags: ['nlp', 'multi'], badge: 'new' },
                { name: '豆包视频生成模型2.0', desc: '字节跳动最新视频生成模型，智能镜头控制', context: '4K视频', price: '¥0.80/次', tags: ['video', 'multi'], badge: 'hot' },
                { name: '豆包实时语音模型', desc: '字节跳动实时语音交互模型，极速响应', context: '实时交互', price: '¥0.10/分钟', tags: ['audio'], badge: 'new' },
                { name: '豆包语音合成模型2.0', desc: '字节跳动语音合成模型升级版，超拟人语音', context: '语音合成', price: '¥0.012/分钟', tags: ['audio'], badge: 'recommend' },
                { name: '豆包角色扮演模型', desc: '字节跳动角色扮演专用模型，多角色演绎', context: '128K', price: '¥0.015/1K tokens', tags: ['nlp', 'multi'], badge: 'new' },
                { name: 'Qwen3-Coder-Plus', desc: '通义代码专用模型，代码与Agent能力突出', context: '64K', price: '¥0.01/1K tokens', tags: ['nlp'], badge: 'recommend' },
                { name: 'DeepSeek R1', desc: '深度求索推理模型，擅长复杂逻辑与数学问题', context: '64K', price: '¥0.02/1K tokens', tags: ['nlp'], badge: 'new' }
            ]
        }
    }
};

/**
 * 获取当前园区配置
 */
function getCurrentPark() {
    // 从 URL 参数获取园区ID
    const urlParams = new URLSearchParams(window.location.search);
    const parkId = urlParams.get('park') || PARK_CONFIG.default;

    // 始终从完整配置获取（确保包含 models 等数据）
    const park = PARK_CONFIG.parks[parkId];

    if (park) {
        // 更新缓存
        sessionStorage.setItem('currentParkId', parkId);
    }

    return park || PARK_CONFIG.parks[PARK_CONFIG.default];
}

/**
 * 应用园区主题色
 */
function applyParkTheme(park) {
    if (!park) return;

    // 设置 CSS 变量
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

    // 更新导航链接，保持园区参数
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
        // 跳过外部链接和 portal
        if (href.startsWith('http') || href === 'portal.html') return;
        // 添加园区参数
        const separator = href.includes('?') ? '&' : '?';
        const newHref = href + separator + 'park=' + park.id;
        link.setAttribute('href', newHref);
    });
}
