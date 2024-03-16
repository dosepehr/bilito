import React, { PropsWithChildren, FC } from 'react';

type ButtonProps = {
    className?: string;
    type?: string;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
    className,
    type = 'primary',
    children,
}) => {
    const styles: { primary: string; secondary: string } = {
        primary: 'rounded-lg text-white py-2 px-4 bg-blue-primary flex items-center',
        secondary:
            'bg-white border-2 border-shade-3 text-shade-3 rounded-lg py-2 px-4 flex items-center',
    };
    return (
        <button className={`${styles[type]} ${className}`}>{children}</button>
    );
};

export default Button;
