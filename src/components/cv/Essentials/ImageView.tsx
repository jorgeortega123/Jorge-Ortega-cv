import React, { useEffect } from "react";
import useMainContext from "../context/useMainContext";

export default function ImageView({ setshowImg, imgSrc }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
  });
  const changeCol = () => {
    document.body.style.overflowY = "scroll";
    setshowImg(false);
  };
  const changeOverflowY = useMainContext();
  console.log("sadd",imgSrc)
  return (
    <div className="select-none  w-full flex justify-center items-center  lg:px-[56px] lg:py-10 relative">
      <div className="z-[6] fixed w-full overflow-auto h-full backdrop-blur-xl  bg-[#00000088] bottom-0 top-[44px]  flex justify-center">
        <div
          onClick={() => {
            changeCol();
          }}
          className="bg-transparent w-screen h-screen absolute"
        ></div>
        <div className=" w-11/12 flex flex-col items-center justify-center">
          <div className="relative text-white">
            <div className=" lg:text-[1.4rem] xl:lg:text-[1.8rem] absolute xl:mt-[-36px] font-semibold">
              <p>{imgSrc.proyect.title}</p>
            </div>
            <div className="absolute bottom-[-20px] w-full">
              <div className="relative flex w-full">
                <p className="absolute text-[.7rem] sm:text-[1rem] lg:text-[1.4rem] xl:lg:text-[1.8rem]">
                  1 <span className="text-green-400">/</span> {imgSrc.proyect.all.length}
                </p>
                {/* <div className="relative flex space-x-9  ] mx-auto border border-[#66ff00] px-2 py-3 rounded-[6px] mt-[] text-[.8rem]">
                  <p className="text-slate-200">{"<" + "Anterior"}</p>
                  <p className="text-[#66ff00]">{"Siguiente" + ">"}</p>
                </div> */}
              </div>
            </div>
            <div
              className=" right-0 top-0 m-4 pl-[8px] pr-[9px] z-[7] absolute cursor-pointer hover:text-black backdrop-blur-2xl  text-[19px] rounded-[5px] font-bold bg-[#fe0000db] "
              onClick={() => {
                changeCol();
              }}
            >
              X
            </div>
            <img
              onClick={(e) => {
                e.preventDefault();
              }}
              className="border-[1px] w-auto z-[8] rounded-[12px]  border-[#00000033] xl:max-h-[calc(100vh_-_240px)] "
              src={imgSrc.img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
