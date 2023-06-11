import React, { createContext, useEffect, useState } from "react";
import sendServer from "../../server";
import { lang } from "../../langs";
const data = {
  color: "#0f2d51",
  color_asent: "#201211",
  text: "#fff",
};
export const MainContext = createContext({});
const server = "https://mymone.azurewebsites.net";
function MainContextComponent({ children }) {
  useEffect(() => {
    sendServer(server, "/telegramCV", { text: "New entry from cv" });
    // loadImages();
  });
  const [write, setWrite] = useState("");
  const [images, setimages] = useState([]);
  const [showMenuNavbar, setshowMenuNavbar] = useState(false);


  // const loadImages = async () => {
  //   var unirImagenes = ["./assets/animation_640.gif"];
  //   var imagesArr = []
  //    for (let x = 0; x < lang.static.images.length; x++) {
  //     unirImagenes.push(lang.static.images[x].all[0])
  //   }
  //   for (let i = 0; i < unirImagenes.length; i++) {
  //    await fetch(unirImagenes[i]).then((response) => response.blob())
  //     .then((blob) => {
  //       imagesArr.push(blob)
  //     });
  //   setimages(imagesArr)
  //   console.log(images)
  //   }
  // };

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
        images,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContextComponent;
