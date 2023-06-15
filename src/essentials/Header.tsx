import React from "react";
import { CallIcon } from "../assets/svg.jsx";

import AnimationsLoader from "../components/drafts/AnimationsLoader";
import Button from "../components/cycleComponents/Button";

import CallSVG from "../assets/svg/call.svg";

import Icons from "../styles/Icons.js";
import useImagesContext from "../context/useImagesContext.js";
import useMainContext from "../context/useMainContext.js";
import useScrollTo from "../functions/useScroll.jsx";

export default function Header({
  dataText,
  staticInf,
  activeAnimationsHeader,
  changeHandlerBodyLoaded,
}) {
  const { imageMap, isLoaded } = useImagesContext();
  const scrollToElement = useScrollTo();
  const { data, goToUrl, changeOverflowY } = useMainContext();
  // const background = useTransform(scrollYProgress, [0, 1], ["red", "blue"]);
  //w-[calc(100%_-_10rem)]
  return (
    <>
      <div
        onLoad={() => changeHandlerBodyLoaded()}
        className=" relative px-2 mt-[46px] flex flex-col mx-auto  sm:w-[550px] lg:mt-[-15px] lg:mb-[55px] lg:flex-row-reverse lg:h-screen lg:w-screen lg:justify-center"
      >
        <div className="wave-index absolute invisible lg:visible bg-[#040a2c] "></div>

        <div className="wave-index-0 absolute invisible lg:visible  ">
          <div className=" h-12 mx-auto invisible lg:visible ">
            <svg
              className="absolute bottom-[-90px] z-[-1] mt-12 w-[calc(180%)] "
              viewBox="0 0 1920 1080"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1920,1080C1600.5,1097.3333333333333,284.8333333333333,1100.3333333333333,0,1080C-284.8333333333333,1059.6666666666667,141,979.6666666666666,211,958C281,936.3333333333334,349.6666666666667,945.6666666666666,420,950C490.3333333333333,954.3333333333334,562.3333333333334,978.6666666666666,633,984C703.6666666666666,989.3333333333334,772.8333333333334,971,844,982C915.1666666666666,993,987.5,1057.1666666666667,1060,1050C1132.5,1042.8333333333333,1208.6666666666667,941.8333333333334,1279,939C1349.3333333333333,936.1666666666666,1411.8333333333333,1027.6666666666667,1482,1033C1552.1666666666667,1038.3333333333333,1627.5,980.5,1700,971C1772.5,961.5,1880.3333333333333,957.8333333333334,1917,976C1953.6666666666667,994.1666666666666,2239.5,1062.6666666666667,1920,1080C1600.5,1097.3333333333333,284.8333333333333,1100.3333333333333,0,1080"
                fill="#040a2c"
              />
            </svg>
          </div>
        </div>
        <div className="absolute  top-[15%] lg:top-[40%] left-0 gap-1 overflow-hidden flex flex-col">
          <div
            onClick={() =>
              goToUrl("https://www.linkedin.com/in/jorge-ortega-b87442254/")
            }
            className=" icons-delay w-max bg-[#0077b5] rounded-r-[18px] overflow-hidden "
          >
            <span className="absolute z-[-1] opacity-0 ml-1 pt-[2px] my-auto  text-center">
              Linkedin
            </span>
            <Icons
              icon="linkedin"
              className="w-9 lg:w-11 h-auto rounded-full"
            ></Icons>
          </div>
          <div className="icons-delay w-max bg-[#000000] rounded-r-[18px] overflow-hidden   ">
            <span
              onClick={() => goToUrl("https://github.com/jorgeortega123")}
              className="absolute z-[-1] opacity-0 ml-2 pt-[2px] my-auto  text-center"
            >
              GitHub
            </span>
            <Icons
              icon="github"
              className="w-9 lg:w-11 h-auto rounded-full p-1 bg-[#000000] text-white"
            ></Icons>
          </div>
          <div
            onClick={() => goToUrl("https://www.instagram.com/jorgeandresyts/")}
            className="icons-delay w-max bg-[#ff3612] rounded-r-[18px] overflow-hidden  "
          >
            <span className="absolute z-[-1] opacity-0 pt-[4px] my-auto  text-center text-[19px]">
              Instagram
            </span>

            <div className="w-9 lg:w-11 rounded-full overflow-hidden">
              <Icons
                icon="instagram"
                className="w-9 lg:w-11 h-auto rounded-full fill-[#e65806]"
              ></Icons>
            </div>
          </div>
        </div>
        <div></div>
        <div className="flex items-center justify-center pl-8 m-5 lg:hidden">
          {/* <p>animGift</p> */}
          <img
            draggable={false}
            id="CVmonitor"
            className="w-[40vh] lg:w-[700px] "
            src={imageMap["animGift"]}
            alt=""
            onClick={() => activeAnimationsHeader("already")}
          />
        </div>
        <div className=" flex flex-col lg:my-auto lg:w-8/12   ">
          {/* <AnimationsLoader duration={3} moveY={-10}> */}
          <div className="flex-row lg:flex lg:items-center lg:justify-end   z-[2] gap-12 lg:w-10/12">
            <h1 className="lg:w-6/12 text-[52px] lg:text-[14vh]  text-white title-main-header right-0 lg:text-right">
              Hi, I am Jorge Ortega
            </h1>
            <div className="invisible   lg:h-full lg:visible items-center flex mr-[-20px] text-[14px] max-w-[330px] text-right">
              <div className="bg-[#040a2c] backdrop-blur-lg shadow-md shadow-[#030303] rounded-[8px] ">
                <svg
                  aria-hidden="true"
                  className="w-12 h-[0px] lg:h-12 mx-auto mt-5 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 className="font-thin h-[0px]  lg:h-full  text-[16px] rounded-[12px] p-4 px-8 ">
                  Explorando el infinito universo del código, mi pasión me
                  impulsa a crear soluciones innovadoras que desafían los
                  límites del posible.
                </h3>
              </div>
            </div>
          </div>

          {/* </AnimationsLoader> */}
          <div className="altura-letras mt-0 lg:mt-6 lg:ml-0 z-[2] lg:w-[75%]">
            <AnimationsLoader duration={3} moveX={30}>
              <p className=" text-slate-400  font-semibold  text-developer lg:text-[28px]">
                {dataText.headers.sub}
              </p>
            </AnimationsLoader>
            <AnimationsLoader duration={3} moveX={-30}>
              <p className="  text-slate-400 lg:text-[25px]  ">
                {dataText.headers.sub1}
                <span
                  onClick={() => {
                    goToUrl(dataText.headers.sub_linked_link);
                  }}
                  className="cursor-pointer text-white"
                >
                  {dataText.headers.sub_linked}
                </span>
              </p>
            </AnimationsLoader>
          </div>
          <div className="z-[3] absolute bottom-[-50px]  lg:bottom-[15%]  lg:left-[16.8%]">
            <Button
              text={dataText.headers.contact}
              icon={CallSVG}
              svg={true}
              onClick={() => {
                scrollToElement("contact");
              }}
            >
              <CallIcon></CallIcon>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
