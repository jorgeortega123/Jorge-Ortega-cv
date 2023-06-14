import React, { useEffect } from "react";

export default function LoadingScreenView({isLoadedBody}) {

  if (isLoadedBody) return <></>;
  return (
   
    <div className=" z-[7] absolute top-0 w-full h-screen bg-[#0f2d51] text-[54px] flex justify-center">
      <span className="bg-white"></span>
      <div className="relative w-full h-[1px] rounded-2xl bg-transparent">
        <div className=" loadServer h-[1px] bg-white rounded-2xl"></div>
      </div>
    </div>

  )
}
