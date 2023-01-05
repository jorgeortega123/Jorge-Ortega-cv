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
  return (
    <div className="w-full flex justify-center items-center  lg:px-[56px] lg:py-10 relative">
      <div className="z-[6] fixed w-full overflow-auto h-full backdrop-blur-xl  bg-[#00000088] bottom-0 top-[44px]  flex justify-center">
        <div
          onClick={() => {
            changeCol();
          }}
          className="bg-transparent w-screen h-screen absolute"
        ></div>
        <div className=" w-11/12 flex flex-col items-center justify-center">
          <div className="relative text-white">
            <div className=" lg:text-[1.4rem] xl:lg:text-[1.8rem]">
              <p>{imgSrc.proyect}</p>
            </div>
            <div className="absolute bottom-[-20px] w-full">
              <div className="relative flex">
                <p className="absolute text-[.7rem] sm:text-[1rem] lg:text-[1.4rem] xl:lg:text-[1.8rem]">1 <span className="text-green-400">/</span> 12</p>
                <div className="flex space-x-9 mx-auto">
                  <p className="">{"<" + "Anterior"}</p>
                  <p className="">{"Siguiente" + ">"}</p>
                </div>
              </div>
            </div>
            <div
              className=" right-0 top-[-28px] lg:top-[140px] z-[7] absolute cursor-pointer hover:text-black backdrop-blur-2xl px-2 text-[19px] rounded-[5px] font-bold bg-[#fe0000db] "
              onClick={() => {
                changeCol();
              }}
            >
              CLOSE
            </div>
            <img
              onClick={(e) => {
                e.preventDefault();
              }}
              className="border-[1px] w-auto z-[8] rounded-[12px]  border-[#00000033] xl:max-h-[calc(100vh_-_280px)] "
              src={imgSrc.img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
