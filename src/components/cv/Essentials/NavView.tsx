import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import useMainContext from '../context/useMainContext';
import TranslateView from './TranslateView';
import AnimationsLoader from './AnimationsLoader/AnimationsLoader';
export default function NavView({LangSvg, showMenuTranslateFunc, showMenuTranslate, changeLang, selectedLang, children, dataText}) {
  const {showMenuNavbar, setshowMenuNavbar} = useMainContext()
  return (
    <>
    <div className="nav h-[46px] fixed top-0 blockAllSelect flex items-center justify-center ">
          <div className="w-full max-w-[800px] relative">
            <div className="flex w-full lg:max-w-[200px]">
              <button
              id='button-nav-id'
                className=" button-nav visible lg:invisible "
                onClick={() => {
                  document.getElementById("button-nav-id")?.classList.add("active-nav")
                  if (showMenuNavbar === true) {
                    setshowMenuNavbar(false);
                  } else {
                    document.getElementById("button-nav-id")?.classList.remove("active-nav")
                    setshowMenuNavbar(true);
                  }
                }}
              >
                <div className="line l1"></div>
                <div className="line l2"></div>
                <div className="line l3"></div>
              </button>
              <div className="flex blockAllSelect relative w-[100px]">
                <div className="items-center flex">
                </div>
                <div className='z-[12]'>
                <AnimationsLoader duration={3} moveX={10}>
                  <img
                    src={LangSvg}
                    title={"Translate page"}
                    className="svgDefaultColor w-[30px] h-[30px] m-2 z-[1]"
                    alt=""
                    onClick={() => {
                      showMenuTranslateFunc();
                    }}
                  /></AnimationsLoader>
                  <AnimatePresence>
                    {showMenuTranslate && (
                      <TranslateView
                        changeLang={changeLang}
                        selectedLang={selectedLang}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="invisible h-full pr-5 flex justify-center items-center lg:visible absolute text-slate-100 right-0 useNavLetter ">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "tween" }}
                  className="capitalize flex space-x-5 text-[15px]"
                >
                  <p className="hover:text-[#66ff00]">
                    <a href="#home">{dataText.headers.home}</a>
                  </p>
                  <p className="hover:text-[#66ff00]">
                    <a href="#about">{dataText.headers.about}</a>
                  </p>

                  <p className="hover:text-[#66ff00]">
                    <a href="#proyects">{dataText.headers.proyects}</a>
                  </p>
                  <p className="hover:text-[#66ff00]">
                    <a href="#contact">{dataText.headers.contact}</a>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {children}</>
  )
}
