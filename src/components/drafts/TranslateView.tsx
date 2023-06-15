import React from "react";

export default function TranslateView({
  showMenuTranslate,
  changeLang,
  selectedLang,
  setshowMenuTranslate,
}) {
  const change = () => {};
  return (
    <div className="fixed left-0 w-screen z-[2]">
      {/* <Modals setshowDownload={setshowMenuTranslate} title="Languaje">
        <div className="flex flex-col space-y-2">
          <div
            className={`flex items-center m-0 ${
              selectedLang("en") && "text-blue-700"
            }  hover:text-green-400 cursor-pointer`}
            onClick={() => {
              changeLang("en");
              document.body.style.overflowY = "scroll";
              setshowMenuTranslate(!showMenuTranslate);
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
              document.body.style.overflowY = "scroll";
              setshowMenuTranslate(!showMenuTranslate);
            }}
          >
            <img
              className="h-7 w-12"
              src={"https://flagsweb.com/images/WEBP/Flag_of_Ecuador.webp"}
              alt=""
            />
            <p className="px-2"> Español</p>
          </div>
        </div>
        <div className="pt-2 select-none hidden">
          <input
            id="check-translate"
            type="checkbox"
            className="cursor-pointer"
          />
          <label htmlFor="check-translate" className="px-2 cursor-pointer">
            Save my selection
          </label>
        </div>
      </Modals> */}
    </div>
  );
}
