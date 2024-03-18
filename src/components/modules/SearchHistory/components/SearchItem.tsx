import Image from 'next/image';
import ICONS from '../../../../../public/icons';
const SearchItem = () => {
    return (
        <div className='flex items-center rounded border border-gray-3 text-gray-7 gap-4 py-2 px-4 w-fit'>
            <Image src={ICONS.closeSquare} alt='' width={16} height={16} />
            <p>تهران به استانبول</p>
        </div>
    );
};

export default SearchItem;
