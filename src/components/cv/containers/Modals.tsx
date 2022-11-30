import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0 }}
    transition={{ type: "tween", duration:0.3 }}
  >
    <div {...props} className="bg-[#000000b5]  mt-[45px] pt-1 rounded-md w-full h-screen z-[11] mx-auto bottom-0 top-0 flex flex-col items-center ">
    
      <div className="absolute w-[280px] rounded-md bottom-0  bg-[#000000] rounded-b-xl mx-auto border-[1px]  ">
      <div  className=" text-slate-200 w-full items-end flex justify-end pr-2 mt-[6px] text-[18px] hover:text-red-500 cursor-pointer" onClick={()=>   {document.body.style.overflowY='auto'}}>x</div>
        <div className=" text-white pt-2 pl-2">{title}</div>
        <div className="bg-white w-full h-[1px] mt-[5px]"></div>
        <div className=""  >{children}</div>
      </div>
    </div></motion.div>
  );
}
