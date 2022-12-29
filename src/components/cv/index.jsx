import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { lang } from "./langs";
import "./animation.scss";
// svg's icons
import LangSvg from "./../../assets/svg/lang.svg";
import SendSGV from "./../../assets/svg/send.svg";
import Postgree from "./../../assets/image/p.png";
import Angular from "./../../assets/image/a.png";
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
import Modals from "./containers/Modals";
import FileView from "./containers/FileView";
import InProgressKnowledge from "./containers/InProgressKnowledge";

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
  const [defaultLang, setdefaultLang] = useState("en");
  const [imgSrc, setimgSrc] = useState(
    "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1662085373/myMoney_rqopx1.png"
  );
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    if (document.readyState === "complete") {
      setisLoadedBody(true);
    } else {
      window.addEventListener("load", () => {setisLoadedBody(true); activeAnimationsHeader()});
      return () =>
        document.removeEventListener("load", () =>  {setisLoadedBody(true); activeAnimationsHeader()});
    }
  }, []);
  const activeAnimationsHeader = (already) => {
 
    var idsAnim = ["CV1", "CV2", "CV3", "CV4"]
    for (let i=0; i<idsAnim.length; i++) { 
      if (already) {document.getElementById(idsAnim[i]).classList.remove(`CVimg-${i + 1}`)} 
        document.getElementById(idsAnim[i]).classList.add(`CVimg-${i + 1}`)
      }
      
    
  }
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
    setshowLineWhenFileIsDownloading(true);
    setshowDownload(false);
  };
  const text_color = data?.text || "#fff";
  return (
    <div
      id="home"
      className={`main-container init text-${text_color} relative`}
    > 
    {!isLoadedBody && <AnimatePresence>
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
      </AnimatePresence>}
      <Background />
      <AnimatePresence>
        {showDownload && (
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
          <NavExplain showMenuNavbar={showMenuNavbar} dataText={dataText} />
        </AnimatePresence>
        <div className="page-content  relative w-[100%] md:w-[1000px] lg:w-full">
          <Header dataText={dataText} staticInf={staticInf} activeAnimationsHeader={activeAnimationsHeader} />

          <div className="w-full flex justify-center items-center  lg:px-[56px] lg:py-10 relative">
            {showImg && <ImageView setshowImg={setshowImg} imgSrc={imgSrc} />}
          </div>
          <div
            id="about"
            className="textWrote w-11/12 lg:full mx-auto xl:mt-[-120px] "
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
                    })}
                  </div>
                </div>
              </div>
            </MainContainer>
            <div className=" flex justify-center w-full lg:w-full xl:w-8/12 border-[1px] border-[#0000003c] bg-[#00000023] rounded-[6px] pl-4 pr-4 pb-7 pt-2">
              <div className=" min-w-full lg:min-w-[400px] max-w-full lg:max-w-[700px] flex flex-col ">
                <div className="">Currently I'm learning:</div>
                <div className=" flex flex-col space-y-4">
                <InProgressKnowledge
                  icon={Angular}
                  name="Angular"
                  percentage={46}
                />
                <InProgressKnowledge
                  icon={Postgree}
                  name="PostgreSQL"
                  percentage={76}
                /></div>
              </div>
            </div>
           
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
