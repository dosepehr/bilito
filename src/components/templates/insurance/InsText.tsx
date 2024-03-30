import React, { FC, ReactNode } from 'react';

type InsTextProps = {
    children: ReactNode;
};

const InsText: FC<InsTextProps> = ({ children }) => {
    return (
        <p
            className='text-gray-7 text-lg mt-4'
            style={{
                wordSpacing: '0.2rem',
            }}
        >
            {children}
        </p>
    );
};

export default InsText;
