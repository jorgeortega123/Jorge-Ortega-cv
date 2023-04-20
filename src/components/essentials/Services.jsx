import React, { useEffect, useRef, useState } from "react";
export default function Services(dataText) {
  const [textToShow, setTextToShow] = useState("word1");
  const [changeAnimation, setchangeAnimation] = useState(false);
  const [text, settext] = useState("second");
  const [image, setimage] = useState("second");
  const [number, setnumber] = useState(0);
  const [words, setwords] = useState(
    dataText.dataText.headers.services_segment
  );

  const [position, setPosition] = useState(0);

  const handlePrev = () => {
    setPosition(position === 0 ? words.length - 1 : position - 1);
  };

  const handleNext = () => {
    setPosition(position === words.length - 1 ? 0 : position + 1);
  };

  return (
    <div className="w-12/12 bg-[#00000023] rounded-[6px]  border-[#0000001a]  px-2 sm:w-10/12 lg:sm:w-8/12 xl:w-7/12  ">
      <div className=" flex flex-col  w-full items-center relative  ">
        <div className=" px-2 text-center w-max  #082744 bg-[#082744] ">
        {words[position].title}
        </div>
        <div className=" m-3 grid grid-cols-2 relative services-container ">
          <div
            id=""
            style={{
              transform:
                position % 2 === 0 ? "translateX(0)" : "translateX(100%)",
            }}
            className=" w-full text-center"
          >
            {words[position].text}
          </div>
          <div
            style={{
              transform:
                position % 2 != 0 ? "translateX(-100%)" : "translateX(0)",
            }}
            id=""
            className=" w-full flex justify-center items-center"
          >
            <img
              className="h-[120px] sm:h-[220px] object-cover"
              src={words[position].image}
              alt=""
            />
          </div>
        </div>

        <div className=" mx-auto w-[120px] grid grid-cols-2 relative mb-2 ">
          <p className="absolute bottom-[-15px] w-full text-center text-[16px]">
            {position + 1 + "/" + words.length}
          </p>
          <button onClick={handlePrev}>{"<"}</button>
          <button onClick={handleNext}>{">"}</button>
        </div>
      </div>
    </div>
  );
}
