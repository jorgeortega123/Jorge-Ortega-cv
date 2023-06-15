import React from "react";

import Icons from "../styles/Icons";
export default function FileView({
  title = "as",
  children = "",
  cv,
  modal,
  index = 0,
  handlerChangeByDownload,
}: {
  title: string;
  children: any;
  cv: string;
  modal: any;
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
    // setTimeout(() => {
    //   modal.toggle()
    // }, 1500);
  };

  return (
    <a
      href={cv}
      onClick={() => {
        download(cv);
      }}
      className={`max-w-[400px] mx-auto z-[3] bg-[#0000002b] hover:bg-gray-900 text-white w-full cursor-pointer  my-2 rounded-[6px]  py-3 flex justify-between px-4 items-center min-h-[64px]`}
    >
      <div className="flex flex-col relative lg:ml-6">
        <p className="tracking-wider text-[28px] ">{title}</p>
        <p className="absolute text-[18px] bottom-[-20px] right-0 ">
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
          <div
            onClick={() => {
              download(cv);
            }}
          >
            <Icons icon="download"></Icons>
          </div>
        </button>
      </div>
    </a>
  );
}
