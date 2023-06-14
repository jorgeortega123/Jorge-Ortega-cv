
import { useEffect, useState } from "react";
import { lang } from "../langs";
// svg's icons
import LangSvg from "../assets/svg/lang.svg";

import { CallIcon, CvIcon } from "../assets/svg.jsx";
// Components
import MainContainer from "./containers/MainContainer";

import ContactComponent from "./essentials/Foooter/Contact/Contact";

import Skills from "./essentials/Skills";

import NavView from "./essentials/Headers/NavView";
import Footer from "./essentials/Foooter/Footer";
import ImageView from "./containers/ImageView";

import FileView from "./containers/FileView";

import NavExplain from "./essentials/Headers/NavExplain";
import Header from "./essentials/Headers/Header";
import Contributions from "./essentials/Contributions";

// Context
import useMainContext from "./context/useMainContext";

import useLang from "../functions/useLang";
import Services from "./essentials/Services";
import Proyects from "./essentials/Proyects";
import Experience from "./essentials/Experience";
import Console from "./essentials/Console";
import LoadingScreen from "./essentials/LoadingScreen";
import Modal from "./context/modal/modal/Modal";
import useModal from "./context/modal/useModal";
import Button from "./essentials/Button";
import useImagesContext from "./context/useImagesContext";

