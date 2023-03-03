import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Controller, Scene } from "react-scrollmagic";
import MainContainer from "../containers/MainContainer";
import Parallax from "../parallax";
export default function Services() {
  const [textToShow, setTextToShow] = useState("word1");
  const [changeText, setchangeText] = useState(false);
  const [one, setone] = useState("second");
  const [sec, setsec] = useState("second");
  const [number, setnumber] = useState(0);

  var words = [
    {
      title: " Adaptación rápida",
      text: ": Puedo comprender en poco tiempo la metodología de trabajo, ya sea la forma de trabajar como la de programar. Uso los estigmas funcionales y orientados a objetos.",
      image: "",
    },
    {
      title: "Código limpio",
      text: " Comprendo y aplico el método SOLID para crear componentes entendibles y crear una estructura legible en los archivos.",
      image: "",
    },
    {
      title: "Disponibilidad inmediata",
      text: "En caso de que necesite contratar mis servicios puede hacerlo y recibirá una respuesta inmediata a su llamado.",
      image: "",
    },
    {
      title: "Vanila Js",
      text: "Conozco muy bien cómo armar una página sin necesidad de usar una librerías o framework frontend.",
      image: "",
    },
  ];
  useEffect(() => {
    change();
  }, []);

  const change = async (sum) => {
    if (sum === "" || sum === undefined) sum = false;
    if (number === words.length) {
      console.log("ASDASD");
      setnumber(0);
      return;
    }
    console.log(number);
    if (number % 2 === 1) {
      console.log("impar");
      setone(words[number].text);
      setsec(words[number].title);
      console.log(words[number].text, words[number].title);
      sum ? setnumber(number + 1) : setnumber(number - 1);
    } else {
      console.log("par");
      setsec(words[number].text);
      setone(words[number].title);
      if (number <= 0) {
        setnumber(number + 1);
        return;
      }
      sum ? setnumber(number + 1) : setnumber(number - 1);
    }
  };
  return (
    <Controller>
      <div className="hidden w-11/12 bg-[#00000023] rounded-[6px] border-[1px] border-[#0000001a]  px-2 sm:w-10/12 lg:sm:w-8/12 xl:w-7/12  ">
        <div className="flex flex-col  w-full max-h-[110px] ">
          <Scene duration={600} pin={true} enabled={true}>
            <div className="">
              <div>Pin Test</div>
            </div>
          </Scene>
          <Scene duration={200} pin={{ pushFollowers: false }}>
            <div className="">
              <div>Pin Test1</div>
            </div>
          </Scene>
          <Scene duration={300} pin={true} offset={100}>
            <div className="">
              <div>Pin Test2</div>
            </div>
          </Scene>

          {/* <div>
          <div className="h-[110px] grid grid-cols-2">
            <div className="relative text-center">
              <AnimatePresence>
                {changeText && (
                  <motion.div
                    initial={{ opacity: 1, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 300 }}
                    transition={{ type: "spring", duration: 0.7 }}
                    className="w-full h-full text-center"
                  >
                    {one}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="relative ">
              <AnimatePresence>
                {changeText && (
                  <motion.div
                    initial={{ opacity: 1, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ type: "spring", duration: 0.7 }}
                    className="absolute w-full h-full text-center"
                  >
                    {sec}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div> */}
          <div className=" mx-auto w-[120px] grid grid-cols-2 ">
            <button onClick={() => change()}>{"<"}</button>
            <button onClick={() => change(true)}>{">"}</button>
          </div>
        </div>
      </div>
    </Controller>
  );
}
