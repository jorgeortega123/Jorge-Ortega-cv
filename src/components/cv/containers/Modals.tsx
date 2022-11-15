import React, { useState } from "react";

export default function Modals({
  title = "as",
  children = "",
  ...props
}: {
  title: string;
  children: any;
}) {
  const [showmodal, setshowmodal] = useState(true)
  if (!showmodal) { 
    return;
  }

  return (
    <div {...props} className=" backdrop-blur-sm fixed mt-[45px] pt-1 rounded-md w-full h-full z-[11] mx-auto bottom-0 top-0 flex flex-col items-center ">
    
      <div className="w-[280px] rounded-md  bg-[#000000] rounded-b-xl  backdrop-blur-sm mx-auto border-[1px]  ">
      <div  className="absolute  text-slate-200 w-full items-end flex justify-end pr-2 mt-[6px] text-[18px] hover:text-red-500 cursor-pointer" onClick={()=>   {document.body.style.overflowY='auto';setshowmodal(false)}}>x</div>
        <div className=" text-white pt-2 pl-2">{title}</div>
        <div className="bg-white w-full h-[1px] mt-[5px]"></div>
        <div className=""  >{children}</div>
      </div>
    </div>
  );
}