const staticInf = lang.static;
const CvMain = () => {
  const { data, goToUrl, changeOverflowY } = useMainContext();
  const { isLoaded } = useImagesContext();
  const [showMenuNavbar, setshowMenuNavbar] = useState(false);
  const [dataText, setdataText] = useLang();
  const [showMenuTranslate, setshowMenuTranslate] = useState(false);
  const [showDownload, setshowDownload] = useState(false);
  const [showTextOnNavbar, setshowTextOnNavbar] = useState(false);
  const [showImg, setshowImg] = useState(false);
  const [isLoadedBody, setisLoadedBody] = useState(false);
  const [defaultLang, setdefaultLang] = useState();
  const [imgSrc, setimgSrc] = useState("");
  const [visibleContainer, setVisibleContainer] = useState(1);
  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const container1 = document.getElementById('container1');
  //     const container2 = document.getElementById('container2');
  //     const container3 = document.getElementById('container3');

  //     const container1Top = container1.getBoundingClientRect().top;
  //     const container2Top = container2.getBoundingClientRect().top;
  //     const container3Top = container3.getBoundingClientRect().top;
  //     console.log(container1Top, container2Top, container3Top)
  //     if (container1Top > window.innerHeight / 2) {
  //       console.log(container1Top , window.innerHeight / 2)
  //       setVisibleContainer(1);
  //     } else if (container2Top < window.innerHeight / 2) {
  //       console.log(123)
  //       setVisibleContainer(2);
  //     } else if (container3Top < window.innerHeight / 2) {
  //       setVisibleContainer(3);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
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
    setTimeout(() => {
      setisLoadedBody(!isLoadedBody);
    }, 600);
  };
  const handlerChangeByDownload = () => {
    setshowDownload(false);
  };
  const modalCv = useModal();
  if (!isLoaded) {
    return <LoadingScreen />;
  }
  return (
    <div id="home" className={`main-container init relative`}>
      {/* <Background /> */}
      <Console></Console>
      <NavView
        LangSvg={LangSvg}
        setshowMenuTranslate={setshowMenuTranslate}
        showMenuTranslate={showMenuTranslate}
        changeLang={changeLang}
        selectedLang={selectedLang}
        showTextOnNavbar={showTextOnNavbar}
        dataText={dataText}
        visibleContainer={visibleContainer}
      ></NavView>

 
        <Modal mini={true} modal={modalCv} title="Descargar Curriculum Vitae">
          <FileView
          modal={modalCv} 
            title={"" + staticInf.name + "_cv.pdf"}
            cv={staticInf.cv.en.cv_pdf}
            handlerChangeByDownload={handlerChangeByDownload}
            index={1}
          >
            {dataText.headers.eng}
          </FileView>
          <FileView
          modal={modalCv} 
            title={staticInf.name + "_cv.pdf"}
            cv={staticInf.cv.es.cv_pdf}
            handlerChangeByDownload={handlerChangeByDownload}
            index={2}
          >
            {dataText.headers.es}
          </FileView>
        </Modal>
    
      {showImg && (
        <div>
          <ImageView setshowImg={setshowImg} imgSrc={imgSrc} />
        </div>
      )}

      <div className="main-page mx-auto  lg:w-full relative">
     
          {showMenuNavbar && (
            <div>
              <NavExplain
                setshowMenuNavbar={setshowMenuNavbar}
                showMenuNavbar={showMenuNavbar}
                dataText={dataText}
              />
            </div>
          )}
      
        <div className="page-content  relative w-[100%] lg:w-full">
          <Header
            dataText={dataText}
            staticInf={staticInf}
            changeHandlerBodyLoaded={changeHandlerBodyLoaded}
          />
          <div className="textWrote w-12/12 lg:full mx-auto xl:mt-[-70px] ">
            <div
              id="about"
              className="w-full flex flex-col max-w-[800px] mb-7 justify-center items-center text-[1.5rem] xl:text-[1.7rem]"
            >
              <MainContainer
                className="flex relative bg-[#072346] rounded-md mt-10 w-11/12 sm:w-10/12 "
                title={dataText.headers.about}
                subtitle={dataText.headers._about}
              >
                <p1
                  className={`header-info normalText p-[10px] lg:p-5 rounded-[10px] text-[12px] leading-5 lg:leading-6  lg:text-[15px] `}
                  dangerouslySetInnerHTML={{
                    __html: dataText.headers.aboutInfo,
                  }}
                ></p1>
              </MainContainer>
              <div className="w-11/12 sm:w-10/12 ">
                <MainContainer
                  id="skills"
                  className="flex w-full "
                  subtitle={dataText.headers._knowledge}
                  title={dataText.headers.knowledge}
                >
                  <Skills
                    className=" "
                    CvIcon={CvIcon}
                    dataText={dataText}
                    modal={modalCv}
                  />{" "}
                  <div className="absolute bottom-4 ml-[200px]">
                    <Button
                      text={"Curriculum Vitae"}
                      icon={CvIcon}
                      svg={true}
                      onClick={() => {
                        modalCv.open();
                      }}
                    >
                      <CvIcon></CvIcon>
                    </Button>
                  </div>
                </MainContainer>
              </div>
            </div>
            <MainContainer
              id="proyects"
              className="flex "
              title={dataText.headers.proyects}
              subtitle={dataText.headers._proyects}
            >
              <Proyects dataText={dataText} showImage={showImage} />
            </MainContainer>

            <div className="w-full">
              <MainContainer
                id="services"
                className="flex justify-center items-center w-11/12 sm:w-10/12 lg:sm:w-8/12"
                subtitle={dataText.headers._services}
                title={dataText.headers.services}
              >
                <Services dataText={dataText}></Services>
              </MainContainer>
            </div>

            <div className=" flex flex-col items-center">
              <Contributions data={dataText} />
              {/* <CurrentlyProyect
                dataText={dataText}
                staticInf={staticInf}
              ></CurrentlyProyect> */}
            </div>
            <div className="">
              <MainContainer
                className="flex flex-col items-center"
                title="Experiencia"
                subtitle={dataText.headers._experience + "+"}
              >
                <Experience dataText={dataText}></Experience>
              </MainContainer>
            </div>

            <div id="contact" className="w-full max-w-[800px] px-5 sm:px-auto">
              <MainContainer
                className=""
                subtitle={dataText.headers._contact}
                title={dataText.headers.contact}
              >
                <ContactComponent dataText={dataText}></ContactComponent>
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
