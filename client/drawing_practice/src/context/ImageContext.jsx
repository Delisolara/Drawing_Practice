import { createContext, useContext, useState } from "react";

const ImageContext = createContext();

export function ImageProvider({children}) {
    const [imageFiles, setImageFiles] = useState([]);
    const [selectedTime, setSelectedTime] = useState(60);
    const [numberImg, setnumberImg] = useState(3);

    return(
        <ImageContext.Provider value={{imageFiles, setImageFiles, selectedTime, setSelectedTime, numberImg, setnumberImg}}>
            {children}
        </ImageContext.Provider>
    );
}

export function useImageContext() {
    return useContext(ImageContext);
}