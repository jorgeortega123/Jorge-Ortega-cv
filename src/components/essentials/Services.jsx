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
    <div className="w-12/12 bg-[#00000023] rounded-[6px]  border-[#0000001a] pb-3  px-2  max-w-[700px]  ">
      <div className=" flex flex-col  w-full items-center relative  ">
        <div className=" m-2 mt-4 text-center w-max  #082744 bg-[#082744] ">
        <h2 className="text-[16px]"> {words[position].title}</h2>
        </div>
        <div className="  m-3 grid grid-cols-2 justify-center items-center relative services-container h-full ">
          <div
            id=""
            style={{
              transform:
                position % 2 === 0 ? "translateX(0)" : "translateX(100%)",
                
            }}
            className=" h-[100%]  w-full text-center flex items-center justify-center"
          >
            <p className="h-full service-text text-[13px] sm:text-[14px]">{words[position].text}</p> 
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
          <p className=" z-[-1] absolute bottom-[-22px] w-full text-center text-[16px] ">
            {position + 1 + "/" + words.length}
          </p>
          <button className=" bg-[#0000001a] rounded-l-[6px] cursor-pointer hover:bg-[#0000003a]" onClick={handlePrev}>{"<"}</button>
          <button className="bg-[#0000001a] rounded-r-[6px] cursor-pointer hover:bg-[#0000003a]" onClick={handleNext}>{">"}</button>
        </div>
      </div>
    </div>
  );
}
