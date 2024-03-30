import React, { FC } from 'react';
import Image from 'next/image';
import ICONS from '../../../../public/icons';
type InsTextProps = {
    icon?: string;
    title: string;
    desc: string;
};
const InsService: FC<InsTextProps> = ({ icon, title, desc }) => {
    return (
        <div className='flex gap-x-4'>
            {icon && <Image src={ICONS[icon]} alt='' width={24} height={24} />}
            <div className='flex gap-x-1'>
                <p className='text-gray-9'>{title}</p>
                <p className='text-gray-7'>{desc}</p>
            </div>
        </div>
    );
};

export default InsService;
