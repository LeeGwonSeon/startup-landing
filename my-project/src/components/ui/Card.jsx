import React from "react";

const Card = ({ children, className = '', glass = false, ...props }) => {
    const baseClasses = 'rounded-xl p-6 transition-all duration-300 hover:scale-105';
    const glassClasses = glass
    ? 'bg-white/10 backdrop-blur-md border border-white/20 dark:bg-black/20 dark:border-white/10' 
    : 'bg-white dark:bg-gray-800 shadow-lg';

    return (
        <div className={`${baseClasses} ${glassClasses} ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Card;