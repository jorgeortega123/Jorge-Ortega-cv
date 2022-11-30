import React from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function TranslateView({ changeLang, selectedLang }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ type: "tween" }}
      className="z-[0] flex-col left-[67px] text-[12px] pt-[5px] absolute top-0 pl-3 w-[140px] ml-3 text-slate-100  blockAllSelect "
    >
      <div
        className={`m-0 ${selectedLang("en")}  hover:text-green-400`}
        onClick={() => {
          changeLang("en");
        }}
      >
        &raquo; English
      </div>
      <div
        className={`m-0 ${selectedLang("es")}   hover:text-green-400 z-[0] `}
        onClick={() => {
          changeLang("es");
        }}
      >
        &raquo; Español
      </div>
    </motion.div>
  );
}
