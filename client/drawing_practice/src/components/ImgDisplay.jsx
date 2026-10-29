import { useState, useEffect } from "react";

import { useImageContext } from "../context/ImageContext";
import placeholderImg from "../assets/placeholder.png";

export default function ImgDisplay() { 

    const {imageFiles} = useImageContext();

    const [imageURL, setImageURL] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {    
        if (imageFiles.length === 0 ){
            setImageURL(placeholderImg);
            setError("> Random image can't be selected. Please select folder again.");
            return;
        }
            
        const randomIndex = Math.floor(Math.random() * imageFiles.length);
        const randomImage = imageFiles[randomIndex];
    
        const set_url = URL.createObjectURL(randomImage);
        // const imagesURL = files.map(file => URL.createObjectURL(file));
    
        setImageURL(set_url);
    
        // Czyszczenie URL - po zmianie imageFiles i utworzeniu nowego URl, stary URL jest czyszczony
        return () => {
            URL.revokeObjectURL(set_url);
        };
    }, [imageFiles]);
    
    return(
        <div className="">
            {imageURL && (
                <div className='mt-10 bg-mauve-800 rounded-lg'> {/*col-span-4 col-start-2 row-span-1 row-start-4 */}
                    <img src={imageURL} className="h-170 object-scale-down opacity-75 mx-auto mb-5 img-transition"/> {/* key={index} */}
                </div>
            )}

            {error && (
                <p className="text-lg text-pink-700 font-medium py-1">{error}</p>
            )}
        </div>
    );
}