import React from "react";
import { CallIcon } from "../../../assets/svg.jsx";
import SocialNetworks from "../../SocialNetworks";
import AnimationsLoader from "../AnimationsLoader/AnimationsLoader";
import Button from "../Button";
import animGIF from "../../../assets/animation_640.gif";
import CallSVG from "../../../assets/svg/call.svg";
import LinkedinSGV from "../../../assets/svg/linkedin_.svg";
import GithubSVG from "../../../assets/github.png";
import InstagramSGV from "../../../assets/svg/instagram_.svg";
import useMainContext from "../../context/useMainContext";
import { useScroll, motion, useTransform } from "framer-motion";
import Icons from "../../../styles/icons/Icons.js";
export default function Header({
  dataText,
  staticInf,
  activeAnimationsHeader,
  changeHandlerBodyLoaded,
}) {
  const { data, goToUrl, changeOverflowY } = useMainContext();
  const { scrollYProgress } = useScroll();
  // const background = useTransform(scrollYProgress, [0, 1], ["red", "blue"]);
  //w-[calc(100%_-_10rem)]
  return (
    <>
      <div
        onLoad={() => changeHandlerBodyLoaded()}
        className=" relative px-2 mt-[46px] flex flex-col mx-auto  sm:w-[550px] lg:flex-row-reverse lg:h-screen lg:w-screen lg:justify-center"
      >
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
            <Icons icon="linkedin" className="w-9 h-auto rounded-full"></Icons>
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
              className="w-9 h-auto rounded-full p-1 bg-[#000000] text-white"
            ></Icons>
          </div>
          <div
            onClick={() => goToUrl("https://www.instagram.com/jorgeandresyts/")}
            className="icons-delay w-max bg-[#ff3612] rounded-r-[18px] overflow-hidden  "
          >
            <span className="absolute z-[-1] opacity-0 pt-[4px] my-auto  text-center text-[19px]">
              Instagram
            </span>

            <div className="w-9 rounded-full overflow-hidden">
              <Icons
                icon="instagram"
                className="w-9 h-auto rounded-full fill-[#e65806]"
              ></Icons>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pl-8 m-5">
          <img
            draggable={false}
            id="CVmonitor"
            className="w-[40vh] lg:w-[700px] "
            src={animGIF}
            alt=""
            onClick={() => activeAnimationsHeader("already")}
          />
        </div>
        <div className=" lg:my-auto lg:w-6/12 lg:items-end lg:justify-end lg:flex lg:flex-col">
          <AnimationsLoader duration={3} moveY={-10}>
            <h1 className=" lg:w-6/12 text-[50px] lg:text-[12vh] title-main-header">
              {dataText.headers.main}
            </h1>
          </AnimationsLoader>
          <div className="altura-letras mt-6">
            <AnimationsLoader duration={3} moveX={30}>
              <p className=" text-slate-400  font-semibold  text-developer">
                {dataText.headers.sub}
              </p>
            </AnimationsLoader>
            <AnimationsLoader duration={3} moveX={-30}>
              <p className="  text-slate-400  ">
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
          <div className=" absolute bottom-[-50px]  lg:bottom-[22px]  lg:right-12 xl:left-3 xl:right-auto xl:bottom-[-52px] ">
            <Button
              text={dataText.headers.contact}
              icon={CallSVG}
              svg={true}
              onClick={() => {
                goToUrl("#contact", "no-external");
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
