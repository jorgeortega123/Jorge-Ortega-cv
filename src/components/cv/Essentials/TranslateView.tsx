import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modals from "../containers/Modals";
export default function TranslateView({ changeLang, selectedLang }) {

  return (

    <motion.div
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ type: "tween" }}
      className=" absolute z-[0] flex-col left-0 p-3 text-[12px] w-[140px] bg-[#000000c7] text-slate-100  blockAllSelect "
    >
      <div className="flex flex-col space-y-2">
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
      </div>
    </motion.div>
  );
}
