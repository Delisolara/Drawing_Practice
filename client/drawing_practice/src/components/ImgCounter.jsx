import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useImageContext } from '../context/ImageContext';


export default function ImgCounter() {
    const {numberImg, setnumberImg, selectedTime} = useImageContext();

    const addImg = () => {
        setnumberImg(prev => prev + 1);
    };

    const subImg = () => {
        setnumberImg(prev => Math.max(1, prev - 1));
    };

    const countTime = (numberImg * selectedTime)/60;

    return(
        <div className="flex gap-4">
            <button onClick={addImg} className="px-4 py-2 cursor-pointer rounded-lg border-2 border-mauve-500 text-mauve-400 hover:bg-mauve-700">
                <PlusIcon className='size-4 stroke-mauve-200'/>
            </button>
            
            <input type="number" placeholder={numberImg} onChange={(e) => setnumberImg(e.target.value)} className="rounded-lg border-2 border-mauve-500 bg-mauve-700 p-3 w-15 font-medium text-mauve-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <button onClick={subImg} className="px-4 py-2 cursor-pointer rounded-lg border-2 border-mauve-500 text-mauve-400 hover:bg-mauve-700">
                <MinusIcon className='size-4 stroke-mauve-200'/>
            </button>
            
            {/* <ClockIcon className='size-12 stroke-mauve-400 p-3'/> */}
            <p className='p-3 font-medium text-lg text-mauve-400'>Czas czałej sesji: {countTime} min</p>
        </div>
    );
}