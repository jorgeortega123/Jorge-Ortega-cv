import React, { useCallback, useEffect, useState } from "react";

import { lang } from "../../langs";
import HeroMain from "../drafts/Carrousel";

import Icons from "../../styles/Icons";
import Modal from "../../context/modal/modal/Modal";
import useModal from "../../context/modal/useModal";
import { ZoomableImage } from "../ZoomableImage";
import useMainContext from "../../context/useMainContext";
import useImagesContext from "../../context/useImagesContext";

const imagesFrom = lang.static.images;
export default function ContainerProyects({
  title = "Semaforos ",
  img = [],
  about = "Trata acerca de dos cosas que sulen sesr importante el uno del otro para convivir de mejor manera siuuuu",
  langs = ["Javascript", "Python"],
  web = "https://www.example.com",
  index = 0,
  inGroup = false,
  repo = "",
  showImage,
  imgSrc,
  ...props
}: {
  title: string;
  img: [];
  about: string;
  langs: string[];
  web: string;
  index: number;
  inGroup: boolean;
  repo: string;
  showImage: (data: object) => void;
  imgSrc: (data: string) => void;
}) {
  const colors = [
    {
      b: "#ffe300",
      t: "#2A0944",
    },
    {
      b: "#3B9AE1",
      t: "#42032C",
    },
    {
      b: "#b686ff",
      t: "#FFEA11",
    },
    {
      b: "#E94560",
      t: "#FFFFFF",
    },
    {
      b: "#FECD70",
      t: "#472D2D",
    },
    {
      b: "#9fff05",
      t: "#9A2617",
    },
    {
      b: "#107896",
      t: "#000000",
    },
    {
      b: "#9A2617",
      t: "#B5C689",
    },
    {
      b: "#1287A8",
      t: "#fff",
    },
  ];
  const { imageMap, isLoaded } = useImagesContext();
  const [imagesToUse, setimagesToUse] = useState<string[]>();
  const [showGroup, setshowGroup] = useState(false);
  const [loadImages, setloadImages] = useState(false);
  const { goToUrl } = useMainContext();
  const elemets = () => {
    langs.map((lan, indexNumber) => {
      var elementCreate = document.createElement("div");

      elementCreate.textContent = lan;
      elementCreate.classList.add("tagsLanguajes", "num" + indexNumber);
      // var randomNumber = Math.floor(Math.random() * colors.length);
      // elementCreate.style.color = colors[randomNumber].t;
      // elementCreate.style.color = colors[indexNumber].t;
      // elementCreate.style.backgroundColor = colors[indexNumber].b;
      // elementCreate.style.color = colors[indexNumber].b;
      document.getElementById("appendp" + index)?.append(elementCreate);
    });
  };
  useEffect(() => {
    if (document.readyState === "complete") {
      elemets();
      chargeImages();
    } else {
      window.addEventListener("load", () => {
        elemets();
        chargeImages();
      });
      return () => document.removeEventListener("load", () => elemets());
    }
  }, []);
  const chargeImages = () => {
    return "";
    let imgs = [] as string[];
    for (let i = 0; i < imagesFrom[index].all.length; i++) {
      var base64Image = imagesFrom[index].all[i].split(",")[1];

      var imageData = Uint8Array.from(atob(base64Image), (c) =>
        c.charCodeAt(0)
      );

      let file = new File([imageData], imagesFrom[index].all[i], {
        type: "image/jpeg",
      });
      let urlCreateImg = window.URL.createObjectURL(file);
      imgs.push(urlCreateImg);
    }
    console.log(imgs);
    setimagesToUse(imgs);
    setloadImages(true);
  };
  const changeHandle = () => {
    if (showGroup === true) {
      setshowGroup(false);
    } else {
      setshowGroup(true);
    }
  };

  const modal = useModal();

  return (
    <div className="transition-button-proyect-code relative pb-[46px] w-full rounded-[6px] border-[1px] border-[#0000001a] hover:border-[#0000001a]  bg-[#00000023] px-2 lg:rounded-[12px]">
      <Modal modal={modal} title={title}>
        <ZoomableImage imageUrl={[imagesFrom[index].img]}></ZoomableImage>
      </Modal>
      
      <div className=" items-center flex justify-center relative ">
     
        <div
          className=" relative flex items-center mr-[-26px]  px-[1px] cursor-pointer text-[29px] lg:text-[42px] lg:my-1  container-proyects useTextColor"
          onClick={() => goToUrl(web)}
        >
          <p>{title}</p>
          <Icons icon="link" className="rotate-[135deg] "></Icons>
        </div>
      </div>
      <div className="flex-col w-full ">
        <div className="w-12/12   items-center flex justify-center relative  ">
          <div onClick={() => modal.open()} className="relative">
            <svg
              className="z-[3] absolute left-4 bottom-4"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M208 48V16H16v192h32V70.627l160.687 160.686l22.626-22.626L70.627 48H208zm256 256v137.373L299.313 276.687l-22.626 22.626L441.373 464H304v32h192V304h-32z"
              />
            </svg>
            
            <img
              className=""
              draggable={false}
              onClick={() => imgSrc(imagesFrom[index].all[0])}
              src={imagesFrom[index].img}
              loading="lazy"
              alt=""
            /> 
            {/* <img
              className=""
              draggable={false}
              onClick={() => imgSrc(imagesFrom[index].all[0])}
              src={imageMap[imagesFrom[index].key]}
              alt=""
            /> */}
          </div>
          {/* {!loadImages ? (
            <HeroMain
              images={[imagesFrom[index].all[0]]}
              showImage={showImage}
              proyect={imagesFrom[index]}
            ></HeroMain>
          ) : (
            <p>Charging...</p>
          )} */}
        </div>
        <div className=" normalText text-[12px] h-full lg:p-3  flex flex-col ">
          {/* <div className="relative flex items-center useTextColor  pb-[1px] text-[29px] lg:text-[32px] lg:my-1 container-proyects ">
            <p className="cursor-pointer " onClick={() => goToUrl(web)}>
              {title}
            </p>
          </div> */}
          <div
            className="  normalText text-[13px] lg:text-[16px]  leading-5 my-2"
            dangerouslySetInnerHTML={{ __html: about }}
          ></div>

          <div
            id={"appendp" + index}
            className=" flex flex-wrap pb-3 pt-1 mb-2 select-none opacity-[75%]"
          ></div>
        </div>
      </div>
      <div className="absolute bottom-0  w-full left-0  flex space-x-3 px-2 pb-2">
        <button
          onClick={() => goToUrl(web)}
          className=" useTransitionDelay border-[1px] rounded-[6px] px-7 border-[#66ff00] text-[#66ff00]  hover:bg-[#66ff00f1] hover:text-[black]"
        >
          Visitar
        </button>
        <div
          onClick={() => goToUrl(repo)}
          className="transition-button-proyect-code useTransitionDelay cursor-pointer flex flex-row-reverse border-[1px] rounded-[6px] px-7 border-[#1cf0ff] text-[#1cf0ff]"
        >
          <svg
            className="my-auto ml-[5px]"
            height="24"
            version="1.1"
            viewBox="0 0 16 16"
            width="24"
            fill="#1cf0ff"
            opacity={1}
          >
            <path
            
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
          <p>Code</p>
        </div>
      </div>
    </div>
  );
}
