import React, { useState } from "react";


 import TranslateView from "../components/drafts/TranslateView";

import useScrollTo from "../functions/useScroll";
import Icons from "../styles/Icons";

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
  const scrollToElement = useScrollTo();
  const menu = [
    {
      text: "",
      to: "",
    },
  ];
  const handleClick = (id: string) => {
    scrollToElement(id);
    // scroll(id)
  };

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
                <a onClick={() => handleClick("proyects")}>
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
            <a onClick={() => handleClick("about")} className="">
              <Icons
                className={`stroke-[#ebebebd0] w-7  `}
                fromNav={true}
                icon={"home"}
              ></Icons>
            </a>
            <a onClick={() => handleClick("skills")}>
              <Icons
                className={`fill-[#ebebebd0] w-7 `}
                fromNav={true}
                icon={"skill"}
              ></Icons>
            </a>
            <div onClick={() => handleClick("proyects")}>
              <Icons
                className={`stroke-[#ebebebd0] w-7  `}
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
        
              {showMenuTranslate && (
                <TranslateView
                  showMenuTranslate={showMenuTranslate}
                  changeLang={changeLang}
                  selectedLang={selectedLang}
                  setshowMenuTranslate={setshowMenuTranslate}
                />
              )}
        
          </div>
        </div>{" "}
        <div className=" top-0 invisible h-full pr-5 flex justify-center items-center lg:visible absolute text-slate-300 right-0 useNavLetter text-[1rem] ">
          <div className="capitalize flex space-x-8">
            <p onClick={() => handleClick("home")} className="hover:text-white">
              <a className="flex flex-row-reverse items-center">
                {dataText.headers.home}
              </a>
            </p>
            <p
              onClick={() => handleClick("about")}
              className="hover:text-white"
            >
              <a>{dataText.headers.about}</a>
            </p>

            <p
              onClick={() => handleClick("proyects")}
              className="hover:text-white"
            >
              <a>{dataText.headers.proyects}</a>
            </p>
            <p
              onClick={() => handleClick("services")}
              className="hover:text-white"
            >
              <a>{dataText.headers.services}</a>
            </p>
            <p
              onClick={() => handleClick("contact")}
              className="hover:text-white"
            >
              <a href="#contact">{dataText.headers.contact}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
