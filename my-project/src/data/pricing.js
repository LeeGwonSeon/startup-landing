import {Zap, Star, Building, Crown } from 'lucide-react';

export const pricingPlans = [
    {
        id: 'starter',
        name: 'Starter',
        description: '개인 및 소규모 팀을 위한 기본 플랜',
        icon: Zap,
        color: 'from-blue-500 to-cyan-500',
        popular: false,
        monthlyPrice: 29000,
        yearlyPrice: 290000,
        yearlyDiscount: 17,
        features: [
            { name: '프로젝트 5개', included: true },
            { name: '사용자 3명', included: true },
            { name: '5GB 스토리지', included: true },
            { name: '기본 분석', included: true },
            { name: '이메일 지원', included: true },
            { name: '기본 보안', included: true },
            { name: '모바일 앱', included: true },
            { name: 'API 접근', included: false },
            { name: '고급 분석', included: false },
            { name: '우선 지원', included: false },
            { name: '커스텀 도메인', included: false },
            { name: '화이트라벨', included: false }
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        description: '성장하는 비지니스를 위한 전문 플랜',
        icon: Star,
        color: 'from-purple-500 to-pink-500',
        popular: true,
        monthlyPrice: 79000,
        yearlyPrice: 790000,
        yearlyDiscount: 17,
        features: [
            { name: '무제한 프로젝트', included: true },
            { name: '사용자 15명', included: true },
            { name: '100GB 스토리지', included: true },
            { name: '고급 분석', included: true },
            { name: '24/7 채팅 지원', included: true },
            { name: '고급 보안', included: true },
            { name: '모바일 앱', included: true },
            { name: 'API 접근', included: true },
            { name: '커스텀 도메인', included: true },
            { name: '팀 협업 도구', included: true },
            { name: '우선 지원', included: false },
            { name: '화이트라벨', included: false }
        ]
    },
    {
        id: 'business',
        name: 'Business',
        description: '대규모 팀을 위한 비지니스 솔루션',
        icon: Building,
        color: 'from-orange-500 to-red-500',
        popular: false,
        monthlyPrice: 149000,
        yearlyPrice: 1490000,
        yearlyDiscount: 17,
        features: [
            { name: '무제한 프로젝트', included: true },
            { name: '사용자 50명', included: true },
            { name: '500GB 스토리지', included: true },
            { name: '고급 분석 + AI', included: true },
            { name: '24/7 전화 지원', included: true },
            { name: '엔터프라이즈 보안', included: true },
            { name: '모바일 앱', included: true },
            { name: 'API 접근', included: true },
            { name: '커스텀 도메인', included: true },
            { name: '팀 협업 도구', included: true },
            { name: '우선 지원', included: true },
            { name: '화이트라벨', included: true }
        ]
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        description: '대규모 조직을 위한 맞춤형 솔루션',
        icon: Crown,
        color: 'from-indigo-500 to-purple-500',
        popular: false,
        monthlyPrice: null,
        yearlyPrice: null,
        yearlyDiscount: 17,
        features: [
            { name: '무제한 프로젝트', included: true },
            { name: '무제한 사용자', included: true },
            { name: '무제한 스토리지', included: true },
            { name: '맞춤형 분석 대시보드', included: true },
            { name: '전담 계정 매니저', included: true },
            { name: '맞춤형 보안 정책', included: true },
            { name: '모바일 앱', included: true },
            { name: '풀 API 접근', included: true },
            { name: '커스텀 도메인', included: true },
            { name: '고급 팀 관리', included: true },
            { name: 'SLA 보장', included: true },
            { name: '완전한 화이트라벨', included: true }
        ]
    }
]

export const pricingFAQs = [
    {
        question: '요금제를 언제든지 변경할 수 있나요?',
        answer: '네, 언제든지 요금제를 업그레이드하거나 다운그레이드할 수 있습니다. 변경사항은 다음 결제 주기부터 적용됩니다.'
    },
    {
        question: '무료 체험 기간이 있나요?',
        answer: '모든 플랜에 대해 14일 무료 체험을 제공합니다. 신용카드 등록 없이도 모든 기능을 체험해보실 수 있습니다.'
    },
    {
        question: '결제는 어떻게 이루어지나요?',
        answer: '주요 신용카드(Visa, MasterCard, American Express)와 계좌이체를 지원합니다. 모든 결제는 SSL로 암호화되어 안전합니다.'
    },
    {
        question: '데이터 보안은 어떻게 보장되나요?',
        answer: 'ISO 27001 인증을 받았으며, AES-256 암호화, 정기적인 보안 감사, 다단계 인증 등을 통해 데이터를 보호합니다.'
    },
    {
        question: '환불 정책은 어떻게 되나요?',
        answer: '30일 무조건 환불 보장을 제공합니다. 서비스에 만족하지 않으시면 전액 환불해드립니다.'
    },
    {
        question: '사용자 수를 늘리거나 줄일 수 있나요?',
        answer: '네, 언제든지 사용자 수를 조정할 수 있습니다. 추가 사용자는 월 단위로 과금되며, 제거된 사용자는 다음 결제 주기에 반영됩니다.'
    }
]

export const addOns = [
    {
        id: 'extra-storage',
        name: '추가 스토리지',
        description: '100GB 추가',
        monthlyPrice: 9000,
        yearlyPrice: 90000
    },
    {
        id: 'extra-users',
        name: '추가 사용자',
        description: '사용자 1명 추가',
        monthlyPrice: 15000,
        yearlyPrice: 150000
    },
    {
        id: 'priority-support',
        name: '우선 지원',
        description: '1시간 내 응답 보장',
        monthlyPrice: 29000,
        yearlyPrice: 290000
    }
]