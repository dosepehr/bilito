import React, { FC } from 'react';

type CitySelectorProps = {
    activeCity: string;
    setActiveCity: (city: string) => void;
};

const CitySelector: FC<CitySelectorProps> = ({ activeCity, setActiveCity }) => {
    return (
        <div className='flex gap-x-3'>
            <button
                className={` ${
                    activeCity == 'tehran'
                        ? 'text-blue-primary bg-tint-1 border border-tint-1'
                        : 'bg-white text-gray-7 border border-gray-3'
                }  px-4 rounded-md duration-300`}
                onClick={() => setActiveCity('tehran')}
            >
                تهران
            </button>
            <button
                className={` ${
                    activeCity == 'mashhad'
                        ? 'text-blue-primary bg-tint-1 border border-tint-1'
                        : 'bg-white text-gray-7 border border-gray-3'
                }  px-4 rounded-md duration-300`}
                onClick={() => setActiveCity('mashhad')}
            >
                مشهد
            </button>
            <button
                className={` ${
                    activeCity == 'shiraz'
                        ? 'text-blue-primary bg-tint-1 border border-tint-1'
                        : 'bg-white text-gray-7 border border-gray-3'
                }  px-4 rounded-md duration-300`}
                onClick={() => setActiveCity('shiraz')}
            >
                شیراز
            </button>
            <button
                className={` ${
                    activeCity == 'kish'
                        ? 'text-blue-primary bg-tint-1 border border-tint-1'
                        : 'bg-white text-gray-7 border border-gray-3'
                }  px-4 rounded-md duration-300`}
                onClick={() => setActiveCity('kish')}
            >
                کیش
            </button>
        </div>
    );
};

export default CitySelector;
