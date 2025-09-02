import {Zap, Shield, Globe, Smartphone, BarChart3, Users, Clock, HeartHandshake, Layers, Database, Wifi, RefreshCw} from 'lucide-react';

export const mainFeatures = [
    {
        id: 'spend',
        icon: Zap,
        title: "초고속 성능",
        description: "업계 최고 수준의 속도로 비즈니스 프로세스를 가속화합니다.",
        details: "최신 기술 스택을 활용하여 99.9% 업타임과 밀리초 단위 응답 시간을 보장합니다.",
        color: "from-yellow-500 to-orange-500",
        metrics: {
            value: "99.9%",
            label: "업타임 보장"
        }
    },
    {
        id: 'security',
        icon: Shield,
        title: "강력한 보안",
        description: "엔터프라이즈급 보안으로 귀하의 데이터를 안전하게 보호합니다.",
        details: "AES-256 암호화, 다단계 인증, 실시간 위협 탐지 시스템을 통한 완벽한 보안을 제공합니다.",
        color: "from-green-500 to-teal-500",
        metrics: {
            value: "100%",
            label: "보안 준수율"
        }
    },
    {
        id: 'scalability',
        icon: Globe,
        title: "글로벌 확장성",
        description: "전 세계 어디서나 안정적인 서비스를 제공합니다.",
        details: "CDN과 다중 리전 배포로 전 세계 사용자에게 최적의 성능을 보장합니다.",
        color: "from-blue-500 to-cyan-500",
        metrics: {
            value: "15+",
            label: "글로벌 서버"
        }
    },
    {
        id: 'mobile',
        icon: Smartphone,
        title: "모바일 최적화",
        description: "모든 디바이스에서 완벽한 사용자 경험을 제공합니다.",
        details: "반응형 디자인과 Progressive Web App 기술로 모바일 환경을 최적화했습니다.",
        color: "from-purple-500 to-pink-500",
        metrics: {
            value: "95%",
            label: "만족도"
        }
    },
    {
        id: 'analytics',
        icon: BarChart3,
        title: "실시간 분석",
        description: "실시간 데이터 분석으로 인사이트를 제공합니다.",
        details: "AI 기반 분석 엔진으로 비즈니스 트렌드를 예측하고 최적의 의사결정을 돕습니다.",
        color: "from-indigo-500 to-purple-500",
        metrics: {
            value: "24/7",
            label: "실시간 모니터링"
        }
    },
    {
        id: 'collaboration',
        icon: Users,
        title: "팀 협업",
        description: "효율적인 팀 협업 도구로 생산성을 향상시킵니다.",
        details: "실시간 협업, 버전 관리, 권한 설정 등 팀워크를 위한 모든 기능을 제공합니다.",
        color: "from-rose-500 to-red-500",
        metrics: {
            value: "300%",
            label: "생산성 향상"
        }
    }
]

export const additionalFeatures = [
    {
        icon: Clock,
        title: "24/7 지원",
        description: "연중무휴 고객 지원 서비스를 제공합니다"
    },
    {
        icon: HeartHandshake,
        title: "맞춤형 솔루션",
        description: "비즈니스에 특화된 맞춤 서비스를 제공합니다"
    },
    {
        icon: Layers,
        title: "확장 가능한 아키텍처",
        description: "성장에 따라 유연하게 확장 가능한 구조입니다"
    },
    {
        icon: Database,
        title: "안전한 데이터 저장",
        description: "클라우드 기반의 안전하고 신뢰할 수 있는 데이터 관리"
    },
    {
        icon: Wifi,
        title: "오프라인 지원",
        description: "인터넷 연결 없이도 핵심 기능을 사용할 수 있습니다"
    },
    {
        icon: RefreshCw,
        title: "자동 백업",
        description: "데이터 손실 방지를 위한 자동 백업 시스템"
    }
]

export const featureCategories = [
    {
        id: 'performance',
        name: '성능',
        description: '빠르고 안정적인 서비스',
        features: ['spend', 'scalability']
    },
    {
        id: 'security',
        name: '보안',
        description: '엔터프라이즈급 보안',
        features: ['security']
    },
    {
        id: 'experience',
        name: '사용자 경험',
        description: '직관적이고 편리한 인터페이스',
        features: ['mobile', 'collaboration']
    },
    {
        id: 'insights',
        name: '인사이트',
        description: '데이터 기반 의사경정',
        features: ['analytics']
    },
]