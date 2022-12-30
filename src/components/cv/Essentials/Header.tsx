import React from "react";
import { CallIcon } from "../../../assets/svg";
import SocialNetworks from "../SocialNetworks";
import AnimationsLoader from "./AnimationsLoader/AnimationsLoader";
import Button from "./Button";
import animGIF from "../../../assets/animation_640.gif";
import monitorIcon from "../../../assets/image/monitor.png";
import CallSVG from "../../../assets/svg/call.svg";
import LinkedinSGV from "../../../assets/svg/linkedin_.svg";
import GithubSVG from "../../../assets/github.png";
import InstagramSGV from "../../../assets/svg/instagram_.svg";
import useMainContext from "../context/useMainContext";
export default function Header({
  dataText,
  staticInf,
  activeAnimationsHeader,
}) {
  const { data, goToUrl, changeOverflowY } = useMainContext();
  return (
    <div className=" lg:min-h-screen flex flex-col-reverse sm:flex-row space-x-2 space-y-2 justify-center items-center mb-12 mt-3 w-full">
      <div className="p-2 h-full lg:w-6/12 flex flex-col justify-center relative lg:mt-[-100px] xl:mt-[-120px] xl:mx-auto xl:ml-[270px]">
        <AnimationsLoader duration={3} moveY={-10}>
          <h1 className="text-[50px] lg:text-[80px] w-10/12 sm:w-5/10 lg:mt-[70px] xl:w-9/12 title-main-header">
            {dataText.headers.main}
          </h1>
        </AnimationsLoader>
        <div className="altura-letras mt-6">
          <AnimationsLoader duration={3} moveX={30}>
            <p className=" text-slate-400 text-[24px] font-semibold lg:text-[38px]">
              {dataText.headers.sub}
            </p>
          </AnimationsLoader>
          <AnimationsLoader duration={3} moveX={-30}>
            <p className="  text-slate-400  lg:text-[26px]">
              {dataText.headers.sub1}
            </p>
          </AnimationsLoader>
        </div>

        <div className="absolute bottom-[-50px] lg:bottom-[22px] lg:right-12 xl:left-3 xl:right-auto xl:bottom-[-52px] ">
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
        <div className=" absolute top-[-200px] sm:top-auto sm:left-[-100px]">
          <div className=" flex flex-col  sm:ml-2 sm:mt-[17px] animation-init  lg:flex-row lg:ml-[100px] lg:mt-[540px]  xl:ml-0 xl:flex-col xl:mt-0 ">
            <SocialNetworks
              url={staticInf.social[1].url}
              img={LinkedinSGV}
              classNamee={""}
              number={1}
            ></SocialNetworks>

            <SocialNetworks
              url={staticInf.social[2].url}
              img={GithubSVG}
              classNamee={""}
              number={2}
            ></SocialNetworks>
            <SocialNetworks
              url={"https://github.com/jorgeortega123"}
              img={InstagramSGV}
              classNamee={""}
              number={3}
            ></SocialNetworks>
          </div>
        </div>
      </div>
      <div className=" lg:w-6/12 h-[240px] relative mt-[-160px] w-full md-h-full lg:h-[570px] xl:h-[660px] ">
        <div className="flex justify-center">
          {/* <img
        src={animGIF}
        alt=""
      /> */}
          <img
            id="CVmonitor"
            className="absolute w-[350px] sm:w-[500px] sm:ml-0 sm:mt-[1px] md:mt-[-40px] mt-[-70px] ml-12 md:ml-0 xl:mt-[-130px] xl:ml-[-260px] xl:w-[800px]  "
            src={animGIF}
            alt=""
            onClick={() => activeAnimationsHeader("already")}
          />
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
        </div>
      </div>
    </div>
  );
}
