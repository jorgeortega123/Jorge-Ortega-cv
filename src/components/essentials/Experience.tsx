import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
export default function Experience(dataText) {
  const [showTextInfo, setshowTextInfo] = useState(true);
  const togle_vanila_show_text = () => {
    document
      .getElementById("show-text")
      ?.classList.toggle("show-content-experience");
  };
  return (
    <>
      <div className="w-12/12 sm:w-10/12 md:w-8/12 lg:max-w-[800px] container-experience ">
        <div className="main flex flex-col items-center justify-center">
          <div className="relative text-black  ">
            <img
              draggable={false}
              className="w-full object-cover  mx-auto md:rounded-[6px] "
              src="https://res.cloudinary.com/ddcoxtm2v/image/upload/v1680016932/1_n3iyvx.webp"
              alt=""
            />

            <div className="absolute top-[-1rem] border border-[#ffffff] px-6 bg-[#ffffffa2] rounded-[8px] backdrop-blur-sm text-[1.8rem] font-bold left-3 altura-letras py-1 tracking-wider">
              LLK
            </div>

            <div className="absolute rounded-[8px] backdrop-blur-sm w-full px-3 ">
              <Button
                text={dataText.dataText.headers.my_role}
                className="font-semibold absolute bottom-2 right-2"
                onClick={() => togle_vanila_show_text()}
              ></Button>
            </div>
          </div>
        </div>
      
          <h1 id="show-text" className=" px-6 text-experience font-[400] opacity-0  altura-letras text-[22px] py-2">
            {dataText.dataText.headers.experience_info}
          </h1>
        
      </div>
    </>
  );
}
