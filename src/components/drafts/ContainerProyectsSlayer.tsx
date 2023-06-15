import React, { useCallback, useEffect, useState } from "react";
//@ts-ignore
import newWindow from "../../../assets/svg/newWindow.svg";
import inGroupSVG from "../../../assets/svg/group.svg";
import inSoloSVG from "../../../assets/svg/person.svg";
import back from "../../../assets/svg/backGround/titles.svg";
import { lang } from "../langs";
import HeroMain from "./Carrousel";
const imagesFrom = lang.static.images;
export default function ContainerProyectsSlayer({
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
      b: "#093145",
      t: "#BCA136",
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
  const [showGroup, setshowGroup] = useState(false);
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
    } else {
      window.addEventListener("load", () => elemets());
      return () => document.removeEventListener("load", () => elemets());
    }
  }, []);

  /*
      {langs.map((lan, index) => {
              console.log(index)
              console.log(colors[index])
                      var elementCreate = document.createElement("p")
  elementCreate.classList.add('tagsLanguajes', 'num' + index)
  elementCreate.setAttribute('style', `background-color: ${colors[index].b};color: ${colors[index].t}`)
  document.getElementById("appendp")?.append(elementCreate)
}
              return (
                <p key={lan + "Child" + index} className="tagsLanguajes">
                  {lan}
                </p>
              );
            })}
*/

  //window.addEventListener('load', ()=> elemets())

  // shadow-[5px_5px_8px_#ffffff5c] lg:shadow-[12px_2px_16px_#ffffff5c]
  const changeHandle = () => {
    if (showGroup === true) {
      setshowGroup(false);
    } else {
      setshowGroup(true);
    }
  };
  return (
    <div className="w-full rounded-[6px] border-[1px] border-[#0000001a] xl:border-[#0000003c] bg-[#00000023] px-2 lg:rounded-[12px]">
      <div className="items-center flex justify-center relative">
        <div
          onClick={() => {
            changeHandle();
          }}
          className="absolute xl:top-[96px] right-0 mt-1 w-[36px] text-slate-50 fill-slate-50 text-[20px]"
        >
          {inGroup ? (
            <img
              src={inGroupSVG}
            ></img>
          ) : (
            <img
              src={inSoloSVG}
            ></img>
          )}
          {showGroup && (
            <>
              <div className=" flex items-center justify-center rounded-t-[7px] left-[-115px] lg:left-[-115px] lg:top-[-22px] lg:h-[90px]  px-[2px] top-[-50px] absolute bg-[#408198] lg:bg-transparent lg:rounded-sm lg:border-l-[1px] lg:border-blue-900 lg:backdrop-blur-3xl altura-letras  w-[110px]">
                <p className="text-center ">
                  App desarrollada de manera{" "}
                  {!inGroup ? <span>individual</span> : <span>grupal</span>}
                </p>{" "}
              </div>
            </>
          )}
        </div>
        <div
          className="xl:hidden  px-[1px] cursor-pointer text-[29px] lg:text-[42px] lg:my-1 relative container-proyects"
          onClick={() => {
            var link = document.createElement("a");
            link.href = web;
            link.target = "_blank";
            link.click();
          }}
        >
          <p>{title}</p>
          <img
            className="absolute w-7 h-7 cursor-pointer top-[6px] right-[-31px]"
            src={newWindow}
            alt=""
            onClick={() => {
              var link = document.createElement("a");
              link.href = web;
              link.target = "_blank";
              link.click();
            }}
          />
          <div className="absolute w-max h-max flex flex-col space-y-[2px] rotate-180 top-[12px]  left-[-45px]">
            <div className={`linesTitle w-[${index * 2 + 0.4 * 100}px]`}></div>
            <div className={`linesTitle w-[${index * 2 + 0.4 * 100}px]`}></div>
            <div className={`linesTitle w-[${index * 2 + 0.4 * 100}px]`}></div>
          </div>
        </div>
      </div>
      <div className="flex-col sm:flex-row w-full lg:flex lg:items-center xl:p-4">
        <div className="w-12/12 lg:h-[500px] lg:min-w-[390px] lg:w-7/12 xl:w-9/12  items-center flex justify-center px-2 lg:pb-2">
          <HeroMain
            images={imagesFrom[index].all}
            showImage={showImage}
          ></HeroMain>
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
        >{title}</div>
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
      <div className="invisible lg:visible lg:flex lg:flex-col w-full items-center justify-center">
        <div className=" lg:w-[520px] h-[1px] bg-green-500"></div>
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
