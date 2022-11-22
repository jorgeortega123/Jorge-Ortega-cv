import React, { useContext } from "react";
import { MainContext } from "./MainContext";

function useMainContext() {
  const { data, sendText } = useContext(MainContext) as {
    data: object;
    sendText: (data: string) => void;
  };
  return { data, sendText };
}

export default useMainContext;
