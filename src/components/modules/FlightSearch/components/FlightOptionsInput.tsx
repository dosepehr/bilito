import React, { FC } from 'react';

type FlightOptionsInputProps = {
    placeHolder: string;
};

const FlightOptionsInput: FC<FlightOptionsInputProps> = ({ placeHolder }) => {
    return (
        <input
            type='text'
            placeholder={placeHolder}
            className='text-gray-8 placeholder:text-gray-8 border-2 border-gray-3 bg-white py-3 pr-6 rounded-lg'
        />
    );
};

export default FlightOptionsInput;
