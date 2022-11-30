import React, { useState } from "react";

export default function Button({
  text = "hola",
  icon = "../../icons.svg",
  spaceY = 4,
  imageSize = 30,
  className = "",
  svg=false,
  onClick = () => {},
  children,
  andNumber = 0,
  ...props
}: {
  text: string;
  icon: any;
  spaceY: number;
  imageSize: number;
  className: string
  svg: boolean,
  children:any, 
  andNumber: number
  onClick: ()=> void;
}) {
  const [active, setactive] = useState(false)
  return (
    <div
     onClick={onClick}
      {...props}
      className={`cv-button blockAllSelect overflow-x-hidden font-[subtitle] bg-[#3add11] text-[#0f2d51] flex  items-center text-[15px] cursor-pointer rounded-[6px] p-[${spaceY}px] px-[18px] ${className}`}
    >
      <p className="">{text}</p>
      <div className="">
        {svg ? <div onClick={(e)=>document.getElementById(`svg-added${andNumber}`)?.classList.add("svg-anim")} active="true" id={`svg-added${andNumber}`} className={`flex justify-center items-center svg-anim `}>{children}</div>:  <img className={`max-w-[${imageSize}px] pl-2`} src={icon} alt="" />}
   
      </div>
    </div>
  );
}
