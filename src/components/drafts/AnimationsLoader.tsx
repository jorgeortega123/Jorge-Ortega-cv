import React from "react";


export default function AnimationsLoader({
  moveX=0,
  moveY=0,
  delay=0,
  duration=2,
  children,
}:{
  moveX?: number;
  moveY?: number;
  delay?: number;
  duration:number
  children: any;
}) {
  var effects = {
    translateX: 0,
  };
  return (

      <div>
        {children}
        </div>
  
  );
}
