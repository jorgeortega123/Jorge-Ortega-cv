import React from "react";

export default function Footer({ staticInf, goToUrl }) {
  return (
    <div
      id="bottomPage"
      className="text-slate-50 px-1 text-[12px] lg:text-[13px] flex flex-col mt-[20px] mb-[20px] bg-[#03224a] justify-center items-center z-[999] "
    >
      <div className="flex flex-col w-full">
        <div className="p-7">
          <p className="mb-1 text-[18px] font-[subtitle]">Jorge Ortega</p>
          <p className="text-slate-200">Frotend Developer</p>
        </div>
        <div className="p-6">
          <p>
            <a href="#home">Home</a>
          </p>
          <p className="py-6">
            <a href="#proyects">Proyects</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
        <div className="flex capitalize ">
          {staticInf.social.map((socialMedia, indexNum) => {
            return (
              <div
                onClick={() => {
                  goToUrl(socialMedia.url);
                }}
                className="underline hover:text-green-400 cursor-pointer"
                key={"socialData" + indexNum}
              >
                {socialMedia.name}
                <img src={socialMedia.svg} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="underline p-9">Jorge Ortega 2022</div>
    </div>
  );
}
