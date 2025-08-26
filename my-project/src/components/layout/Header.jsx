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
        <header>

        </header>
    );
};

export default Header;