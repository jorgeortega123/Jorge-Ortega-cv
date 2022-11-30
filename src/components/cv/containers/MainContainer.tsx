import React from "react";

export default function MainContainer({
  title,
  children,
  convertHTML,
  className,
  id,
  ...props
}: {
  title: string;
  children: any;
  className: string;
  id:string
  convertHTML: boolean;
}) {
  const spacing = "100px";
  return (
    <div
      className={`w-full flex flex-col  justify-center items-center my-12 `}
      id={id}
    >
      <p className="titleText text-left mt-4 mb-1">{title}</p>
      <div className={`relative ${JSON.stringify(props)} justify-center items-center space-y-5 w-full  ${className} `}>
        {children}
      </div>
    </div>
  );
}
