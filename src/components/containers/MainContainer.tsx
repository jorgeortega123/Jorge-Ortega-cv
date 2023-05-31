import React from "react";

export default function MainContainer({
  title,
  subtitle, 
  children,
  convertHTML,
  className,
  id,
  ...props
}: {
  title: string;
  subtitle: string;
  children?: any;
  className?: string;
  id?: string;
  convertHTML?: boolean;
}) {
  const spacing = "100px";
  return (
    <div
      className={`w-full flex flex-col  justify-center items-center pt-[40px]  `}
      id={id}
    >
      <div className="my-3 text-[26px] lg:text-[30px] text-center ">
        <p className="titleText leading-3 text-[#FFFF] ">{title}</p>
        <p className="text-[1.3rem] text-[#ccc] ">{subtitle}</p>
      </div>

      <div
        className={`relative ${JSON.stringify(
          props
        )} justify-center items-center space-y-5 w-full  ${className} `}
      >
        {children}
      </div>
    </div>
  );
}
