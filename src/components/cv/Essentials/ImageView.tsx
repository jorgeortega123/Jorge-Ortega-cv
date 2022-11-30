import React from 'react'
import useMainContext from '../context/useMainContext';

export default function ImageView({setshowImg, imgSrc}) {
    const changeOverflowY = useMainContext()
  return (
    <div
    onClick={() => {
      setshowImg(false);
      changeOverflowY();
    }}
    className="z-[6] fixed w-full overflow-auto h-full bg-[#222222e0] backdrop-blur-lg  bottom-0 top-[44px]  flex justify-center"
  >
    <div className=" w-11/12 flex flex-col items-center justify-center">
      <div className="relative">
        <div
          className=" right-0 top-[-28px] lg:top-[140px] z-[7] absolute cursor-pointer hover:text-black backdrop-blur-2xl px-2 text-[19px] rounded-[5px] font-bold bg-[#fe0000db] "
          onClick={() => {
            setshowImg(false);
            changeOverflowY();
          }}
        >
          CLOSE
        </div>
        <img
          onClick={(e) => {
            e.preventDefault();
          }}
          className="w-screen z-[8] border-2"
          src={imgSrc}
          alt=""
        />
      </div>
    </div>
  </div>
  )
}
