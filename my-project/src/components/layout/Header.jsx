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
                </div>
            </div>
        </header>
    );
};

export default Header;