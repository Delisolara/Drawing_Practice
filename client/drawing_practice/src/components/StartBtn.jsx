import { useState } from "react";

import { useImageContext } from "../context/ImageContext";
import { useNavigate } from "react-router-dom";

export default function StartBtn() {
    let navigate = useNavigate();

    const [error, setError] = useState('');
    const {imageFiles, setImageFiles, numberImg} = useImageContext();

    const handleStart = () => {
        if(imageFiles.length === 0) {
            setError('> Musisz wybrać folder !');
            return;
        }
        else if(numberImg === ''){
            setError('> Musisz wybrać liczbę obrazów !');
            return;
        }
        else if(Number(numberImg) < 1)
            {
            setError('> Liczbę obrazów nie może być ujemna !');
            return;
        }
        setError('');
        navigate("/practice");
    };

    return(
        <section>
         <div className="flex justify-center">
            <button onClick={handleStart} className="bg-cyan-800 text-mauve-300 hover:bg-cyan-700 font-bold text-lg py-3 px-5 rounded-lg cursor-pointer">Rozpocznij</button>
            {/* bg-cyan-800 hover:bg-cyan-700 */}
        </div>
        {error && (
            <p className="text-lg text-pink-700 font-medium">{error}</p>
        )}
        </section>
    );
}