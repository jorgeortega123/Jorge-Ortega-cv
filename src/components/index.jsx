import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { lang } from "../langs";
import "./animation.scss";
// svg's icons
import LangSvg from "../assets/svg/lang.svg";
import SendSGV from "../assets/svg/send.svg";
import { CallIcon, CvIcon } from "../assets/svg.jsx";
// Components
import MainContainer from "./containers/MainContainer";
import ContainerProyects from "./containers/ContainerProyects";
import ContactComponent from "./essentials/Foooter/Contact/Contact";
import Background from "./background";
import AnimationsLoader from "./essentials/AnimationsLoader/AnimationsLoader";
import Skills from "./essentials/Skills";
import LoadingScreenView from "./essentials/LoadingScreenView";
import NavView from "./essentials/Headers/NavView";
import Footer from "./essentials/Foooter/Footer";
import ImageView from "./containers/ImageView";
import Modals from "./containers/Modals";
import FileView from "./containers/FileView";
import InProgressKnowledge from "./containers/InProgressKnowledge";
import NavExplain from "./essentials/Headers/NavExplain";
import Header from "./essentials/Headers/Header";
import Contributions from "./essentials/Contributions";
import CurrentlyProyect from "./essentials/CurrentlyProyect";
// Context
import useMainContext from "./context/useMainContext";

import useLang from "../functions/useLang";

const staticInf = lang.static;
const CvMain = () => {
  const { data, goToUrl, changeOverflowY } = useMainContext();
  const { showMenuNavbar, setshowMenuNavbar } = useMainContext(false);
  const [dataText, setdataText] = useLang();
  const [showMenuTranslate, setshowMenuTranslate] = useState(false);
  const [showDownload, setshowDownload] = useState(false);
  const [showTextOnNavbar, setshowTextOnNavbar] = useState(false);
  const [showImg, setshowImg] = useState(false);
  const [isLoadedBody, setisLoadedBody] = useState(false);
  const [defaultLang, setdefaultLang] = useState();
  const [imgSrc, setimgSrc] = useState("");
  const text_color = data?.text || "#fff";
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    if (document.readyState === "complete") {
      setisLoadedBody(true);
    } else {
      window.addEventListener("load", () => {
        setisLoadedBody(true);
      });
      return () =>
        document.removeEventListener("load", () => {
          setisLoadedBody(true);
        });
    }
  }, []);
  const showMenuTranslateFunc = () => {
    setshowMenuTranslate(!showMenuTranslate);
  };
  const changeLang = (langByUser) => {
    setdataText(langByUser);
    setshowMenuTranslate(false);
  };
  const selectedLang = (e) => {
    return defaultLang === e ? true : false;
  };
  const showImage = (data) => {
    setshowImg(true);
    setimgSrc(data);
  };
  const changeHandlerBodyLoaded = () => {
    setisLoadedBody(true);
  };
  const handlerChangeByDownload = () => {
    setshowDownload(false);
  };

  return (
    <div
      id="home"
      className={`main-container init text-${text_color} relative`}
    >
      <Background />
      <NavView
        LangSvg={LangSvg}
        showMenuTranslateFunc={showMenuTranslateFunc}
        showMenuTranslate={showMenuTranslate}
        changeLang={changeLang}
        selectedLang={selectedLang}
        showTextOnNavbar={showTextOnNavbar}
        dataText={dataText}
      ></NavView>
      {!isLoadedBody && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween" }}
          >
            <div className=" z-[7] absolute top-0 w-full h-screen bg-[#0f2d51] text-[54px] flex justify-center">
              <span className="bg-white"></span>
              <div className="relative w-full h-[1px] rounded-2xl bg-transparent">
                <div className=" loadServer h-[1px] bg-white rounded-2xl"></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      <AnimatePresence>
        {showDownload && (
          <Modals
            setshowDownload={setshowDownload}
            title={dataText.headers.downloadCv}
          >
            <FileView
              title={"" + staticInf.name + "_cv.pdf"}
              cv={staticInf.cv.en.cv_pdf}
              handlerChangeByDownload={handlerChangeByDownload}
              index={1}
            >
              {dataText.headers.eng}
            </FileView>
            <FileView
              title={staticInf.name + "_cv.pdf"}
              cv={staticInf.cv.es.cv_pdf}
              handlerChangeByDownload={handlerChangeByDownload}
              index={2}
            >
              {dataText.headers.es}
            </FileView>
          </Modals>
        )}
      </AnimatePresence>
      {showImg && (
        <motion.div
          initial={{ opacity: 0, zIndex: 7 }}
          animate={{ opacity: 1, x: 0, zIndex: 7 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <ImageView setshowImg={setshowImg} imgSrc={imgSrc} />
        </motion.div>
      )}
      <div className="main-page mx-auto sm:w-[500px] md:w-[600px] lg:w-full ">
        <AnimatePresence>
          {showMenuNavbar && (
            <motion.div
              initial={{ opacity: 0, zIndex: 7 }}
              animate={{ opacity: 1, x: 0, zIndex: 7 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <NavExplain
                setshowMenuNavbar={setshowMenuNavbar}
                showMenuNavbar={showMenuNavbar}
                dataText={dataText}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="page-content  relative w-[100%] lg:w-full">
          <Header dataText={dataText} staticInf={staticInf} />
          <div
            id="about"
            className="textWrote w-11/12 lg:full mx-auto xl:mt-[-70px] "
          >
            <div className="w-full flex flex-col max-w-[800px] mb-7">
              <MainContainer
                className="flex relative bg-[#072346] rounded-md mt-10"
                title={dataText.headers.about}
              >
                <div
                  className={`font-[100] header-info normalText p-[10px] rounded-[10px] lg:text-[23px] xl:text-[26px] text-${text_color}`}
                  dangerouslySetInnerHTML={{
                    __html: dataText.headers.aboutInfo,
                  }}
                ></div>
              </MainContainer>
              <Skills
                CvIcon={CvIcon}
                dataText={dataText}
                setshowDownload={setshowDownload}
              />
            </div>
            <MainContainer
              id="proyects"
              className="flex "
              title={dataText.headers.proyects}
            >
              <div id="proyects-view" className="relative mt-6">
                <div className="w-full flex justify-center items-center">
                  <div className="flex-col space-y-4 lg:space-y-7 w-full xl:w-8/12">
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
                          repo={e.repo}
                          showImage={showImage}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </MainContainer>
            <Contributions data={dataText} />
            <CurrentlyProyect
              dataText={dataText}
              staticInf={staticInf}
            ></CurrentlyProyect>

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
        <Footer dataText={dataText} staticInf={staticInf} goToUrl={goToUrl} />
      </div>
    </div>
  );
};

export default CvMain;
3;
