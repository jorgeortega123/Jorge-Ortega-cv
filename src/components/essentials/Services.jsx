import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Controller, Scene } from "react-scrollmagic";
import MainContainer from "../containers/MainContainer";
import Parallax from "../parallax";
import useMainContext from "../context/useMainContext";
export default function Services(dataText) {
  const [textToShow, setTextToShow] = useState("word1");
  const [changeAnimation, setchangeAnimation] = useState(false);
  const [text, settext] = useState("second");
  const [image, setimage] = useState("second");
  const [number, setnumber] = useState(0);
  const [words, setwords] = useState(
    dataText.dataText.headers.services_segment
  );

  useEffect(() => {
    const scrollDemo = document.getElementById("scroll-detect-services");
    setwords(dataText.dataText.headers.services_segment);
    next();
    window.addEventListener("scroll", (event) => {
      // console.log(scrollDemo.offsetTop, scrollDemo.offsetLeft)
      // console.log(scrollDemo.getBoundingClientRect().y.toFixed())
      // console.log(scrollDemo.getBoundingClientRect())
      // console.log( ocument.documentElement.scrollHeight - window.innerHeight)
      // console.log(window.scrollY);
      // if (window.scrollY > window.innerHeight) {
      //    alert("APASAS")
      // }
    });
  }, []);
  const textElement = useRef(null);
  const imageElement = useRef(null);
  // const change = async (sum) => {
  //   if (sum === "" || sum === undefined) sum = false;
  //   if (number === words.length) {
  //     console.log("ASDASD");
  //     setnumber(0);
  //     return;
  //   }
  //   console.log(number);
  //   if (number % 2 === 1) {
  //     console.log("impar");
  //     setone(words[number].text);
  //     setsec(words[number].title);
  //     console.log(words[number].text, words[number].title);
  //     sum ? setnumber(number + 1) : setnumber(number - 1);
  //   } else {
  //     console.log("par");
  //     setsec(words[number].text);
  //     setone(words[number].title);
  //     if (number <= 0) {
  //       setnumber(number + 1);
  //       return;
  //     }
  //     sum ? setnumber(number + 1) : setnumber(number - 1);
  //   }
  // };
  const next = () => {
    const text_element = document.getElementById("text-services");
    // const image_element = document.getElementById("image-services")
    // console.log(text_element, image_element)

    console.log("ASDAS", number + 1, words.length - 1);
    if (number > words.length - 1) {
      setnumber(0);
      settext(words[0]);
      return;
    }
    settext(words[number]);
    if (changeAnimation) {
      // textElement.current.classList.remove("move-left-to-right")
      imageElement.current.style.animationFillMode = "backwards";
      textElement.current.style.animationFillMode = "backwards";
      // imageElement.current.classList.add("move-left-to-right")
      text_element.style.animationFillMode = "backwards";
      //left-right
      //right-left
    } else {
      // imageElement.current.classList.remove("move-right-to-left");
      // textElement.current.classList.remove("move-left-to-right");

      imageElement.current.style.animationFillMode = "forwards";
      textElement.current.style.animationFillMode = "forwards";
      textElement.current.classList.add("move-left-to-right");
      imageElement.current.classList.add("move-right-to-left");
    }

    setchangeAnimation(!changeAnimation);
    setnumber(number + 1);
  };
  const undo = () => {
    if (number <= 0) {
      setnumber(words.length);
      settext(words[words.length -1]);
      return
    } 
      setnumber(number - 1);
      settext(words[number]);
    
   
  };

  return (
    <div className="w-12/12 bg-[#00000023] rounded-[6px] border-[1px] border-[#0000001a]  px-2 sm:w-10/12 lg:sm:w-8/12 xl:w-7/12  ">
      <div className=" flex flex-col  w-full items-center relative  ">
        <div className="px-2 text-center w-max  #082744 bg-[#082744] ">
          {text.title}
          <div className="absolute w-full left-0 h-[1px] bg-slate-50 top-[6%] z-[-1]"></div>
        </div>
        <div className=" m-3 grid grid-cols-2 ">
          <div
            ref={textElement}
            id="text-services"
            className=" grid justify-center text-services-class text-center items-center text-[24px] sm:text-[3vh]"
          >
            {text.text}
          </div>
          <div
            ref={imageElement}
            id="image-service"
            className="grid justify-center items-center"
          >
            <img
              className="h-[120px] sm:h-[220px] object-cover"
              src={text.image}
              alt=""
            />
          </div>
        </div>

        <div className=" mx-auto w-[120px] grid grid-cols-2 relative mb-2 ">
          <p className="absolute bottom-[-15px] w-full text-center text-[16px]">
            {number + "/" + words.length}
          </p>
          <button onClick={undo}>{"<"}</button>
          <button onClick={next}>{">"}</button>
        </div>
      </div>
    </div>
  );
}
