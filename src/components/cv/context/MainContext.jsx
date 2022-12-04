import React, { createContext, useEffect, useState } from "react";
import sendServer from "../../server";
export const MainContext = createContext({});
const server = "https://mymone.azurewebsites.net";
function MainContextComponent({ children }) {
  useEffect(() => {
    sendServer(server, "/init", "turn");
  }, []);
  const [write, setWrite] = useState("");
  const [showMenuNavbar, setshowMenuNavbar] = useState(false);
  var data = {
    color: "#0f2d51",
    color_asent: "#201211",
    text: "#fff",
  };

  const sendText = async (data) => {
    var res = await sendServer(server, "/telegramCV", data);
    console.log(res);
  };
  const goToUrl = (linkOpen, method) => {
    var link = document.createElement("a");
    link.href = linkOpen;
    if (method==="no-external") { 
      link.click();
      return
    }
    link.target = "_blank";
    link.click();
  };
  const changeOverflowY = (state) => {
    var isHiddenOVerflowY = document.body.style.overflowY;
    if (isHiddenOVerflowY === "") isHiddenOVerflowY = "auto";
    if (isHiddenOVerflowY === "auto") {
      console.log(isHiddenOVerflowY, 1);
      document.body.style.overflowY = "hidden";
      return;
    } else {
      console.log(isHiddenOVerflowY, 2);
      document.body.style.overflowY = "auto";
      return;
    }
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
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContextComponent;