import { useImageContext } from "../context/ImageContext";

export default function TimeBtn() {
    const {selectedTime, setSelectedTime} = useImageContext();
    const timeOptions = [
        {value: 5, label: "5 s"}, // TEMP
        {value: 30, label: "30 s"},
        {value: 60, label: "60 s"},
        {value: 120, label: "2 min"},
        {value: 300, label: "5 min"},
        {value: 600, label: "10 min"},
        {value: 900, label: "15 min"}
    ];
    
    return(
    <div className="flex gap-4">
    {timeOptions.map((option) => (
        <div key={option.value}>
            <input
                type="radio"
                id={`time-${option.value}`}
                name="time"
                value={option.value}
                checked={selectedTime === option.value}
                onChange={() => setSelectedTime(option.value)}
                className="hidden"
            />

            <label
                htmlFor={`time-${option.value}`}
                className={`cursor-pointer rounded-lg px-5 py-3 transition-colors
                    ${
                        selectedTime === option.value
                            ? "border-2 border-cyan-800 bg-cyan-800 text-mauve-300 text-lg font-medium"
                            : "border-2 border-mauve-500 text-mauve-400 text-lg font-medium hover:bg-mauve-700"
                    }`}
            >
                {option.label}
            </label>
        </div>
    ))}
    </div>
    );
}