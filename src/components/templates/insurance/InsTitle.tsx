import React, { FC } from 'react';

type InsTitleProps = {
    title: string;
};

const InsTitle: FC<InsTitleProps> = ({ title }) => {
    return <p className='text-gray-9 font-ISBold text-2xl'>{title}</p>;
};

export default InsTitle;
