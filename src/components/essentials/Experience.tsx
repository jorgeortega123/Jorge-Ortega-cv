import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
export default function Experience() {
  const [showTextInfo, setshowTextInfo] = useState(false);
  const togle_vanila_show_text = () => {
    var elem = document.getElementById("show-text");
  };
  return (
    <div className="w-11/12 sm:w-10/12 md:w-6/12  px-2 ">
      <div className="main flex flex-col items-center justify-center">
        <div className="relative text-black ">
          <img
            className="w-full max-w-[700px] mx-auto"
            src="https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670434478/Screenshot_from_2022-11-07_17-59-26_1_hnvlbu.png"
            alt=""
          />
          <div className="absolute top-[-1rem] border border-[#ffffff] px-6 bg-[#ffffffa2] rounded-[8px] backdrop-blur-sm text-[1.8rem] font-bold left-3 altura-letras py-1 tracking-wider">
            LLK
          </div>
          <div className="absolute rounded-[8px] backdrop-blur-sm w-full px-3 ">
            <Button
              text="What was my role?"
              className="font-semibold absolute bottom-2 right-2"
              onClick={() => setshowTextInfo(!showTextInfo)}
            ></Button>
          </div>

          <AnimatePresence>
            {showTextInfo && (
              <motion.div
                initial={{ opacity: 1, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", duration: 0.7 }}
                className="max-w-6/12 text-white px-2     "
              >
                <p className="altura-letras">
                  Give proposals to the client on how to model the website. What
                  essential elements do you want to appear on your page. Like
                  menu, map, promotions and order status. Also contribute with
                  pieces of code dedicated to the visual part
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
