import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { lang } from "./langs";
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
// Components
import MainContainer from "./containers/MainContainer";
import ContainerProyects from "./containers/ContainerProyects";
import Modals from "./containers/Modals";
import FileView from "./containers/FileView";
import RoundedCarrousel from "./rounded_carrousel/RoundedCarrousel";
import Button from "./Essentials/Button";
import SocialNetworks from "./SocialNetworks";
import ContactComponent from "./Essentials/Foooter/Contact/Contact";
import Background from "./background";
// Context
import useMainContext from "./context/useMainContext";
import TranslateView from "./Essentials/TranslateView";
import LoadingScreenView from "./Essentials/LoadingScreenView";
import NavView from "./Essentials/NavView";
import Footer from "./Essentials/Foooter/Footer";
import ImageView from "./Essentials/ImageView";
import { CallIcon, CvIcon } from "./../../assets/svg.jsx";
import AnimationsLoader from "./Essentials/AnimationsLoader/AnimationsLoader";
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
      className={`main-container init text-${text_color} relative`}
      onLoad={() => {
        changeHandlerBodyLoaded();
      }}
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
          {!isLoadedBody && <LoadingScreenView />}
        </AnimatePresence>
        {showLineWhenFileIsDownloading && (
          <div className="continuous-1 sticky z-[5] w-full h-[3px] top-0"></div>
        )}
        <AnimatePresence>
          {showDownload && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", duration: 1 }}
            >
              <Modals title="Download curriculum vitae">
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
                className="menu-items capitalize top-0 fixed right-0"
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
            <div className="flex flex-col-reverse sm:flex-row space-x-2 space-y-8 justify-center lg:mt-[140px] mb-12 w-full">
              <div className="p-2 flex flex-col justify-center relative ">
                <AnimationsLoader duration={3} moveY={-10}>
                  <h1 className="text-[50px] w-10/12 sm:w-5/10">
                    {dataText.headers.main}
                  </h1>
                </AnimationsLoader>
                <div className="altura-letras mt-6">
                  <AnimationsLoader duration={3} moveX={30}>
                    <p className="text-slate-400 text-[24px] font-semibold">
                      {dataText.headers.sub}
                    </p>
                  </AnimationsLoader>
                  <AnimationsLoader duration={3} moveX={-30}>
                    <p className="text-slate-400">{dataText.headers.sub1}</p>
                  </AnimationsLoader>
                </div>

                <div className="absolute bottom-[-50px]">
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
                  <div className="flex flex-col  sm:ml-2 sm:mt-[17px] animation-init ">
                    <SocialNetworks
                      url={staticInf.social[2].url}
                      img={LinkedinSGV}
                      classNamee={""}
                      number={1}
                    ></SocialNetworks>

                    <SocialNetworks
                      url={staticInf.social[3].url}
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
              <div className="border-2  h-[200px] mr-2 sm:w-[300px] lg:w-[500px] items-center flex justify-center mt-12  ">
                <img className="max-w-[200px] mt-6 " src={monitorIcon} alt="" />
              </div>
            </div>

            <div
              className="w-full flex justify-center items-center  lg:px-[56px] lg:py-10 relative"
              id="home"
            >
              {showImg && <ImageView setshowImg={setshowImg} imgSrc={imgSrc} />}
            </div>
            <div id="about" className="textWrote w-11/12 lg:full mx-auto ">
              <div className="w-full flex flex-col max-w-[800px]">
                <MainContainer
                  className="flex relative bg-[#072346] rounded-md mt-10"
                  title={dataText.headers.about}
                >
                  <div
                    className={`font-[100] normalText p-[10px] rounded-[10px] text-${text_color}`}
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
                <MainContainer
                  className="flex"
                  title={dataText.headers.knowledge}
                >
                  <div
                    id="knowledge"
                    className="textWrote w-12/12 lg:w-full mx-auto relative "
                  >
                    <div
                      className={`normalText containerText text-${text_color}`}
                      dangerouslySetInnerHTML={{
                        __html: dataText.headers.aboutInfo2,
                      }}
                    ></div>
                    <div className="absolute bottom-[-36px] right-0 flex items-center ">
                      <Button
                        imageSize={22}
                        svg={true}
                        spaceY={3}
                        text="Curriculum Vitae"
                        icon={cvICON}
                        onClick={() => setshowDownload(true)}
                      >
                        <CvIcon></CvIcon>
                      </Button>
                    </div>
                  </div>
                </MainContainer>
                <div className="w-full lg:w-5/12 mt-[80px] ">
                  <RoundedCarrousel></RoundedCarrousel>
                </div>
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
        </div>
        <Footer staticInf={staticInf} goToUrl={goToUrl}></Footer>
      </div>
    </div>
  );
};

export default CvMain;
3;
