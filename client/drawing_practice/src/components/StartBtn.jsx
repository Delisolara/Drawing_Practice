import { useState } from "react";

import { useImageContext } from "../context/ImageContext";
import { useNavigate } from "react-router-dom";

export default function StartBtn() {
    let navigate = useNavigate();

    const [error, setError] = useState('');
    const {imageFiles, setImageFiles, numberImg} = useImageContext();

    const handleStart = () => {
        if(imageFiles.length === 0) {
            setError('> You have to select forder with images !');
            return;
        }
        else if(numberImg === ''){
            setError('> You have to select number of images !');
            return;
        }
        else if(Number(numberImg) < 1)
            {
            setError('> Number of images have to be positive !');
            return;
        }
        setError('');
        navigate("/practice");
    };

    return(
        <section>
         <div className="flex justify-center">
            <button onClick={handleStart} className="bg-cyan-800 text-mauve-300 hover:bg-cyan-700 
             font-bold text-lg py-3 px-7 rounded-lg cursor-pointer">Start</button>
            {/* bg-cyan-800 hover:bg-cyan-700 */}
        </div>
        {error && (
            <p className="text-lg text-pink-700 mt-5 font-medium">{error}</p>
        )}
        </section>
    );
}