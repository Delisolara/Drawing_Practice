import { useEffect, useState } from "react";

export default function ImgTransition () {
    const [transitionTime, setTransitionTime] = useState(5);

    useEffect(() => {
        const interval = setInterval(()=> {
            setTransitionTime(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    },[]);

    return(
    <div className="flex h-170 flex-col items-center justify-center rounded-lg bg-mauve-800 mt-10 mb-5 count-start">
        <p key={transitionTime} className="text-8xl font-medium number-transition">
            {transitionTime}
        </p>
    </div>
    );
}