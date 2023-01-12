import React from "react";
import MainContainer from "../containers/MainContainer";
import Button from "./Button";
var images = {
  frontend: [
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805626/React-icon.svg_qqejiw.png",
      text: "React",
      color: "#61dafb",
      crown: true,
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845292/pngegg_pnsolw.png",
      text: "HTML",
      color: "#ef6228",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/k_fhm489.png",
      text: "CSS",
      color: "#35aadd",
    },
    {
      img: "  https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845292/javascript-39404_yvaz5m.png",
      text: "Javascript",
      color: "#f7df1e",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/typescript_original_logo_icon_146317_p5xnyi.png",
      text: "Typescript",
      color: "#227acc",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1672891267/vue_pcrlxt.png",
      text: "Vuejs",
      color: "#19b986",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/sass-logo-7702_sxv52z.png",
      text: "Sass",
      color: "#d06397",
    },

    {
      img: "  https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805670/Tailwind_CSS_Logo.svg_mch3ci.png",
      text: "Tailwindcss",
      color: "#3ab7d6",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805764/framer-motion-logo-DA1E33CAA1-seeklogo.com_k8smvm.png",
      text: "Framer Motion",
      color: "#58519e",
    },
    {
      img: "    https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805814/bootstrap-logo-shadow_wsyug6.png",
      text: "Bootstrap",
      color: "#9000f3",
    },
    {
      img: " https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806164/logo_t5er37.png",
      text: "Material-UI ",
      color: "#2581cb",
    },
  ],
  backend: [
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805871/node-js-1174925_tubnek.webp",
      text: "NodeJs",
      color: "#78be2b",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805507/6202fcdee5ee8636a145a41b_1234_xvfbkk.png",
      text: "Express",
      color: "#fff",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806004/267_Python-512_gt1yds.webp",
      text: "Python",
      color: "#fbca1f",
    },
  ],
  tools: [
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805964/Git-Icon-1788C_ncuqfg.png",
      text: "git",
      color: "#f05033",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806043/2111612_ftyjzh.png",
      text: "GitHub",
      color: "#000000",
    },
    {
      img: " https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805907/5968705_flyd73.png",
      text: "Figma",
      color: "#3bbcff",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805986/6124995_xpzgrl.png",
      text: "Linux",
      color: "#eca600",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806235/download_oglnre.png",
      text: "Cloudfare Pages",
      color: "#f59739",
    },
  ],
};
export default function Skills({ dataText, setshowDownload, CvIcon }) {
  return (
    <MainContainer className="flex w-full" title={dataText.headers.knowledge}>
      <div
        id="knowledge"
        className="min-h-[400px]  max-w-full w-full bg-[#0000001a] rounded-[6px]"
      >
        <div className="p-4 select-none ">
          <div className="relative">
            <div className="sticky z-[2] w-full bg-transparent flex justify-center text-center  ">
              <p className="z-[2] bg-[#082847] w-max px-2  font-bold text-[24px]">
                Frontend
              </p>
            </div>
            <div className="z-[1] absolute left-0 top-[15px] w-full h-[1px] main-color"></div>
            <div className="grid grid-cols-4 gap-2 justify-center items-center my-3">
              {images.frontend.map((e) => {
                return (
                  <div
                    className={` h-[86px] relative w-full flex flex-col  text-center items-center skills-container hover:text-[${e.color}] hover:drop-shadow-[5px_6px_16px_${e.color}] `}
                  >
                    <p className="text-skill  lg:text-[22px] xl:text-[25px]">
                      {e.text}
                    </p>
                    {e.crown && (
                      <img
                        className="absolute top-[-24px] w-8 "
                        src={
                          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1673546913/crown_gpoase.png"
                        }
                        alt=""
                      />
                    )}
                    <img className="w-12 h-auto" src={e.img} alt="" srcset="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="sticky z-[2] w-full bg-transparent flex justify-center text-center  ">
              <p className="z-[2] bg-[#082847] w-max px-2 font-bold text-[24px]">
                Backend
              </p>
            </div>
            <div className="z-[1] absolute left-0 top-[15px] w-full h-[1px] main-color"></div>
            <div className="z-[0] absolute left-0 top-[15px] w-[70px] h-[1px] sm:w-[98px] lg:w-[120px] main-color"></div>
            <div className="w-full grid grid-cols-4 gap-2 justify-center items-center my-3">
              {images.backend.map((e) => {
                return (
                  <div
                    className={` h-[86px] w-full flex flex-col  text-center items-center skills-container hover:text-[${e.color}] hover:drop-shadow-[5px_6px_16px_${e.color}] `}
                  >
                    <p className="text-skill lg:text-[22px] xl:text-[25px]">
                      {e.text}
                    </p>
                    <img className="w-12 h-auto" src={e.img} alt="" srcset="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="sticky z-[2] w-full bg-transparent flex justify-center text-center  ">
              <p className="z-[2] bg-[#082847] w-max px-2 font-bold text-[24px]">
                {dataText.headers.tools}
              </p>
            </div>
            <div className="z-[1] absolute left-0 top-[15px] w-full h-[1px] main-color"></div>
            <div className="grid grid-cols-4 gap-2">
              {images.tools.map((e) => {
                return (
                  <div
                    className={` h-[86px] w-full flex flex-col  text-center items-center skills-container hover:text-[${e.color}] hover:drop-shadow-[5px_6px_16px_${e.color}] `}
                  >
                    <p className="text-skill lg:text-[22px] xl:text-[25px]">
                      {e.text}
                    </p>
                    <img className="w-12 h-auto" src={e.img} alt="" srcset="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-56px] right-0 flex items-center mt- ">
          <Button
            imageSize={22}
            svg={true}
            spaceY={3}
            className=""
            text="Curriculum Vitae"
            onClick={() => setshowDownload(true)}
          >
            <CvIcon></CvIcon>
          </Button>
        </div>
      </div>
    </MainContainer>
  );
}
