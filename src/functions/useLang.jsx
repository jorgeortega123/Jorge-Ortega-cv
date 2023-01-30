import React, { useState } from "react";
import { lang } from "../langs";
var support_langs = ["es", "en"];
export default function useLang() {
  const [langInProduction, setlangInProduction] = useState("en");
  var userLang = localStorage.getItem("lang")
  if (userLang) setlangInProduction(userLang)
  // if (!langUser.includes(support_langs) || !change.includes(support_langs)) {
  //   setlangInProduction("en");
  // }
  const dataText = lang[langInProduction];
  const setdataText = (change) => {
    setlangInProduction(change);
  };

  return [dataText, setdataText];
}
