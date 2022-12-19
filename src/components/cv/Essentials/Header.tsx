import React from 'react'
import { CallIcon } from '../../../assets/svg';
import SocialNetworks from '../SocialNetworks';
import AnimationsLoader from './AnimationsLoader/AnimationsLoader';
import Button from './Button';
import animGIF from "../../../assets/animation_640.gif";
import monitorIcon from "../../../assets/image/monitor.png";
    import CallSVG from "../../../assets/svg/call.svg";
    import LinkedinSGV from "../../../assets/svg/linkedin_.svg";
    import GithubSVG from "../../../assets/github.png";
    import InstagramSGV from "../../../assets/svg/instagram_.svg";
import useMainContext from '../context/useMainContext';
export default function Header({dataText, staticInf}) {
    const { data, goToUrl, changeOverflowY } = useMainContext();
  return (
    <div className="lg:min-h-screen flex flex-col-reverse sm:flex-row space-x-2 space-y-8 justify-center mb-12 w-full">
    <div className="p-2 flex flex-col justify-center relative lg:mt-[-100px] xl:mt-[-190px] ">
      <AnimationsLoader duration={3} moveY={-10}>
        <h1 className="text-[50px] lg:text-[80px] w-10/12 sm:w-5/10 mt-12 lg-mt-0 title-main-header">
          {dataText.headers.main}
        </h1>
      </AnimationsLoader>
      <div className="altura-letras mt-6">
        <AnimationsLoader duration={3} moveX={30}>
          <p className="text-slate-400 text-[24px] font-semibold lg:text-[38px]">
            {dataText.headers.sub} 
          </p>
        </AnimationsLoader>
        <AnimationsLoader duration={3} moveX={-30}>
          <p className="text-slate-400  lg:text-[26px]">
            {dataText.headers.sub1}
          </p>
        </AnimationsLoader>
      </div>

      <div className="absolute bottom-[-50px] lg:bottom-[268px] xl:bottom-[248px] ">
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
      <div className="absolute top-[-170px] sm:top-auto sm:left-[-100px]">
        <div className="flex flex-col  sm:ml-2 sm:mt-[17px] animation-init  lg:flex-row lg:ml-[140px] lg:mt-[540px] xl:ml-0 xl:flex-col xl:mt-0 ">
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
    <div className="relative h-[200px] mr-2 sm:w-[300px] lg:w-[500px] items-center flex justify-center mt-12  ">
      {/* <img
        className="max-w-[200px] xl:min-w-[400px] mt-6 xl:mt-[120%] xl:ml-[-400px] CVmonitor z-[0] "
        src={animGIF}
        alt=""
      /> */}
       <img
        className="max-w-[280px] xl:min-w-[600px] mt-6 xl:mt-[120%] xl:ml-[-400px] CVmonitor"
        src={animGIF}
        alt=""
      />
      <img
        className="absolute CVimg-1 w-10 xl:mt-[45%] xl:w-[70px]  xl:hidden"
        src={
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805626/React-icon.svg_qqejiw.png"
        }
        alt=""
      />
      <img
        className="absolute CVimg-2 w-10 xl:mt-[-500px] xl:w-[70px] xl:hidden"
        src={
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805907/5968705_flyd73.png"
        }
        alt=""
      />
      <img
        className="absolute CVimg-3 w-10 xl:hidden"
        src={
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806164/logo_t5er37.png"
        }
        alt=""
      />
      <img
        className="absolute CVimg-4 w-10 xl:hidden"
        src={
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805764/framer-motion-logo-DA1E33CAA1-seeklogo.com_k8smvm.png"
        }
        alt=""
      />
    </div>
  </div>)
}
