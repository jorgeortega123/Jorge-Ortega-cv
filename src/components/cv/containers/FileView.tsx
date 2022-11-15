import React from "react";
import DownloadSvg from "../../../assets/svg/figma/button_pdf.svg";
export default function FileView({
  title = "as",
  children = "",
  cv,
  index=0,
  handlerChangeByDownload
}: {
  title: string;
  children: any;
  cv: string
  index: number
  handlerChangeByDownload: ()=>void
}) {
  ///function = {handlerChangeByDownload}
 const download =(a)=>{
  handlerChangeByDownload()
    var link = document.createElement("a");
    link.href = a;
    link.download = a
    link.click();
  }
 
  return (
    <div className={`bg-white ${index % 2 === 0 ?'bg-[#0f0f0f]': "bg-[#0f0f0fc2]"} hover:bg-gray-900 text-white w-full  my-2 rounded-[3px] p-1 flex justify-center items-center`}>
      <div className="grow flex flex-col">
        <a href={cv} download="Asadasd.pdf" className="font-normal text-blue-600 px-[9px] ">
          {title}
        </a>
        <p className="font-[Montserrat] text-[13px] ">{children}</p>
      </div>
      <div className=" flex items-center pr-1">
        <button
          type="button"
          className="bg-black rounded-[6px] border-[1px] "
          data-dismiss-target="#alert-1"
          aria-label="Close"
        >
          <img onClick={()=>{download(cv)}} src={DownloadSvg} className="" alt="" />
        </button>
      </div>
    </div>
  );
}
