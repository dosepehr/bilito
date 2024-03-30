import Button from '@/components/modules/Button';
import React, { FC } from 'react';

type OfferDetailsProps = {
    title: string;
    link: string;
    href: string;
};

const OfferDetails: FC<OfferDetailsProps> = ({ title, link, href }) => {
    return (
        <div className='absolute bottom-6 right-6 flex-col flex'>
            <p className='text-white mb-2'>{title}</p>
            <Button type='transparent' href={href} className='w-fit'>
                {link}
            </Button>
        </div>
    );
};

export default OfferDetails;
