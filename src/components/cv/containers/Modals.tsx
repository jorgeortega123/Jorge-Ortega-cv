import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "../../../assets/svg";
export default function Modals({
  title = "as",
  children = "",
  setshowDownload,
  ...props
}: {
  title: string;
  setshowDownload: (data:boolean)=> void;
  children: any;
}) {
  const [showmodal, setshowmodal] = useState(true);
  if (!showmodal) {
    return;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y:20 }}
      animate={{ opacity: 1, x: 0 , y:0}}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <div
        {...props}
        className="z-[2] fixed backdrop-blur-sm  bg-[#84a3c955]  border-slate-300 mt-[45px] pt-1 rounded-md w-full h-screen mx-auto top-0 flex flex-col items-center "
      >
        <div className=" absolute w-[280px] rounded-md top-[30%]  bg-[#0f2d51] rounded-b-xl mx-auto  shadow-sm shadow-[#66ff00]  ">
          <div className="flex justify-between">
          <div className=" text-white pt-2 pl-2">{title}</div>
            <div
              className="bg-[#ffffff0c] px-2 rounded-lg text-red-500 items-end flex justify-end pr-2 mt-[6px] text-[18px] hover:text-red-600 cursor-pointer"
              onClick={() => {
                setshowDownload(false)
              }}
            >
              x
            </div>
   
          </div>

          <div className="bg-white w-full h-[1px] mt-[5px]"></div>
          <div className="p-3">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}
