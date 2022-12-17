import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { lang } from "./langs";
import "./animation.scss"
// svg's icons
import KeyboardSvg from "./../../assets/svg/keyboard.svg";
import DownloadSvg from "./../../assets/svg/download.svg";
import LangSvg from "./../../assets/svg/lang.svg";
import InstagramSGV from "./../../assets/svg/instagram_.svg";
import FacebookSVG from "./../../assets/svg/facebook_.svg";
import GithubSVG from "./../../assets/github.png";
import cvICON from "./../../assets/cv.png";
import MailSVG from "./../../assets/svg/mail.svg";
import CallSVG from "./../../assets/svg/call.svg";
import CopySGV from "./../../assets/svg/copy.svg";
import SendSGV from "./../../assets/svg/send.svg";
import LinkedinSGV from "./../../assets/svg/linkedin_.svg";
import star_1 from "./../../assets/svg/backGround/star_1.svg";
import cvIMAGEN from "../../assets/image/cv/cv.jpg";
import monitorIcon from "../../assets/image/monitor.png";
import { CallIcon, CvIcon } from "./../../assets/svg.jsx";
// Components
import { Autocomplete, TextField, Input } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import MainContainer from "./containers/MainContainer";
import ContainerProyects from "./containers/ContainerProyects";
import Modals from "./containers/Modals";
import FileView from "./containers/FileView";
import RoundedCarrousel from "./rounded_carrousel/RoundedCarrousel";
import Button from "./Essentials/Button";
import SocialNetworks from "./SocialNetworks";
import ContactComponent from "./Essentials/Foooter/Contact/Contact";
import Background from "./background";
import AnimationsLoader from "./Essentials/AnimationsLoader/AnimationsLoader";
import ContainerPhysics from "./canvas/ContainerPhysics";
import Skills from "./Essentials/Skills";
import LoadingScreenView from "./Essentials/LoadingScreenView";
import NavView from "./Essentials/NavView";
import Footer from "./Essentials/Foooter/Footer";
import ImageView from "./Essentials/ImageView";
// Context
import useMainContext from "./context/useMainContext";
import TranslateView from "./Essentials/TranslateView";

