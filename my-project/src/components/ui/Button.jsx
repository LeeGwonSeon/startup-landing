import React from "react";

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    ...props
}) => {
    const baseClasses = 'font-senibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg';

    const variants = {
        primary: 'bg-gradient-to0r from-indigo-500 to-purple-500 text-white hover:scale-105 shadow-lg hover:shadow-xl focus:ring-indigo-500',
        secondary: 'bg-white/10 backdrop-blur-md border border-white/20 text-gray-900 dark:text-white hover:scale-105 hover:bg-white/20',
        ghost: 'text-gray-600 dark:text-gray-300 hover:text-indigo-500 hover:bg-gray-100 dark:hover:bg-gray-800'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
