import React, { useContext } from "react";
import ContainerProyects from "../components/containers/ContainerProyects";
import MainContainer from "../components/containers/MainContainer";
import useMainContext from "../context/useMainContext";

import { ImageContext } from "../context/ImagesContext";
import useImagesContext from "../context/useImagesContext";
import Icons from "../styles/Icons";

export default function Contributions(data) {
  
  const { goToUrl } = useMainContext();
  const {imageMap, isLoaded} = useImagesContext()
  const colorBorder = "#d51700";
  //#d51700
  return (
    <MainContainer
      subtitle={data.data.headers._contributions}
      title={data.data.headers.contributions}
    >
      <div className="w-12/12 flex  space-y- relative overflow-hidden ">
        {/* <div className="border-4  border-[#000000] rounded-[6px] absolute w-[calc(100%_-_22px)] ml-[12px] h-full "></div> */}
        <div
          className={`bg-[#0000001a] flex flex-col justify-center items-center ml-3 w-2/12 rounded-l-[10px] `}
        >
          <img
            className="w-12"
            src="https://res.cloudinary.com/ddcoxtm2v/image/upload/v1673542281/npm_dnhxi4.png"
            alt=""
          />
          <p className="absolute mt-[-6px] text-[#66ff00]">+</p>

          <img
            className="w-12 "
            src={imageMap["react"]}
            alt=""
          />

          {/* <div className="absolute border-[5px] bottom-[-5px] right-[-20px] w-5 h-5 contributions-border rotate-90"></div> */}
        </div>
        {/* <div
          className={` rounded-[10px]  border-l-[${colorBorder}] absolute h-[calc(100%)] w-full bottom-0`}
        ></div> */}
        <div className="flex flex-col space-y-2">
          {data.data.repos.map((rep, ind) => {
            return (
              <div
              key={"rep" + ind}
                className={`bg-[#0000001a] border border-[#0000001a] mx- w-[95%] mx-auto flex flex-col space-y-2 xl:w-12/12 px-6  rounded-[6px]  `}
              >
                <div className=" relative">
                  <div
                    className="absolute w-6 h-6 cursor-pointer top-[10px]  right-[-16px] "
                    onClick={() => goToUrl(rep.link)}
                  >
                    <Icons className="w-6 h-auto fill-[#66ff00]" icon="newWindow" ></Icons>
                  </div>
                  <div className={`flex items-center  space-x-2 `}>
                    <a
                      href={rep.link}
                      target={"_blank"}
                      className="font-semibold   tracking-wide "
                    >
                      {rep.title}
                    </a>
                  </div>
                  <p className="leading-5 mb-3 text-white">
                    <span></span>
                    <span>{data.data.repos[ind].description}</span>
                  </p>
                </div>{" "}
              </div>
            );
          })}
         
        </div>
      </div>
    </MainContainer>
  );
}
