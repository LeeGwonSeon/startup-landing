import React, { useState } from "react";
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Header = () => {
    const { isDark, toggleTheme } = useTheme();
    const [ isMobileNenuOpen, setIsNobileMenuOpen ] = useState(false);

    const navigation = [
        { name: '기능', href: '#features'},
        { name: '요금', href: '#pricing'},
        { name: '후기', href: '#testimonials'},
        { name: '연락처', href: '#contact'}
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsNobileMenuOpen(false);
        }
    }

    return (
        <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 dark:bg-black/20 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* 로고 */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">A</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">AppFlow</span>
                    </div>

                    {/* 데스크톱 네비게이션 */}
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => {
                            <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-gray-600 dark:text-indigo-500 transition-colors">
                                {item.name}
                            </button>
                        })}
                    </nav>

                    {/* 액션 버튼들 */}
                    <div className="flex items-center space-x-4">
                        <button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hober:bg-white/20 transition-colors">
                            {isDark ? (
                                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300"/> ) :( <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                            )}
                        </button>

                        <Button className="hidden md:block">
                            시작하기
                        </Button>

                        {/* 모바일 메뉴 버튼 */}
                            <button onClick={() => setIsNobileMenuOpen(!isMobileNenuOpen)} className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                                {isMobileNenuOpen ? (<X className="w-5 h-5" />):(<Menu className="w-5 h-5" />)}
                            </button>
                    </div>
                </div>

                        {/* 모바일 메뉴 */}
                        {isMobileNenuOpen && (
                            <div className="md:hiddeen py-4 border-t border-white/20">
                                {navigation.map((item) => {
                                    <button key={item.name} onClick={() => scrollToSection(item.href)} className="block w-full text-left py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-500">
                                        {item.name}
                                    </button>
                                })}
                                <div className="pt-4">
                                    <Button size="sm" className="w-full">
                                        시작하기
                                    </Button>
                                </div>
                            </div>
                        )}
            </div>
        </header>
    );
};

export default Header;