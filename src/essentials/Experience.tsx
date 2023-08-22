import React, { useState } from "react";
import Button from "../components/cycleComponents/Button";
import useMainContext from "../context/useMainContext";
import Icons from "../styles/Icons";
export default function Experience(dataText) {
  const [showTextInfo, setshowTextInfo] = useState(true);
  const togle_vanila_show_text = () => {
    document
      .getElementById("show-text")
      ?.classList.toggle("show-content-experience");
  };
  const { goToUrl } = useMainContext();
  return (
    <>
      <div className="w-12/12  max-w-[700px]  container-experience ">
        
        <div className="main flex flex-col items-center justify-center">
          <div className="relative text-black  ">
            <img
              draggable={false}
              className="w-full object-cover  mx-auto md:rounded-[6px] "
              src="https://res.cloudinary.com/ddcoxtm2v/image/upload/v1688088570/Screenshot_from_2023-06-29_20-23-33_ai7bzl.webp"
              alt=""
            />

            <div
              onClick={() => goToUrl("https://www.llampukaq.com/")}
              className="cursor-pointer absolute flex top-[-1rem] border border-[#ffffff] px-6 bg-[#ffffffa2] rounded-[8px] backdrop-blur-sm text-[1.8rem] font-bold left-3 altura-letras py-1 tracking-wider"
            >
              <p className="pl-2">LLK</p>
              <Icons icon="link" className="rotate-[135deg]"></Icons>
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

        <p
          id="show-text"
          className=" px-6 text-experience font-[200] altura-letras text-[22px] py-2"
        >
          {dataText.dataText.headers.experience_info}
        </p>
      </div>
    </>
  );
}
