import React from "react";
import DownloadSvg from "../../assets/svg/figma/button_pdf.svg";
export default function FileView({
  title = "as",
  children = "",
  cv,
  index = 0,
  handlerChangeByDownload,
}: {
  title: string;
  children: any;
  cv: string;
  index: number;
  handlerChangeByDownload: () => void;
}) {
  ///function = {handlerChangeByDownload}
  const download = (a) => {
    handlerChangeByDownload();
    var link = document.createElement("a");
    link.href = a;
    link.download = a;
    link.click();
  };

  return (
    <a
      href={cv}
      onClick={() => {
        download(cv);
      }}
      className={`max-w-[400px] mx-auto z-[3] bg-[#0000002b] hover:bg-gray-900 text-white w-full cursor-pointer  my-2 rounded-[6px] px-2 py-3 flex justify-center items-center min-h-[64px]`}
    >
      <div className="flex flex-col relative mr-2">
        <p className="tracking-wide text-[25px] ">{title}</p>
        <p className="absolute text-[2s5px] bottom-[-20px] right-0 ">
          {children}
        </p>
      </div>
      <div className=" flex items-center w-12/12">
        <button
          type="button"
          className="bg-black rounded-[6px] border-[1px] "
          data-dismiss-target="#alert-1"
          aria-label="Close"
        >
          <img
            onClick={() => {
              download(cv);
            }}
            src={DownloadSvg}
            className=""
            alt=""
          />
        </button>
      </div>
    </a>
  );
}
