import React from "react";
import MainContainer from "../containers/MainContainer";
import Button from "./Button";
var images = {
  frontend: [{
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845292/pngegg_pnsolw.png",
      text: "HTML",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/k_fhm489.png",
      text: "CSS",
    },{
      img: "  https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845292/javascript-39404_yvaz5m.png",
      text: "Javascript",
    }, {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/typescript_original_logo_icon_146317_p5xnyi.png",
      text: "Typescript",
    },{
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805626/React-icon.svg_qqejiw.png",
      text: "React",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/sass-logo-7702_sxv52z.png",
      text: "Sass",
    },
   
    {
      img: "  https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805670/Tailwind_CSS_Logo.svg_mch3ci.png",
      text: "Tailwindcss",
    },{
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805764/framer-motion-logo-DA1E33CAA1-seeklogo.com_k8smvm.png",
      text: "Framer Motion",
    },{
      img: "    https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805814/bootstrap-logo-shadow_wsyug6.png",
      text: "Bootstrap",
    },
    {
      img: " https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806164/logo_t5er37.png",
      text: "Material-UI ",
    },
   
   


    
  ],
  backend: [
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805871/node-js-1174925_tubnek.webp",
      text: "NodeJs",
    },{
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805507/6202fcdee5ee8636a145a41b_1234_xvfbkk.png",
      text: "Express",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806004/267_Python-512_gt1yds.webp",
      text: "Python",
    },
    
  ],
  tools: [
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805964/Git-Icon-1788C_ncuqfg.png",
      text: "git",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806043/2111612_ftyjzh.png",
      text: "GitHub",
    },{
      img: " https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805907/5968705_flyd73.png",
      text: "Figma",
    },{
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805986/6124995_xpzgrl.png",
      text: "Linux",
    },{
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806235/download_oglnre.png",
      text: "Cloudfare Pages",
    },
    

  ],
};
export default function Skills({ dataText, setshowDownload, CvIcon }) {
  return (
    <MainContainer className="flex w-full" title={dataText.headers.knowledge}>
      <div
        id="knowledge"
        className="min-h-[400px]  max-w-full w-full bg-[#0000001a] rounded-[3px]"
      >
        <div className="p-4 ">
          <div className="relative">
          <p className="text-center title-skill">Frontend</p>
          <div className="z-[0] absolute left-0 top-[15px] w-[70px] h-[1px] sm:w-[98px] lg:w-[120px] main-color"></div>
          <div className="z-[0] absolute right-0 top-[15px] w-[70px] h-[1px] sm:w-[98px] lg:w-[120px]  main-color"></div>
          <div className="grid grid-cols-4 gap-2 justify-center items-center my-3">
            {images.frontend.map((e) => {
              return (
                <div className=" h-[86px] w-full flex flex-col  text-center items-center ">
                  <p className="text-skill">{e.text}</p>
                  <img className="w-12 h-auto" src={e.img} alt="" srcset="" />
                </div>
              );
            })}
          </div></div>
          <div className="relative">
          <p className="text-center title-skill">Backend</p>
          <div className="z-[0] absolute left-0 top-[15px] w-[70px] h-[1px] sm:w-[98px] lg:w-[120px] main-color"></div>
          <div className="z-[0] absolute right-0 top-[15px] w-[70px] h-[1px] sm:w-[98px] lg:w-[120px]  main-color"></div>
          <div className="w-full grid grid-cols-4 gap-2 justify-center items-center my-3">
            {images.backend.map((e) => {
              return (
                <div className="w-full flex flex-col justify-center text-center items-center ">
                  <p className="text-skill">{e.text}</p>
                  <img className="w-12 h-auto" src={e.img} alt="" srcset="" />
                </div>
              );
            })}
          </div></div>
          <div className="relative">
          <p className="text-center">Tools</p>
          <div className="z-[0] absolute left-0 top-[15px] w-[70px] h-[1px] sm:w-[98px] lg:w-[120px] main-color"></div>
          <div className="z-[0] absolute right-0 top-[15px] w-[70px] h-[1px] sm:w-[98px] lg:w-[120px]  main-color"></div>
          <div className="grid grid-cols-4 gap-2">
            {images.tools.map((e) => {
              return (
                <div className="w-full flex flex-col justify-center text-center items-center my-3 ">
                  <p className="text-skill">{e.text}</p>
                  <img className="w-12 h-auto" src={e.img} alt="" srcset="" />
                </div>
              );
            })}
          </div></div>
        </div>
        <div className="absolute bottom-[-36px] right-0 flex items-center ">
          <Button
            imageSize={22}
            svg={true}
            spaceY={3}
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
