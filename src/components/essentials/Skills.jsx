import React from "react";
import useLang from "../../functions/useLang";
import MainContainer from "../containers/MainContainer";
import useImagesContext from "../context/useImagesContext";
import Button from "./Button";

const images = [
  {
    title: "frontend",
    data: [
      {
        id: "react",
        img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805626/React-icon.svg_qqejiw.png",
        text: "React",
        color: "#61dafb",
        crown: true,
      },
      {
        id: "html",
        img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845292/pngegg_pnsolw.png",
        text: "HTML",
        color: "#ef6228",
      },
      {
        id: "css",
        img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/k_fhm489.png",
        text: "CSS",
        color: "#35aadd",
        hidden: true,
      },
      {
        id: "javascript",
        img: "  https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845292/javascript-39404_yvaz5m.png",
        text: "Javascript",
        color: "#f7df1e",
      },
      {
        id: "typescript",
        img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/typescript_original_logo_icon_146317_p5xnyi.png",
        text: "Typescript",
        color: "#227acc",
      },
      {
        id: "vuejs",
        img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1672891267/vue_pcrlxt.png",
        text: "Vuejs",
        color: "#19b986",
      },
      {
        id: "sass",
        img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/sass-logo-7702_sxv52z.png",
        text: "Sass",
        color: "#d06397",
      },
      {
        id: "tailwindcss",
        img: "  https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805670/Tailwind_CSS_Logo.svg_mch3ci.png",
        text: "Tailwindcss",
        color: "#3ab7d6",
      },
      {
        id: "framer-motion",
        img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805764/framer-motion-logo-DA1E33CAA1-seeklogo.com_k8smvm.png",
        text: "Framer Motion",
        color: "#58519e",
      },
      {
        id: "bootstrap",
        img: "    https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805814/bootstrap-logo-shadow_wsyug6.png",
        text: "Bootstrap",
        color: "#9000f3",
        hidden: true,
      },
      {
        id: "material-ui",
        img: " https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806164/logo_t5er37.png",
        text: "Material-UI",
        color: "#2581cb",
        hidden: true,
      },
    ],
  },
  {
    title: "backend",
    data: [
      {
        id: "nodejs",
        text: "NodeJs",
        color: "#78be2b",
      },
      {
        id: "express",
        text: "Express",
        color: "#fff",
      },
      {
        id: "python",
        text: "Python",
        color: "#fbca1f",
      },
       {
        id: "postsgres",
        text: "postgreeSQL",
        color: "#00001a"
       }
    ],
  },
  {
    title: "tools",
    data: [
      {
        id: "git",
        img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805964/Git-Icon-1788C_ncuqfg.png",
        text: "git",
        color: "#f05033",
      },
      {
        id: "github",
        img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806043/2111612_ftyjzh.png",
        text: "GitHub",
        color: "#000000",
      },
      {
        id: "figma",
        img: " https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805907/5968705_flyd73.png",
        text: "Figma",
        color: "#3bbcff",
      },
      {
        id: "linux",
        img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805986/6124995_xpzgrl.png",
        text: "Linux",
        color: "#eca600",
      },
      {
        id: "cloudfare-pages",
        img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806235/download_oglnre.png",
        text: "Cloudfare Pages",
        color: "#f59739",
      },
    ],
  },
];

export default function Skills({ dataText, modalCv, CvIcon }) {
  const {imageMap, isLoaded} = useImagesContext()
  return (
    <div
      id="knowledge"
      className=" min-h-[400px] overflow-hidden relative max-w-[550px] w-full bg-[#0000001a] rounded-[6px] p-4 select-none"
    >
      <img
        className="absolute left-0 h-[80%] object-cover opacity-[0.02] bottom-[-12px]"
        src="https://res.cloudinary.com/ddcoxtm2v/image/upload/v1678816061/Group_1_xvfjme.png"
        alt=""
      />
      <div className="absolute w-full rounded-[6px] left-0 h-[2px] top-0 useBackgroundMove "></div>
      <div className="absolute w-full rounded-[6px]  left-0 h-[2px] bottom-0 useBackgroundMove rotate-180 "></div>
      {images.map((e) => (
        <div className="relative skills-segment-title">
          <div className="sticky z-[2] w-full bg-transparent flex justify-center text-center  ">
            <p className="title-skills z-[2] bg-[#0d2849] w-max px-2  font-bold text-[24px] capitalize rounded-full">
              {e.title}
            </p>
          </div>
          <div className="line-skills-segment z-[1] absolute left-0 top-[15px] w-full h-[1px] bg-[#0000001a]  animation-delay  "></div>
          <div className="grid grid-cols-4 gap-2 justify-center items-center my-3">
            {e.data.map((e) => {
              if (e.hidden) return;
              return (
                <div
                  className={`h-[86px] relative w-full flex flex-col  text-center items-center skills-container hover:text-white hover:drop-shadow-[13px_13px_17px_${e.color}] `}
                >
                  <p
                    className={`text-skill ${
                      e.crown ? "text-yellow-500" : "text-"
                    }  lg:text-[22px] xl:text-[25px]`}
                  >
                    {e.text}
                  </p>
                  {e.crown && (
                    <img
                      draggable={false}
                      className="absolute top-[-24px] w-8 "
                      src={
                        "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1673546913/crown_gpoase.png"
                      }
                      alt=""
                    />
                  )}
                  <img
                    draggable={false}
                    className="w-12 h-auto"
                    src={imageMap[e.id]}
                    alt=""
                  
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <div className="absolute bottom-5 right-5">
    
      </div>
    </div>
  );
}
