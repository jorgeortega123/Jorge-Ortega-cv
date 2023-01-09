import React, { useContext } from "react";
import { MainContext } from "./MainContext";

function useMainContext() {
  const { data, sendText, goToUrl, changeOverflowY, copyToClipBoard, showMenuNavbar, setshowMenuNavbar, images } = useContext(MainContext) as {
    data: object;
    showMenuNavbar: boolean
    sendText: (data: object) => void;
    goToUrl: (data: string) => void;
    images: (date: [])=> void;
    changeOverflowY: (state:boolean)=> void;
    copyToClipBoard: (data:string)=> void;
    setshowMenuNavbar : (data:boolean)=> void;
    
  };
  return { data, sendText, goToUrl, changeOverflowY, copyToClipBoard, showMenuNavbar, setshowMenuNavbar, images  };
}

export default useMainContext;
