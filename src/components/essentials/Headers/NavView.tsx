import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import TranslateView from "../TranslateView";
import AnimationsLoader from "../AnimationsLoader/AnimationsLoader";
import Icons from "../../../styles/icons/Icons";

export default function NavView({
  visibleContainer,
  setshowMenuTranslate,
  LangSvg,
  showMenuTranslate,
  changeLang,
  selectedLang,
  children,
  dataText,
}) {
  const [showMenuNavbar, setshowMenuNavbar] = useState(false);
  const menu = [
    {
      text: "",
      to: "",
    },
  ];

  return (
    <div className=" nav h-[46px] fixed top-0 blockAllSelect flex items-center justify-center ">
      {showMenuNavbar && (
        <>
          <div
            onClick={() => {
              document
                .getElementById("button-nav-id")
                ?.classList.remove("active-nav");
              setshowMenuNavbar(!showMenuNavbar);
            }}
            className="anim-modal h-screen top-[46px] w-screen absolute z-[4] bg-[#0000006b]  "
          ></div>
          <div className=" menu-items  absolute right-0 top-[100%] z-[5] ">
            <div className="capitalize ">
              <p className="hover:text-[#66ff00] transition-all">
                <a onClick={() => setshowMenuNavbar(false)} href="#home">
                  {dataText.headers.home}
                </a>
              </p>
              <p className="hover:text-[#66ff00] transition-all">
                <a onClick={() => setshowMenuNavbar(false)} href="#about">
                  {dataText.headers.about}
                </a>
              </p>

              <p className="hover:text-[#66ff00] transition-all">
                <a onClick={() => setshowMenuNavbar(false)} href="#proyects">
                  {dataText.headers.proyects}
                </a>
              </p>
              <p className="hover:text-[#66ff00] transition-all">
                <a onClick={() => setshowMenuNavbar(false)} href="#contact">
                  {dataText.headers.contact}
                </a>
              </p>
              <div className="absolute bottom-0 left-2 text-[10px]">
                <p>Made with &hearts; by Jorge Ortega</p>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="w-full max-w-[800px] relative h-full">
        <div className="relative flex flex-row-reverse w-full h-full lg:max-w-[200px] select-none">

          <div className="lg:hidden flex  items-center h-full p-3 gap-5">
            <a className="" href="#home">
              <Icons
                className={`stroke-[#ebebebd0] w-7  ${visibleContainer=== 2 ? "stroke-[#66ff00]":""}`}
                fromNav={true}
                icon={"home"}
              ></Icons>
            </a>
            <a href="#skill">
              <Icons
                className={`fill-[#ebebebd0] w-7 ${visibleContainer=== 2 ? "fill-[#66ff00]":""}`}
                fromNav={true}
                icon={"skill"}
              ></Icons>
            </a>
            <div>
              <Icons
                className={`stroke-[#ebebebd0] w-7  ${visibleContainer=== 3 ? "fill-[#66ff00]":""}`}
                fromNav={true}
                icon={"portfolio"}
              ></Icons>
            </div>
          </div>

          <div className="flex blockAllSelect w-full">
            <div className="items-center flex">
              <p className="useNavLetter px-2 text-[1.1rem] ">Jorge Ortega</p>
            </div>
            {/* <div className="z-[2] ">
              <AnimationsLoader duration={3} moveX={10}>
                <img
                  src={LangSvg}
                  title={"Translate page"}
                  className="svgDefaultColor w-[30px] h-[30px] m-2 z-[1] right-0"
                  alt=""
                  onClick={() => {
                    setshowMenuTranslate(!showMenuTranslate);
                  }}
                />
              </AnimationsLoader>
            </div> */}
            <AnimatePresence>
              {showMenuTranslate && (
                <TranslateView
                  showMenuTranslate={showMenuTranslate}
                  changeLang={changeLang}
                  selectedLang={selectedLang}
                  setshowMenuTranslate={setshowMenuTranslate}
                />
              )}
            </AnimatePresence>
          </div>
        </div>{" "}
        <div className=" top-0 invisible h-full pr-5 flex justify-center items-center lg:visible absolute text-slate-300 right-0 useNavLetter text-[1rem] ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween" }}
            className="capitalize flex space-x-8"
          >
            <p className="hover:text-white">
              <a href="#home" className="flex flex-row-reverse items-center">
                {dataText.headers.home}
              
              </a>
            </p>
            <p className="hover:text-white">
              <a href="#about">{dataText.headers.about}</a>
            </p>

            <p className="hover:text-white">
              <a href="#proyects">{dataText.headers.proyects}</a>
            </p>
            <p className="hover:text-white">
              <a href="#proyects">{dataText.headers.services}</a>
            </p>
            <p className="hover:text-white">
              <a href="#contact">{dataText.headers.contact}</a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
