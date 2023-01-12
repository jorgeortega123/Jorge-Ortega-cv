import React from "react";
import ContainerProyects from "../containers/ContainerProyects";
import MainContainer from "../containers/MainContainer";
import useMainContext from "../context/useMainContext";
import newWindow from "../../assets/svg/newWindow.svg";
export default function Contributions(data) {
  const { goToUrl } = useMainContext();
  console.log(data.data);
  return (
    <MainContainer title={data.data.headers.contributions}>
      <div className="flex justify-center items-center w-full  ">
        <div className=" bg-[#00000023] w-full xl:w-6/12 px-6 border-l-[1px] rounded-[6px] ">
          <div className="relative">
            <img
              className="absolute w-6 h-6 cursor-pointer top-[10px]  right-[-16px] "
              src={newWindow}
              alt=""
              onClick={() => goToUrl(data.data.repos[0].link)}
            />
            <div className="flex items-center space-x-2 ">
              <a
                href={data.data.repos[0].link}
                target={"_blank"}
                className="font-semibold   tracking-wide"
              >
                react-scroll-video
              </a>
              <img
                className="w-12"
                src="https://res.cloudinary.com/ddcoxtm2v/image/upload/v1673542281/npm_dnhxi4.png"
                alt=""
              />
              <img
                className="w-8"
                src="https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805626/React-icon.svg_qqejiw.png"
                alt=""
              />
            </div>
            <p className="leading-5 mb-3">
              <span></span>
              <span>{data.data.repos[0].description}</span>
            </p>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
