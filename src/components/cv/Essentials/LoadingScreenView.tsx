import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreenView({changeHandlerBodyLoaded, isLoadedBody}) {
  useEffect(() => {
    setTimeout(() => {
      changeHandlerBodyLoaded()
    }, 700);
  })
  if (isLoadedBody) return <></>;
  return (
    <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0 }}
    transition={{ type: "tween" }}
  >
    <div className=" z-[7] absolute top-0 w-full h-screen bg-[#0f2d51] text-[54px] flex justify-center">
      <span className="bg-white"></span>
      <div className="relative w-full h-[1px] rounded-2xl bg-transparent">
        <div className=" loadServer h-[1px] bg-white rounded-2xl"></div>
      </div>
    </div>
  </motion.div>
  )
}
