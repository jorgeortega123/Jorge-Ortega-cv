import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "../../../assets/svg";
export default function Modals({
  title = "as",
  children = "",
  setshowDownload,
  ...props
}: {
  title: string;
  setshowDownload: (data: boolean) => void;
  children: any;
}) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
  });

  const [showmodal, setshowmodal] = useState(true);
  const changeRef = () => { 
    document.body.style.overflowY="scroll"
    setshowDownload(false);
  }
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0 }}
    transition={{ type: "tween", duration:.2 }}
  >
    <div
      {...props}
      className="z-[2] fixed backdrop-blur-sm  bg-[#00000061]  border-slate-300 pt-1 rounded-md w-full h-screen mx-auto top-0 flex flex-col items-center "
    >
      <div
        onClick={() => {
          changeRef()
        }}
        className=" w-screen h-screen"
      ></div>
      <div className=" absolute w-[280px] rounded-md top-[30%]  bg-[#0f2d51] rounded-b-xl mx-auto  shadow-sm border-2 border-[#0000006b] ">
        <div className="flex justify-between">
          <div className=" text-white pt-2 pl-2 ">{title}</div>
          <div
            className="bg-[#0000002e] mr-[1px] px-2 rounded-[6px] text-red-500 items-end flex justify-end pr-2 mt-[6px] text-[18px] hover:text-red-600 cursor-pointer"
            onClick={() => {
              changeRef()
            }}
          >
            x
          </div>
        </div>

        <div className="bg-white w-full h-[1px] mt-[7px]"></div>
        <div className="p-3 z-[2]">{children}</div>
      </div>
    </div></motion.div>
  );
}
