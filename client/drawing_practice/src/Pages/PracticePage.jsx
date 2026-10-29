import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { XMarkIcon } from '@heroicons/react/24/solid';

import ImgDisplay from "../components/ImgDisplay";
import ImgTransition from "../components/ImgTransition";
import { useImageContext } from "../context/ImageContext";

export default function PracticePage() {
    let navigate = useNavigate();
    const {selectedTime, numberImg} = useImageContext();

    const [timeLeft, setTimeLeft] = useState(selectedTime); // Ustawienie stanu czasu
    const [currentImg, setCurrentImg] = useState(1);    // Ustawenie stanu liczby obrazów, przez które kod przeszedł
    const [imgTransition, setImgTransition] = useState(false);

    // const progress = (timeLeft / selectedTime) * 100;   // Wyliczenie % dla paska progresu

    // Format wyświetlania timera MM:SS
    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;

        return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    }

    useEffect(() => {
        // WŁAŚCIWY TIMER
        // Losowanie nowego obrazu i resetowanie timera po skończeniu się czasu
        if(timeLeft <= 0){
            // Przenoszenie na strone główną po skończeniu sesji
            if(currentImg >= numberImg) {
                 const exitTimeout = setTimeout(()=>{
                    navigate("/");
                 },2000)
                 return () => clearTimeout(exitTimeout);
            }

            setImgTransition(true);
            const timeout = setTimeout(()=>{
                setCurrentImg(prev => prev + 1);
                setTimeLeft(selectedTime);
                setImgTransition(false);
            },5000);

            return () => clearTimeout(timeout);
        }

        // TEMP TIMER - nie przekierowuje na stronę główną ------------
        // if (timeLeft <= 0) {
        //     if (currentImg < numberImg) {
        //         setImgTransition(true);
        //         const timeout = setTimeout(()=>{
        //             setCurrentImg(prev => prev + 1);
        //             setTimeLeft(selectedTime);
        //             setImgTransition(false);
        //         },5000);

        //         // setCurrentImg(prev => prev + 1);
        //         // setTimeLeft(selectedTime);
        //         return () => clearTimeout(timeout);
        //     }
        //     // setImgTransition(false);
        // }
        // -------------------------------------------------------------

        // Ustawienie timera
        const interval = setInterval(()=> {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        // // Czyszczenie timera
        return () => clearInterval(interval);
        
    },[timeLeft, currentImg, numberImg, selectedTime, setImgTransition]);

    return(
        <div className="max-h-screen max-w-5xl mx-auto">
            {imgTransition ? (
                <ImgTransition/>
            ) : (
                // {/* Wyswietlanie obrazu */}
                <ImgDisplay key={currentImg}/>
            )}
            
            
            
            {/* Pasek czasu - nie synchronizuje się z czasem */}
            {/* <div className="w-full bg-mauve-800 h-1.5 rounded-lg">
                <div className="h-1.5 rounded-full bg-cyan-900 transition-[width] duration-1000 ease-linear" style={{ width: `${100 - progress}%`}}></div>
            </div> */}

            <div className="flex justify-between py-2">
                <div className="flex flex-row gap-6 items-center">
                    {/* Stoper */}
                    <p className="text-6xl font-medium text-mauve-300">{formatTime(timeLeft)}</p>
                    
                    {/* Powrót do strony głównej */}
                    <button onClick={() => navigate("/")} className='bg-mauve-700 hover:bg-pink-800 text-mauve-200 font-bold py-3 px-3 mt-1 rounded-lg cursor-pointer'>
                        <XMarkIcon className='size-6 stroke-mauve-300'/>
                    </button>
                </div>
                {/* Licznik obrazów */}
                <p className="text-lg font-medium text-mauve-400">Image: {currentImg}/{numberImg}</p>
            </div>

        </div>
    );
}