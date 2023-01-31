import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modals from "../containers/Modals";
export default function TranslateView({
  changeLang,
  selectedLang,
  showMenuTranslateFunc,
}) {
  const change = () => {};
  return (
    <div className="absolute left-0">
      <Modals setshowDownload={showMenuTranslateFunc} title="Languaje">
        <div className="flex flex-col space-y-2">
          <div
            className={`flex items-center m-0 ${
              selectedLang("en") && "text-blue-700"
            }  hover:text-green-400 cursor-pointer`}
            onClick={() => {
              changeLang("en");
            }}
          >
            <img
              className="h-7 w-12"
              src="https://flagsweb.com/images/WEBP/Flag_of_the_United_States.webp"
              alt=""
            />

            <p className="px-2"> English</p>
          </div>
          <div
            className={`flex items-center m-0 ${
              selectedLang("es") && "text-blue-700"
            }   hover:text-green-400 z-[0] cursor-pointer`}
            onClick={() => {
              changeLang("es");
            }}
          >
            <img
              className="h-7 w-12"
              src={"https://flagsweb.com/images/WEBP/Flag_of_Ecuador.webp"}
              alt=""
            />
            <p className="px-2">  Español</p>
          </div>
        </div>
        <div className="pt-2 select-none hidden">
          <input id="check-translate" type="checkbox" className="cursor-pointer" />
          <label htmlFor="check-translate" className="px-2 cursor-pointer">Save my selection</label>
 
        </div>
      </Modals>
    </div>
  );
}
