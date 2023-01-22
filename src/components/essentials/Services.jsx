import React from "react";
import MainContainer from "../containers/MainContainer";

export default function Services() {
  return <div className="w-11/12 bg-[#00000023] rounded-[6px] border-[1px] border-[#0000001a]  px-2 sm:w-10/12 lg:sm:w-8/12 xl:w-5/12  ">{"dangerouslySetInnerHTML={{ __html: services }}"}</div>;
}
