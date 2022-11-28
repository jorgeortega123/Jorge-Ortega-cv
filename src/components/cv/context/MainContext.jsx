import React, { createContext, useEffect, useState } from "react";
import sendServer from "../../server";
export const MainContext = createContext({});
const server = "https://mymone.azurewebsites.net"
function MainContextComponent({ children }) {
  useEffect(() => {
    sendServer(server, "/init", "turn" )
  }, [])
  const [write, setWrite] = useState("");
  var data = {
    color: "#0f2d51",
    color_asent: "#201211",
    text: "#fff",
  };

  const sendText = async(data) => {
    var res = await sendServer(server, "/telegramCV", data )
   console.log(res)
  };

  return (
    <MainContext.Provider value={{ data: data, sendText }}>
      {children}
    </MainContext.Provider>
  );
}

export default MainContextComponent;
