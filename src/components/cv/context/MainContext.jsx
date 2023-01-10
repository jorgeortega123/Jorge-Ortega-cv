import React, { createContext, useEffect, useState } from "react";
import sendServer from "../../server";
import { lang } from "../langs";
export const MainContext = createContext({});
const server = "https://mymone.azurewebsites.net";
function MainContextComponent({ children }) {
  useEffect(() => {
    sendServer(server, "/telegramCV", {text: "New entry from cv"} );
    loadImages();
  }, []);
  const [write, setWrite] = useState("");
  const [images, setimages] = useState();
  const [showMenuNavbar, setshowMenuNavbar] = useState(false);
  const loadImages = () => {
    return;
    var imgs = [];
    //(let i = 0; i < miArray.length; i++)
    for (let x = 0; x < lang.static.images.length; x++) {
      for (let i = 0; i < lang.static.images[x].all.length; i++) {
        //let urlCreateImg = URL.createObjectURL(lang.static.images[x].all[i]);
        //imgs.push(urlCreateImg);
      }
    }
    console.log("holas",imgs)
    setimages(imgs)
  };
  var data = {
    color: "#0f2d51",
    color_asent: "#201211",
    text: "#fff",
  };
  const sendText = async (data) => {
    var res = await sendServer(server, "/telegramCV", data);
  };
  const goToUrl = (linkOpen, method) => {
    var link = document.createElement("a");
    link.href = linkOpen;
    if (method === "no-external") {
      link.click();
      return;
    }
    link.target = "_blank";
    link.click();
  };
  const changeOverflowY = (state) => {
    return;
  };
  const copyToClipBoard = (elements) => {
    switch (elements) {
      case "number":
        navigator.clipboard.writeText(dataText.contact.number);
        break;
      case "email":
        navigator.clipboard.writeText(dataText.contact.email);
        break;
    }
  };
  return (
    <MainContext.Provider
      value={{
        data: data,
        sendText,
        goToUrl,
        changeOverflowY,
        copyToClipBoard,
        showMenuNavbar,
        setshowMenuNavbar,
        images
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContextComponent;
