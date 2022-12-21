import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { lang } from "./langs";
import "./animation.scss";
// svg's icons
import LangSvg from "./../../assets/svg/lang.svg";
import SendSGV from "./../../assets/svg/send.svg";
import { CallIcon, CvIcon } from "./../../assets/svg.jsx";
// Components
import MainContainer from "./containers/MainContainer";
import ContainerProyects from "./containers/ContainerProyects";
import ContactComponent from "./Essentials/Foooter/Contact/Contact";
import Background from "./background";
import AnimationsLoader from "./Essentials/AnimationsLoader/AnimationsLoader";
import Skills from "./Essentials/Skills";
import LoadingScreenView from "./Essentials/LoadingScreenView";
import NavView from "./Essentials/NavView";
import Footer from "./Essentials/Foooter/Footer";
import ImageView from "./Essentials/ImageView";
// Context
import useMainContext from "./context/useMainContext";
import NavExplain from "./Essentials/NavExplain";
import Header from "./Essentials/Header";
import DownloadComponent from "./Essentials/DownloadComponent";

const staticInf = lang.static;
const CvMain = () => {
  console.log(SendSGV);
  const { data, goToUrl, changeOverflowY } = useMainContext();
  const { showMenuNavbar, setshowMenuNavbar } = useMainContext(false);
  const [dataText, setdataText] = useState(lang.es);
  const [showMenuTranslate, setshowMenuTranslate] = useState(false);
  const [showDownload, setshowDownload] = useState(false);
  const [showTextOnNavbar, setshowTextOnNavbar] = useState(false);
  const [showImg, setshowImg] = useState(false);
  const [isLoadedBody, setisLoadedBody] = useState(false);
  const [defaultLang, setdefaultLang] = useState("es");
  const [imgSrc, setimgSrc] = useState(
    "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1662085373/myMoney_rqopx1.png"
  );
  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);
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
      <Background />
      <AnimatePresence>
        <LoadingScreenView
          isLoadedBody={isLoadedBody}
          changeHandlerBodyLoaded={changeHandlerBodyLoaded}
        />
      </AnimatePresence>
      <AnimatePresence>
        <DownloadComponent
          showDownload={showDownload}
          setshowDownload={setshowDownload}
          staticInf={staticInf}
          handlerChangeByDownload={handlerChangeByDownload}
        />
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
          <NavExplain showMenuNavbar={showMenuNavbar} dataText={dataText} />
        </AnimatePresence>
        <div className="page-content  relative w-[100%] md:w-[1000px] lg:w-full">
          <Header dataText={dataText} staticInf={staticInf} />

          <div className="w-full flex justify-center items-center  lg:px-[56px] lg:py-10 relative">
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
              <div className="relative mt-6">
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
                        showImage={showImage}
                      />
                    );
                  })}</div>
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
        <Footer staticInf={staticInf} goToUrl={goToUrl} />
      </div>
    </div>
  );
};

export default CvMain;
3;
