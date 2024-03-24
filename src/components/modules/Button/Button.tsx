import Link from 'next/link';
import React, { PropsWithChildren, FC } from 'react';

type ButtonProps = {
    className?: string;
    type?: string;
    href?: string;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
    className,
    type = 'primary',
    children,
    href,
}) => {
    const styles: { primary: string; secondary: string; transparent: string } =
        {
            primary:
                'rounded-lg text-white py-2 px-4 bg-blue-primary flex items-center',
            secondary:
                'bg-white border-2 border-shade-3 text-shade-3 rounded-lg py-2 px-4 flex items-center',
            transparent:
                'bg-transparent text-white p-2 border border-white rounded-lg',
        };
    if (!href) {
        return (
            <button className={`${styles[type]} ${className}`}>
                {children}
            </button>
        );
    }
    return (
        <Link className={`${styles[type]} ${className}`} href={href}>
            {children}
        </Link>
    );
};

export default Button;
