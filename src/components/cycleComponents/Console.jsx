import React, { useEffect, useState } from "react";

export default function Console() {
  const [showMenu, setshowMenu] = useState(false);
  const [inputValue, setinputValue] = useState();
  const [filterOptions, setfilterOptions] = useState([]);
  const [consoleText, setconsoleText] = useState([
    { command: "TITLE", text: "Error" },
  ]);
  const keys = [
    {
      method: "get",
      options: ["cv", "proyects"],
    },
    {
      method: "add",
      options: ["p1", "p2"],
    },
  ];
  useEffect(() => {
    showOptions()
  }, [])
  
  const hideOptions = () => {
    setfilterOptions([]);
    setinputValue("");
  };
  const showOptions = async () => { 
    var m = []
     var allMethods = await keys.map((arr)=> { 
      m.push(arr.method)
    })
    console.log("ALLMETHODS", allMethods)
    setfilterOptions(m)
  }
  const changeInput = (val) => {
    console.log(val.split());
    if (val.split().length < 0 ) {
      showOptions();
    }

    var options = keys.filter((op) => {
      return op.method.toLowerCase().startsWith(val.toLowerCase());
      // return country.name.common.toLowerCase().startsWith(val.toLowerCase());
    });
    if (options.length === 0) hideOptions();
    setfilterOptions(options);
    console.log("ASDASDAS", options);
  };

  return (
    <div className="hidden fixed w-full h-screen z-[2]">
      {showMenu && (
        <div className="absolute bottom-[70px] right-2">
          <div className="border w-[40vh] h-[40vh] bg-[#00000081] backdrop-blur-sm p-2 relative">
            <div className="items-console">
              <p>Console</p>
            </div>
            <div className="history-console bg-black w-full h-[calc(100%_-_55px)] px-[3px] py-[3px] overflow-y-auto">
              {consoleText.map((e) => (
                <div>
                  <p>{e.command}</p>
                  <p>{e.text}</p>
                </div>
              ))}
            </div>

            <div className="w-full relative bottom-2 rounded-md flex ">
              <ul className="absolute mt-[-25px] ml-5 flex flex-col bg-slate-90">
                {filterOptions.map((e) => (
                  <div>{JSON.stringify(e) }</div>
                ))}
              </ul>
              <label className="text-white  z-[2]" htmlFor="input-console ">
                {">"}
              </label>
              <input
                id="input-console"
                spellCheck={false}
                onChange={(e) => changeInput(e.target.value)}
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
