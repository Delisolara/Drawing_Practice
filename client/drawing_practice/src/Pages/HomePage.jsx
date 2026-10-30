import { Link } from "react-router-dom";

import TimeBtn from "../components/TimeBtn";
import ImgCounter from "../components/ImgCounter";
import FolderInput from "../components/FolderInput";
import StartBtn from "../components/StartBtn";
import MyImg from "../assets/hero.png";

export default function HomePage() {

    return(
        <section className="">
        <div className="min-h-screen max-w-6xl bg-mauve-800"> {/* flex items-center */}
        <div className="max-w-3xl mx-auto">
            {/* <p className='text-5xl font-medium mb-9 py-15'>Ćwicz praktyczne rysowanie w czterech krokach!</p> */}
            <p className='text-5xl font-medium mb-9 py-15'>Prakti Draw</p>

            {/* Wybór folderu */}
            <div className="mb-15">
                <p className="text-2xl font-medium mb-5">Step #1: Select folder with images</p>

                {/* - Dodać drop-list z opcjami */}
                {/* <select className='text-lg bg-cyan-800 p-3'>
                    <option value="disk">Dysk</option>
                    <option value="diskGoogle">Dysk Google</option>
                    <option value="cloud">Chmura</option>
                    <option value="pintrest">Pintrest</option>
                </select> */}

                <FolderInput/>
            </div>

            {/* Wybór czasu */}
            <div className="mb-15">
                <p className="text-2xl font-medium mb-10">Step #2: Select time limit for one image.</p>
                {/* <TimeBtn selectedTime={selectedTime} setSelectedTime={setSelectedTime}/> */}
                <TimeBtn/>
            </div>

            {/*Wybór ilości obrazów */}
            <div className="mb-15">
                <p className="text-2xl font-medium mb-5">Step #3: Select numbers of images for practice</p>
                {/* <ImgCounter numberImg={numberImg} setnumberImg={setnumberImg} selectedTime={selectedTime}/> */}
                <ImgCounter/>
            </div>

            {/* Przycisk Startowy */}
            <div className="">
                <p className="text-2xl font-medium mb-10">Step #4: Take pen and paper or drawing tablet and have fun !</p>

                {/* Guzik rozpoczynający sesję */}
                <StartBtn/>
            </div>

            {/* TEPM */}
            {/* <Link to={"/practice"}>
            <p className="p-3 font-lg underline">Przeskocz</p>
            </Link> */}
        </div>
        </div>

        {/* <div className="right-0">
            <img src={MyImg} className=""/>
        </div> */}
        </section>
    )
}