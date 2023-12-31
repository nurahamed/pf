import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Fontend Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-16">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Nur Ahamed</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-8 tracking-wide">
        Final Year Engineering Undergraduate pursuing my B.Tech from Kalyani Government Engineering College in ECE. My professional journey encompasses substantial experience in both frontend and backend technologies. I have adeptly worked with frontend tools such as HTML5, CSS, MUI, JavaScript and React.Js. 
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner