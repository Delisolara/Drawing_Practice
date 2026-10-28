import { useState } from "react";
import { useImageContext } from "../context/ImageContext";

export default function FolderInput() { 
    const {imageFiles, setImageFiles} = useImageContext();
    const [error, setError] = useState('');

    const handleInputFolder = (e) => {
        const files = [...e.target.files];

        const imageFiles = files.filter(file =>
          file.type.startsWith('image/')
        );

        if (imageFiles.length === 0) {
          setError('> Folder nie zawiera obrazów! Proszę wskazać inny.');
          return;
        }
        setError('');

        setImageFiles(imageFiles);
    };
    
    return(
        <div>
            <input type="file" webkitdirectory="true" multiple onChange={handleInputFolder} 
            className="rounded-lg border-mauve-500 bg-mauve-700 p-4 w-full font-medium text-mauve-300 cursor-pointer" />
        </div>
    );
}