import React from 'react'

export default function InProgressKnowledge({icon, name, percentage,  dataText}:{ 
    icon:string;
    name: string;
    percentage: number,
    dataText: string
}) {
  return (
    <div className=" relative border-[1px] border-[#0000003c] rounded-[6px] flex altura-letras">
    <img
      className="max-w-[65px] h-auto max-h-[65px] p-1"
      src={icon}
      alt=""
    />
    <div className='about-me'>
      <p className="font-bold text-[24px] mt-[10px] ">
        {name}
      </p>
      <p className="text-[19px]">{dataText}</p>
    </div>
    <p className="text-sm absolute right-0 bottom-[-18px]">
      100%
    </p>
    <p className="text-sm absolute left-0 bottom-[-18px]">
      0%
    </p>
    <p className={`text-[13px] text-[#66ff00] absolute text-left bottom-[1px] ml-[${percentage - 2}%]`}>
      {percentage}%
    </p>
    <div
      className={`absolute bottom-0 bg-[#66ff00] transition-all w-[${percentage}%] h-[1px]`}
    ></div>
  </div>
  )
}
