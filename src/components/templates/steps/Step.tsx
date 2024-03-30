import React, { FC } from 'react';
import Image from 'next/image';
import ICONS from '../../../../public/icons';

type StepProps = {
    icon?: string;
    title: string;
    desc: string;
};

const Step: FC<StepProps> = ({ icon, title, desc }) => {
    return (
        <div>
            <div className='flex gap-x-2'>
                <Image src={ICONS[icon]} alt='' width={24} height={24} />
                <p className='text-gray-9 font-ISBold text-lg'>{title}</p>
            </div>
            <p className='mt-2 text-gray-6'>{desc}</p>
        </div>
    );
};

export default Step;
