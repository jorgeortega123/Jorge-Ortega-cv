import React from "react";

export default function Footer({ staticInf, goToUrl, dataText }) {
  return (
    <div
      id="bottomPage"
      className="z-[9] text-slate-50 px-1  lg:text-[13px] flex flex-col mt-[20px] mb-[20px] bg-[#03224a] justify-center items-center text-[22px]"
    >
      <div className="flex flex-col w-full">
        <div className="pl-6 pt-6 pb-4">
          <p className="mb-1 text-[18px] xl:text-[24px] font-[subtitle]">Jorge Ortega</p>
          <p className="text-slate-200 xl:text-[20px]">{dataText.headers.sub}</p>
        </div>
        <div className="pl-6 py-2 pb-5 xl:text-[22px] ">
          <p>
            <a className="hover:text-slate-300" href="#home">{dataText.headers.home}</a>
          </p>
          <p className="py-2">
            <a className="hover:text-slate-300" href="#proyects">{dataText.headers.proyects}</a>
          </p>
          <p>
            <a className="hover:text-slate-300" href="#contact">{dataText.headers.contact}</a>
          </p>
        </div>
        <div className="flex capitalize space-x-2 ">
          {staticInf.social.map((socialMedia, indexNum) => {
            return (
              <div
                onClick={() => {
                  goToUrl(socialMedia.url);
                }}
                className="underline hover:text-green-400 cursor-pointer"
                key={"socialData" + indexNum}
              >
                <img className="w-7" src={socialMedia.svg} alt="" />
              </div>
            );
          })}
        </div>
        <p className="absolute bottom-0 px-6 text-[18px]">{dataText.headers.footerText} {" "}<a href="https://github.com/jorgeortega123/Jorge-Ortega-cv" target={"_blank"}  className="underline">{dataText.headers.footerTextLink}</a> </p>
      </div>
      <div className="underline p-9 xl:text-[22px]">Jorge Ortega 2022</div>
    </div>
  );
}
