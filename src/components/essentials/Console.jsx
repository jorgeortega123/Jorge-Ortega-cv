import React, { useState } from "react";

export default function Console() {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <div className="hidden fixed w-full h-screen z-[3]">
      {showMenu && (
        <div className="absolute bottom-[70px] right-2">
          <div className="border w-[40vh] h-[40vh] bg-[#00000081] backdrop-blur-sm p-2 relative">
            <div className="items-console">
              <p>Cv</p>
              <p>hola</p>
            </div>
            <div className="history-console bg-black w-full h-[calc(100%_-_76px)] px-[3px] py-[3px] overflow-y-auto">
<p>s</p>
            </div>
            <div className="w-full absolute bottom-2 rounded-md flex ">
              <label className="text-white  z-[2]" htmlFor="input-console ">{">"}</label>
              <input
                id="input-console"
                spellCheck={false}
                className="w-full ml-[-22px] pl-[25px] text-white outline-none bg-black"
                type="text"
              />
            </div>
          </div>
        </div>
      )}
      <div
        onClick={() => setshowMenu(!showMenu)}
        className="absolute bottom-2 right-2"
      >
        <img
          className="w-[58px] border-[2px] border-transparent hover:border-slate-200  rounded-full"
          src="https://res.cloudinary.com/ddcoxtm2v/image/upload/v1677638423/pngwing.com_jnruzd.png"
          alt=""
        />
      </div>
    </div>
  );
}
