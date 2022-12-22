import React, { useEffect } from "react";
import useMainContext from "../context/useMainContext";

export default function ImageView({ setshowImg, imgSrc }) {
  useEffect(() => {
    document.body.style.overflowY="hidden"
  })
  const changeCol = () => { 
    document.body.style.overflowY="scroll"
    setshowImg(false);

  }
  const changeOverflowY = useMainContext();
  return (
    <div className="z-[6] fixed w-full overflow-auto h-full bg-[#222222e0] backdrop-blur-lg  bottom-0 top-[44px]  flex justify-center">
      <div
        onClick={() => {
          changeCol()
        }}
        className="bg-transparent w-screen h-screen absolute"
      ></div>
      <div className=" w-11/12 flex flex-col items-center justify-center">
        <div className="relative">
          <div
            className=" right-0 top-[-28px] lg:top-[140px] z-[7] absolute cursor-pointer hover:text-black backdrop-blur-2xl px-2 text-[19px] rounded-[5px] font-bold bg-[#fe0000db] "
            onClick={() => {
              changeCol()
            }}
          >
            CLOSE
          </div>
          <img
            onClick={(e) => {
              e.preventDefault();
            }}
            className="w-auto z-[8] border-2 xl:max-h-[800px]"
            src={imgSrc}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
