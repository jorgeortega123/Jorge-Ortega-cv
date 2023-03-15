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
export default function Header({
  dataText,
  staticInf,
  activeAnimationsHeader,
  changeHandlerBodyLoaded
}) {
  const { data, goToUrl, changeOverflowY } = useMainContext();
  const { scrollYProgress } = useScroll();
  // const background = useTransform(scrollYProgress, [0, 1], ["red", "blue"]);
  //w-[calc(100%_-_10rem)]
  return (
    <>
      <div onLoad={()=>changeHandlerBodyLoaded()} className="px-2 mt-[46px] border-green-500 lg:min-h-[calc(100vh_-_0px)] flex flex-col-reverse sm:flex-row space-x-2 space-y-2 justify-center items-center mb-12 w-full">
        <div className=" border-red-400 sm:w-5/12 sm:px-6 lg:pl-12 xl:pl-0 h-full lg:w-6/12 flex flex-col justify-center relative  lg:mt-[-100px] xl:mt-[-140px] xl:mx-auto xl:ml-[270px]">
          <AnimationsLoader duration={3} moveY={-10}>
            <h1 className=" text-[50px] sm:text-[7vh] md:text-[9vh] lg:text-[100px] w-11/12 sm:w-5/10 md:w-12/12 md:pl-[40px] sm:mt-[50px] xl:mt-0 xl:w-9/12 title-main-header">
              {dataText.headers.main}
            </h1>
          </AnimationsLoader>
          <div className="altura-letras mt-6">
            <AnimationsLoader duration={3} moveX={30}>
              <p className=" text-slate-400 md:text-[28px] text-[24px] font-semibold lg:text-[38px] text-developer">
                {dataText.headers.sub}
              </p>
            </AnimationsLoader>
            <AnimationsLoader duration={3} moveX={-30}>
              <p className="  text-slate-400  md:text-[24px]  lg:text-[26px]">
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
          <div className="z-[7] absolute top-[-200px] md:left-[-120px]  sm:top-auto sm:left-[-100px]">
            <div className=" flex flex-col mt-[5px] sm:mt-[590px] sm:ml-[116px] md:my-[50%]  animation-init  sm:flex-row md:flex-col md:mt-[50px]  xl:ml-0 xl:flex-col xl:mt-0 ">
              <SocialNetworks
                url={staticInf.social[1].url}
                name={staticInf.social[1].name}
                img={LinkedinSGV}
                classNamee={""}
                number={1}
              ></SocialNetworks>
              <SocialNetworks
                url={staticInf.social[2].url}
                name={staticInf.social[2].name}
                img={GithubSVG}
                classNamee={""}
                number={2}
              ></SocialNetworks>
              <SocialNetworks
                url={"https://www.instagram.com/jorgeandresyts/"}
                name={"Instagram"}
                img={InstagramSGV}
                classNamee={""}
                number={3}
              ></SocialNetworks>
            </div>
          </div>
        </div>
        <div className=" pt-[44px] sm:pt-0  w-full h-[260px]  sm:h-[45vh] relative mt-[-160px] sm:w-7/12 md:mt-0  lg:w-8/12  lg:h-[60vh]  flex flex-col items-center justify-center ">
          <img
            id="CVmonitor"
            className="w-[47vh] sm:w-[100vh] sm:ml-0 sm:mt-[-14px] mt-[-70px] ml-12 md:ml-0 xl:mt-[-130px] xl:ml-[-260px] xl:w-[100vh] "
            src={animGIF}
            alt=""
            onClick={() => activeAnimationsHeader("already")}
          />

          {/* 
          <div className="border-[4px]  lg:w-6/12 h-[240px] relative mt-[-160px] w-full md:h-full lg:h-[570px] xl:h-[660px] ">
           className="border my-auto w-[42vh] sm:w-[55vh] sm:ml-0 sm:mt-[1px] md:mt-[-40px] mt-[-70px] ml-12 md:ml-0 xl:mt-[-130px] xl:ml-[-260px] xl:w-[800px]  "<div id="images-header" className=" border-red-900">
            <img
              id="CV1"
              className="absolute right-[-30px]  w-6 lg:w-7 "
              src={
                "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805626/React-icon.svg_qqejiw.png"
              }
              alt=""
            />
            <img
              id="CV2"
              className="absolute right-[-30px] w-6 lg:w-7"
              src={
                "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805907/5968705_flyd73.png"
              }
              alt=""
            />
            <img
              id="CV3"
              className="absolute right-[-30px] w-6 lg:w-7  "
              src={
                "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806164/logo_t5er37.png"
              }
              alt=""
            />
            <img
              id="CV4"
              className="absolute right-[-30px]  w-6  lg:w-7 "
              src={
                "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805764/framer-motion-logo-DA1E33CAA1-seeklogo.com_k8smvm.png"
              }
              alt=""
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
