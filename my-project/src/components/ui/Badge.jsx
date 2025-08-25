import React from "react";

const Badge = ({ children, variant = 'primary', className = '' }) => {
    const variants = {
        primary: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
        success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text0xs font-medium ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;