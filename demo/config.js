/**
 * 临港创新智算服务平台 - 园区配置
 */

const PARK_CONFIG = {
    // 默认园区（无参数时使用）
    default: 'keji',

    // 园区列表
    parks: {
        // 科技城园区 - 聚焦科技创新与研发
        keji: {
            id: 'keji',
            name: '科技城园区',
            shortName: '科技城',
            icon: 'fa-flask',
            theme: {
                primary: '#3b82f6',
                primaryDark: '#2563eb',
                gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)'
            },
            features: {
                models: true,
                resources: true,
                agent: true,
                innovation: true,
                activities: true
            },
            hero: {
                title: '赋能临港企业数字化转型升级',
                subtitle: '普惠、高效、灵活的算力服务一站式解决方案'
            },
            stats: {
                companies: '500+',
                gpus: '1000+',
                availability: '99.9%',
                subsidy: '50%'
            },
            description: '聚焦科技创新与研发，提供高性能算力支持',
            // 科技城特色模型 - 偏重研发、编程、通用AI能力
            models: [
                { name: 'DeepSeek V3.2', desc: '深度求索最新旗舰模型，强化Agent能力，融入思考推理，编程与推理能力卓越', context: '128K', price: '¥0.01/1K tokens', tags: ['nlp', 'multi'], badge: 'hot' },
                { name: 'DeepSeek R1', desc: '深度求索推理模型，擅长复杂逻辑推理与数学问题求解', context: '64K', price: '¥0.02/1K tokens', tags: ['nlp', 'multi'], badge: 'new' },
                { name: 'Claude Sonnet 4.6', desc: 'Anthropic最强Sonnet模型，编程、Agent和专业工作的前沿性能', context: '200K', price: '¥0.03/1K tokens', tags: ['nlp', 'multi'], badge: 'hot' },
                { name: 'Qwen3-Max', desc: '阿里通义旗舰模型，全能至强，超万亿参数规模预训练', context: '128K', price: '¥0.02/1K tokens', tags: ['nlp', 'multi'], badge: 'recommend' },
                { name: 'GLM-5', desc: '智谱AI旗舰模型，面向Agentic Engineering，擅长复杂系统工程与长程Agent任务', context: '128K', price: '¥0.015/1K tokens', tags: ['nlp', 'multi'], badge: 'hot' },
                { name: 'Qwen3-Coder-Plus', desc: '通义代码专用模型，代码与Agent能力突出', context: '64K', price: '¥0.01/1K tokens', tags: ['nlp'], badge: 'recommend' },
                { name: 'YOLOv8', desc: '实时目标检测模型，支持多种物体识别与定位任务', context: '实时检测', price: '¥0.005/次', tags: ['cv'], badge: '' },
                { name: 'GLM-OCR', desc: '智谱轻量专业OCR模型，复杂文档解析又准又省', context: '文档解析', price: '¥0.008/页', tags: ['cv'], badge: 'recommend' }
            ]
        },

        // 影视基地园区 - 专注数字内容创作
        yingshi: {
            id: 'yingshi',
            name: '影视基地园区',
            shortName: '影视基地',
            icon: 'fa-film',
            theme: {
                primary: '#f59e0b',
                primaryDark: '#d97706',
                gradient: 'linear-gradient(135deg, #f59e0b, #d97706)'
            },
            features: {
                models: true,
                resources: true,
                agent: true,
                innovation: false,
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
            description: '专注数字内容创作，提供渲染算力与AI辅助工具',
            // 影视基地特色模型 - 偏重视频、图像、音频创作
            models: [
                { name: '可灵 2.6', desc: '快手新一代AI创意生产力平台，支持视频生成、图片生成、动作控制、数字人等', context: '4K视频', price: '¥0.50/次', tags: ['video', 'multi'], badge: 'hot' },
                { name: 'Wan2.6-T2V', desc: '通义万相视频生成模型，自然音画同步，智能多镜头叙事', context: '高清视频', price: '¥0.60/次', tags: ['video', 'multi'], badge: 'new' },
                { name: 'Wan2.6-I2V', desc: '通义图生视频模型，智能多镜头叙事，角色一致性保持', context: '视频生成', price: '¥0.55/次', tags: ['video', 'multi'], badge: 'recommend' },
                { name: 'Midjourney V6', desc: '顶尖AI绘画工具，生成专业级影视概念图与海报', context: '专业级', price: '¥0.50/张', tags: ['cv', 'multi'], badge: 'hot' },
                { name: 'GLM-Image', desc: '智谱图像生成模型，文字渲染开源SOTA，海报科普图表现佳', context: '图文混排', price: '¥0.03/张', tags: ['cv', 'multi'], badge: 'recommend' },
                { name: 'Wan2.6-T2I', desc: '通义文生图模型，强大的指令遵循能力', context: '高清输出', price: '¥0.04/张', tags: ['cv', 'multi'], badge: 'recommend' },
                { name: 'CosyVoice-V3', desc: '通义语音合成模型，超拟人语音，塑造生动自然的听觉体验', context: '语音合成', price: '¥0.015/分钟', tags: ['audio'], badge: 'new' },
                { name: 'Suno AI', desc: 'AI音乐生成，支持影视配乐与音效创作', context: '音乐生成', price: '¥0.20/首', tags: ['audio', 'multi'], badge: 'recommend' }
            ]
        },

        // 零界魔方园区 - AI应用与智能体
        lingangmofang: {
            id: 'lingangmofang',
            name: '零界魔方园区',
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
            description: 'AI应用创新平台，提供模型、应用、算力一站式服务',
            models: [
                { name: 'GLM-4.6V', desc: '智谱视觉推理模型，全球100B级效果最佳，原生支持工具调用，能看会干', context: '视觉Agent', price: '¥0.02/1K tokens', tags: ['cv', 'multi'], badge: 'hot' },
                { name: 'Qwen3-Omni', desc: '通义全模态模型，支持文本、图像、音频、视频多模态理解与生成', context: '全模态', price: '¥0.025/1K tokens', tags: ['multi'], badge: 'new' },
                { name: 'Qwen3-VL-Plus', desc: '通义视觉感知模型，视觉理解能力强，支持图像视频分析', context: '视觉感知', price: '¥0.015/次', tags: ['cv', 'multi'], badge: 'recommend' },
                { name: 'Claude Haiku 4.5', desc: 'Anthropic轻量快速模型，适合高并发场景', context: '200K', price: '¥0.005/1K tokens', tags: ['nlp'], badge: 'recommend' },
                { name: 'GLM-ASR', desc: '智谱实时高精度语音转写，多场景多语言表现出色', context: '实时转写', price: '¥0.018/分钟', tags: ['audio'], badge: 'recommend' },
                { name: 'GLM-TTS', desc: '智谱超拟人语音合成，塑造生动自然的听觉体验', context: '语音合成', price: '¥0.015/分钟', tags: ['audio'], badge: '' },
                { name: 'Fun-ASR', desc: '通义语音识别模型，精准识别嘈杂环境、专业术语及混合语种', context: '多语言', price: '¥0.02/分钟', tags: ['audio'], badge: 'new' },
                { name: 'DeepSeek Coder V2', desc: '深度求索代码模型，编程能力卓越，适合开发场景', context: '64K', price: '¥0.008/1K tokens', tags: ['nlp'], badge: 'recommend' }
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
            description: '聚焦AI研发与大模型创新，打造人工智能产业高地',
            models: [
                { name: 'DeepSeek V3.2', desc: '深度求索最新旗舰模型，强化Agent能力，融入思考推理', context: '128K', price: '¥0.01/1K tokens', tags: ['nlp', 'multi'], badge: 'hot' },
                { name: 'Claude Opus 4.6', desc: 'Anthropic最强模型，复杂任务处理能力顶尖', context: '200K', price: '¥0.075/1K tokens', tags: ['nlp', 'multi'], badge: 'hot' },
                { name: 'Qwen3-Max', desc: '阿里通义旗舰模型，全能至强，超万亿参数', context: '128K', price: '¥0.02/1K tokens', tags: ['nlp', 'multi'], badge: 'recommend' },
                { name: 'GLM-5', desc: '智谱旗舰模型，面向Agentic Engineering', context: '128K', price: '¥0.015/1K tokens', tags: ['nlp', 'multi'], badge: 'new' },
                { name: 'Qwen3-Coder-Plus', desc: '通义代码专用模型，代码与Agent能力突出', context: '64K', price: '¥0.01/1K tokens', tags: ['nlp'], badge: 'recommend' },
                { name: 'DeepSeek R1', desc: '深度求索推理模型，擅长复杂逻辑与数学问题', context: '64K', price: '¥0.02/1K tokens', tags: ['nlp'], badge: 'new' }
            ]
        },

        // 滴水湖IC创新港 - 集成电路与芯片设计
        icinnovation: {
            id: 'icinnovation',
            name: '滴水湖IC创新港',
            shortName: 'IC创新港',
            icon: 'fa-microchip',
            theme: {
                primary: '#06b6d4',
                primaryDark: '#0891b2',
                gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)'
            },
            features: {
                models: true,
                resources: true,
                agent: true,
                innovation: false,
                activities: true
            },
            hero: {
                title: '集成电路设计创新中心',
                subtitle: 'EDA云化、芯片设计、半导体研发一站式服务'
            },
            stats: {
                companies: '80+',
                gpus: '400+',
                availability: '99.9%',
                subsidy: '50%'
            },
            description: '聚焦集成电路与芯片设计，提供EDA云化和算力支持',
            models: [
                { name: 'DeepSeek Coder V2', desc: '深度求索代码模型，编程能力卓越，适合芯片设计代码开发', context: '64K', price: '¥0.008/1K tokens', tags: ['nlp'], badge: 'hot' },
                { name: 'Qwen3-Coder-Plus', desc: '通义代码专用模型，Verilog/VHDL等硬件描述语言支持', context: '64K', price: '¥0.01/1K tokens', tags: ['nlp'], badge: 'recommend' },
                { name: 'Claude Sonnet 4.6', desc: 'Anthropic编程专家，复杂系统设计与代码审查', context: '200K', price: '¥0.03/1K tokens', tags: ['nlp', 'multi'], badge: 'hot' },
                { name: 'GLM-5', desc: '智谱旗舰模型，支持技术文档生成与设计辅助', context: '128K', price: '¥0.015/1K tokens', tags: ['nlp', 'multi'], badge: 'recommend' },
                { name: 'Qwen3-VL-Plus', desc: '通义视觉模型，芯片版图分析与缺陷检测', context: '视觉感知', price: '¥0.015/次', tags: ['cv', 'multi'], badge: 'new' },
                { name: 'GLM-OCR', desc: '智谱OCR模型，技术文档与规格书智能解析', context: '文档解析', price: '¥0.008/页', tags: ['cv'], badge: 'recommend' }
            ]
        },

        // 滴水湖国际数据港 - 数据服务与云计算
        dataharbor: {
            id: 'dataharbor',
            name: '滴水湖国际数据港',
            shortName: '国际数据港',
            icon: 'fa-database',
            theme: {
                primary: '#3b82f6',
                primaryDark: '#1d4ed8',
                gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
            },
            features: {
                models: true,
                resources: true,
                agent: true,
                innovation: true,
                activities: true
            },
            hero: {
                title: '国际数据服务枢纽',
                subtitle: '跨境数据、云计算、大数据分析一站式平台'
            },
            stats: {
                companies: '120+',
                gpus: '500+',
                availability: '99.99%',
                subsidy: '40%'
            },
            description: '国际数据服务枢纽，提供跨境数据、云计算、大数据分析服务',
            models: [
                { name: 'Qwen-Long', desc: '通义长文本模型，支持超长文档分析与数据处理', context: '1M', price: '¥0.001/1K tokens', tags: ['nlp'], badge: 'hot' },
                { name: 'Qwen3-Max', desc: '通义旗舰模型，多语言数据处理能力强', context: '128K', price: '¥0.02/1K tokens', tags: ['nlp', 'multi'], badge: 'recommend' },
                { name: 'GLM-4.6V', desc: '智谱视觉推理模型，数据可视化分析与报表生成', context: '视觉Agent', price: '¥0.02/1K tokens', tags: ['cv', 'multi'], badge: 'new' },
                { name: 'Claude Haiku 4.5', desc: 'Anthropic轻量模型，高并发数据处理场景', context: '200K', price: '¥0.005/1K tokens', tags: ['nlp'], badge: 'recommend' },
                { name: 'Fun-ASR', desc: '通义语音识别，多语言数据转录与处理', context: '多语言', price: '¥0.02/分钟', tags: ['audio'], badge: 'recommend' },
                { name: 'GLM-OCR', desc: '智谱OCR模型，多格式文档数据提取', context: '文档解析', price: '¥0.008/页', tags: ['cv'], badge: 'new' }
            ]
        },

        // 滴水湖金融湾 - 金融科技与智能风控
        financialbay: {
            id: 'financialbay',
            name: '滴水湖金融湾',
            shortName: '金融湾',
            icon: 'fa-landmark',
            theme: {
                primary: '#f59e0b',
                primaryDark: '#d97706',
                gradient: 'linear-gradient(135deg, #f59e0b, #d97706)'
            },
            features: {
                models: true,
                resources: true,
                agent: true,
                innovation: false,
                activities: true
            },
            hero: {
                title: '金融科技创新高地',
                subtitle: '智能风控、量化分析、金融AI一站式服务'
            },
            stats: {
                companies: '100+',
                gpus: '350+',
                availability: '99.99%',
                subsidy: '35%'
            },
            description: '金融科技创新中心，提供智能风控、量化分析、金融AI服务',
            models: [
                { name: 'DeepSeek R1', desc: '深度求索推理模型，复杂金融逻辑与风险评估', context: '64K', price: '¥0.02/1K tokens', tags: ['nlp'], badge: 'hot' },
                { name: 'Claude Sonnet 4.6', desc: 'Anthropic旗舰模型，金融合规审查与报告生成', context: '200K', price: '¥0.03/1K tokens', tags: ['nlp', 'multi'], badge: 'recommend' },
                { name: 'Qwen3-Max', desc: '通义旗舰模型，金融文本分析与智能客服', context: '128K', price: '¥0.02/1K tokens', tags: ['nlp', 'multi'], badge: 'hot' },
                { name: 'Qwen3-Coder-Plus', desc: '通义代码模型，量化策略开发与回测', context: '64K', price: '¥0.01/1K tokens', tags: ['nlp'], badge: 'recommend' },
                { name: 'GLM-4.6V', desc: '智谱视觉模型，票据识别与报表分析', context: '视觉Agent', price: '¥0.02/1K tokens', tags: ['cv', 'multi'], badge: 'new' },
                { name: 'GLM-OCR', desc: '智谱OCR模型，金融票据与证件识别', context: '票据识别', price: '¥0.01/页', tags: ['cv'], badge: 'recommend' }
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
