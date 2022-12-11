import React from "react";
import MainContainer from "../containers/MainContainer";
import Button from "./Button";
var images = {
  frontend: [
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/k_fhm489.png",
      text: "CSS",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/sass-logo-7702_sxv52z.png",
      text: "Sass",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/typescript_original_logo_icon_146317_p5xnyi.png",
      text: "Typescript",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845292/pngegg_pnsolw.png",
      text: "HTML",
    },
  ],
  backend: [
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/pngwing.com_h8ucbi.png",
      text: "NodeJs",
    },
  ],
  tools: [
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667862619/git_original_wordmark_logo_icon_146510_scimhx.png",
      text: "git",
    },
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667862619/github_original_wordmark_logo_icon_146506_jek88d.png",
      text: "GitHub",
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
        <div className="p-4">
          <p className="text-center">Frontend</p>
          <div className="grid grid-cols-4 gap-2">
            {images.frontend.map((e) => {
              return (
                <div>
                  <p className="">{e.text}</p>
                  <img className="w-12 h-auto" src={e.img} alt="" srcset="" />
                </div>
              );
            })}
          </div>
          <p className="text-center">Backend</p>
          <div className="grid grid-cols-4 gap-2">
            {images.backend.map((e) => {
              return (
                <div>
                  <p className="">{e.text}</p>
                  <img className="w-12 h-auto" src={e.img} alt="" srcset="" />
                </div>
              );
            })}
          </div>
          <p className="text-center">Tools</p>
          <div className="grid grid-cols-4 gap-2">
            {images.tools.map((e) => {
              return (
                <div>
                  <p className="">{e.text}</p>
                  <img className="w-12 h-auto" src={e.img} alt="" srcset="" />
                </div>
              );
            })}
          </div>
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