const staticInf = lang.static;
const CvMain = () => {
  console.log(SendSGV);
  const { data, goToUrl, changeOverflowY } = useMainContext();
  const { showMenuNavbar, setshowMenuNavbar } = useMainContext(false);
  const [dataText, setdataText] = useState(lang.en);
  const [showMenuTranslate, setshowMenuTranslate] = useState(false);
  const [showDownload, setshowDownload] = useState(false);
  const [showTextOnNavbar, setshowTextOnNavbar] = useState(false);
  const [showImg, setshowImg] = useState(false);
  const [showLineFromDownload, setshowLineFromDownload] = useState(false);
  const [showLineFromTextarea, setshowLineFromTextarea] = useState(false);
  const [onFocusTextarea, setonFocusTextarea] = useState(false);
  const [isLoadedBody, setisLoadedBody] = useState(false);
  const [showLineWhenFileIsDownloading, setshowLineWhenFileIsDownloading] =
    useState(false);
  const [textOnNavbar, settextOnNavbar] = useState("");
  const [defaultLang, setdefaultLang] = useState("en");

  const [imgSrc, setimgSrc] = useState(
    "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1662085373/myMoney_rqopx1.png"
  );

  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);
  const downloadCv = () => {
    if (showDownload === false) {
      changeOverflowY();
      setshowDownload(true);
    } else {
      changeOverflowY();
      setshowDownload(false);
    }
  };
  const showMenuTranslateFunc = () => {
    if (showMenuTranslate === false) {
      setshowMenuTranslate(true);
    } else {
      setshowMenuTranslate(false);
    }
  };
  const changeLang = (langByUser) => {
    setdataText(lang[langByUser]);
    setdefaultLang(langByUser);
    setshowMenuTranslate(false);
  };
  const selectedLang = (e) => {
    if (defaultLang === e) {
      return "text-blue-500";
    } else {
      return "text-slate-100";
    }
  };

  const showImage = (src) => {
    setshowImg(true);
    changeOverflowY();
    setimgSrc(src);
  };

  const changeHandlerBodyLoaded = () => {
    setisLoadedBody(true);
  };
  const handlerChangeByDownload = () => {
    alert("ASD");
    setshowLineWhenFileIsDownloading(true);
    setshowDownload(false);
    setTimeout(() => {
      setshowLineWhenFileIsDownloading(false);
    }, 3500);
  };
  const text_color = data?.text || "#fff";

  return (
    <div
    id="home"
      className={`main-container init text-${text_color} relative`}
    >
      <Background></Background>
      <div className="absolute h-screen flex items-center justify-center opacity-25"></div>
      <div className="w-full h-full absolute overflow-hidden">
        <img
          src={star_1}
          className="w-[20px] mt-[585px] ml-[22px] left-1 opacity-30"
          alt=""
        />
      </div>
      <div className="">
        <div className="fixed w-full h-full left">
          <div className="part relative w-full h-full">
            <span className="absolute part-1"></span>
            <span className="absolute part-2"></span>
            <span className="absolute part-3"></span>
          </div>
        </div>
        <AnimatePresence>
          {!isLoadedBody && <LoadingScreenView changeHandlerBodyLoaded={changeHandlerBodyLoaded} />}
        </AnimatePresence>
        {showLineWhenFileIsDownloading && (
          <div className="continuous-1 sticky z-[5] w-full h-[3px] top-0"></div>
        )}
        <AnimatePresence>
          {showDownload && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.1 }}
            >
              <Modals
                setshowDownload={setshowDownload}
                title="Download curriculum vitae"
              >
                <FileView
                  title={"" + staticInf.name + "_cv.pdf"}
                  cv={staticInf.cv.en.cv_pdf}
                  handlerChangeByDownload={handlerChangeByDownload}
                  index={1}
                >
                  {staticInf.cv.en.text}
                </FileView>
                <FileView
                  title={staticInf.name + "_cv.pdf"}
                  cv={staticInf.cv.es.cv_pdf}
                  handlerChangeByDownload={handlerChangeByDownload}
                  index={2}
                >
                  {staticInf.cv.es.text}
                </FileView>
              </Modals>
            </motion.div>
          )}
        </AnimatePresence>
        <NavView
          LangSvg={LangSvg}
          showMenuTranslateFunc={showMenuTranslateFunc}
          showMenuTranslate={showMenuTranslate}
          changeLang={changeLang}
          selectedLang={selectedLang}
          showTextOnNavbar={showTextOnNavbar}
          dataText={dataText}
        />
        <div className="main-page mx-auto sm:w-[500px] md:w-[600px] lg:w-full relative ">
          <AnimatePresence>
            {showMenuNavbar && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "tween" }}
                className="menu-items capitalize top-0 fixed right-0 z-[3]"
              >
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#about">{dataText.headers.about}</a>
                </p>

                <p>
                  <a href="#proyects">{dataText.headers.proyects}</a>
                </p>
                <p>
                  <a href="#contact">{dataText.headers.contact}</a>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="page-content  relative w-[100%] md:w-[1000px] lg:w-full">
            <div className="lg:min-h-screen flex flex-col-reverse sm:flex-row space-x-2 space-y-8 justify-center mb-12 w-full">
              <div className="p-2 flex flex-col justify-center relative lg:mt-[-100px] xl:mt-[-190px] ">
                <AnimationsLoader duration={3} moveY={-10}>
                  <h1 className="text-[50px] lg:text-[80px] w-10/12 sm:w-5/10 mt-12 lg-mt-0">
                    {dataText.headers.main}
                  </h1>
                </AnimationsLoader>
                <div className="altura-letras mt-6">
                  <AnimationsLoader duration={3} moveX={30}>
                    <p className="text-slate-400 text-[24px] font-semibold lg:text-[38px]">
                      {dataText.headers.sub} +
                    </p>
                  </AnimationsLoader>
                  <AnimationsLoader duration={3} moveX={-30}>
                    <p className="text-slate-400  lg:text-[26px]">{dataText.headers.sub1}</p>
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
                <img className="max-w-[200px] xl:min-w-[400px] mt-6 xl:mt-[120%] xl:ml-[-400px] CVmonitor z-[0] " src={monitorIcon} alt="" />
                <img
                  className="absolute CVimg-1 w-10 xl:mt-[45%] xl:w-[70px] ml-[-105px] xl:hidden"
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
              </div>
            </div>

            <div
              className="w-full flex justify-center items-center  lg:px-[56px] lg:py-10 relative"

            >
              {showImg && <ImageView setshowImg={setshowImg} imgSrc={imgSrc} />}
            </div>
            <div id="about" className="textWrote w-11/12 lg:full mx-auto ">
              <div className="w-full flex flex-col max-w-[800px] mb-7">
                <MainContainer
                  className="flex relative bg-[#072346] rounded-md mt-10"
                  title={dataText.headers.about}
                >
                  <div
                    className={`font-[100] normalText p-[10px] rounded-[10px] lg:text-[23px] xl:text-[26px] text-${text_color}`}
                    dangerouslySetInnerHTML={{
                      __html: dataText.headers.aboutInfo,
                    }}
                  ></div>
                  {/* <{div className="h-full bg-slate-100 top-0 ">
                    <img
                      src={cvIMAGEN}
                      className="w-[130px] max-w-[300px] "
                      alt=""
                    /> </div>} */}
                </MainContainer>
                <Skills
                  CvIcon={CvIcon}
                  dataText={dataText}
                  setshowDownload={setshowDownload}
                ></Skills>
              </div>
              <MainContainer
                id="proyects"
                className="flex "
                title={dataText.headers.proyects}
              >
                <div className="relative mt-6">
                  <div className="flex-col space-y-4 lg:space-y-7 w-full">
                    {dataText.proyects.map((e, n) => {
                      return (
                        <ContainerProyects
                          index={n}
                          title={e.title}
                          about={e.about}
                          img={e.img}
                          web={e.web}
                          langs={e.tags}
                          inGroup={e.onGroup}
                          showImage={showImage}
                        />
                      );
                    })}
                  </div>
                </div>
              </MainContainer>
              <div id="contact" className="w-full max-w-[800px]">
                <MainContainer className="" title={dataText.headers.contact}>
                  <div className="m-2 ">
                    <p className="hidden mb-3 font-bold text-[28px]">
                      {dataText.contact.about}
                    </p>
                    <ContactComponent dataText={dataText}></ContactComponent>
                  </div>
                </MainContainer>
              </div>
            </div>
          </div>
          <Footer staticInf={staticInf} goToUrl={goToUrl}></Footer>
        </div>
  
      </div>
    </div>
  );
};

export default CvMain;
3;
