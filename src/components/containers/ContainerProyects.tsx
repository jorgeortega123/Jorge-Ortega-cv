import React, { useCallback, useEffect, useState } from "react";
//@ts-ignore
import newWindow from "../../assets/svg/newWindow.svg";
import inGroupSVG from "../../assets/svg/group.svg";
import inSoloSVG from "../../assets/svg/person.svg";
import githubSVG from "../../assets/svg/github.svg";
import back from "../../assets/svg/backGround/titles.svg";
import { lang } from "../../langs";
import HeroMain from "../carrousel/Carrousel";
const imagesFrom = lang.static.images;
export default function ContainerProyects({
  title = "Semaforos ",
  img = [],
  about = "Trata acerca de dos cosas que sulen sesr importante el uno del otro para convivir de mejor manera siuuuu",
  langs = ["Javascript", "Python"],
  web = "https://www.example.com",
  index = 0,
  inGroup = false,
  showImage,
  ...props
}: {
  title: string;
  img: [];
  about: string;
  langs: string[];
  web: string;
  index: number;
  inGroup: boolean;
  showImage: (data: string) => void;
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
      b: "#533483",
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
      b: "#4fff05",
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
  const [imagesToUse, setimagesToUse] = useState<string[]>()
  const [showGroup, setshowGroup] = useState(false);
  const [loadImages, setloadImages] = useState(false)
  const elemets = () => {
    langs.map((lan, indexNumber) => {
      var elementCreate = document.createElement("p");
      elementCreate.textContent = lan;
      elementCreate.classList.add("tagsLanguajes", "num" + indexNumber);
      // var randomNumber = Math.floor(Math.random() * colors.length);
      // elementCreate.style.color = colors[randomNumber].t;
      elementCreate.style.color = colors[indexNumber].t;
      elementCreate.style.backgroundColor = colors[indexNumber].b;
      document.getElementById("appendp" + index)?.append(elementCreate);
    });
  };
  useEffect(() => {
    if (document.readyState === "complete") {
      elemets();
      chargeImages()
    } else {
      window.addEventListener("load", () => {elemets(); chargeImages()});
      return () => document.removeEventListener("load", () => elemets());
    }
  }, []);
  const chargeImages = () => { 
    return ''
    let imgs = [] as string[]
      for (let i = 0; i < imagesFrom[index].all.length; i++) {
        var base64Image = imagesFrom[index].all[i].split(',')[1];

        var imageData = Uint8Array.from(atob(base64Image), (c) => c.charCodeAt(0));
      
        let file = new File([imageData], imagesFrom[index].all[i], {
          type: "image/jpeg",
        });
        let urlCreateImg = window.URL.createObjectURL(file);
        imgs.push(urlCreateImg);
      }
      console.log(imgs)
    setimagesToUse(imgs)
    setloadImages(true)
  }
  const changeHandle = () => {
    if (showGroup === true) {
      setshowGroup(false);
    } else {
      setshowGroup(true);
    }
  };

  return (
    <div className="w-full rounded-[6px] border-[1px] border-[#0000001a] xl:border-[#0000003c] bg-[#00000023] px-2 lg:rounded-[12px]">
      <div className=" items-center flex justify-center relative">
        <div
          onClick={() => {
            changeHandle();
          }}
          className=" transition-modal-proyects absolute xl:top-[96px] right-0 mt-1 w-[36px] text-slate-50 fill-slate-50 text-[20px]"
        >
          {inGroup ? <img src={inGroupSVG}></img> : <img src={inSoloSVG}></img>}
          {showGroup && (
            <>
              <div className="bg-[#000000a8] rounded-[6px] p-2 absolute z-[3] flex left-[-40px] altura-letras  max-w-[110px]">
                <p className="text-rigth w-full">
                  App desarrollada de manera{" "}
                  {!inGroup ? <span>individual</span> : <span>grupal</span>}
                </p>{" "}
              </div>
            </>
          )}
        </div>
        <div
          className=" xl:hidden relative  px-[1px] cursor-pointer text-[29px] lg:text-[42px] lg:my-1  container-proyects"
          onClick={() => {
            var link = document.createElement("a");
            link.href = web;
            link.target = "_blank";
            link.click();
          }}
        >
          <p>{title}</p>
          <img
            className="absolute w-7 h-7 cursor-pointer top-[6px] right-[-30px] "
            src={newWindow}
            alt=""
            onClick={() => {
              var link = document.createElement("a");
              link.href = web;
              link.target = "_blank";
              link.click();
            }}
          />
        </div>
        <div className=" absolute top-[12px] left-1 flex">
          <svg
            height="24"
            version="1.1"
            viewBox="0 0 16 16"
            width="24"
            fill="#11518e" 
            opacity={1}
          >
            <path
              fill-rule=""
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
         
        </div>
      </div>
      <div className="flex-col sm:flex-row w-full lg:flex lg:items-center xl:p-4">
        <div className="w-12/12 lg:h-[500px] lg:min-w-[390px] lg:w-7/12 xl:w-9/12  items-center flex justify-center px-2 lg:pb-2">
         
          {!loadImages ? <HeroMain
            images={imagesFrom[index].all}
            showImage={showImage}
            proyect={imagesFrom[index]}
          ></HeroMain> : <p>Charging...</p>  
          }
          
        </div>
        <div className="normalText text-[12px] h-full lg:p-10  lg:w-6/12 flex flex-col lg:text-left lg:items-center lg:justify-center">
          <div
            className="  pt-[1px pb-[1px] cursor-pointer text-[29px] lg:text-[42px] lg:my-4 relative container-proyects"
            onClick={() => {
              var link = document.createElement("a");
              link.href = web;
              link.target = "_blank";
              link.click();
            }}
          >
            {title}
          </div>
          <div
            className="normalText altura-letras text-[22px] lg:text-[28px]"
            dangerouslySetInnerHTML={{ __html: about }}
          ></div>
          <div
            id={"appendp" + index}
            className="flex flex-wrap mt-2 mb-2 select-none"
          ></div>
        </div>
      </div>
    </div>
  );
}

/*
    <div className="w-full border pl-2 pr-2">
      <div className="items-center flex justify-left">
        <p>{title}</p>
        <img className="w-7 h-7 ml-1" src={newWindow} alt="" />
      </div>
      <div className="flex">
        <div className=" w-[150px] h-[170px] items-center flex justify-left">
          FOTO
        </div>
        <div className="h-full flex flex-col justify-end">
          <p className="text-[17px]">{about}</p>
          {langs.map((lan,index) => (
            <p key={lan + "Child" + index} className="tagsLanguajes">
              {lan}
            </p>
          ))}
        </div>
      </div>
    </div>
*/
