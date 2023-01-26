import React, { useEffect, useState } from "react";
import ContainerProyects from "../containers/ContainerProyects";

export default function Proyects(dataText, showImage) {
  
  const [showMenu, setshowMenu] = useState(false);
  const [limitNumebr, setlimitNumebr] = useState(2);
  const changeLimit = (num) => {
    setlimitNumebr(num);
    setshowMenu(false);
  };
  useEffect(() => {
   var width = window.innerWidth
   console.log(width)
   if (width > 1024) { 
    setlimitNumebr(3)
   }
  }, [window.innerWidth])
  
  return (
    <div id="proyects-view" className="mt-6 ">
      <div className={`w-full xl:px-${limitNumebr % 2 === 0 ? '[250px]': '[0px'} flex justify-center items-center`}>
        <div className={` w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-${limitNumebr} mx-5 lg:mx-[60px] gap-2  sm:gap-5 `}>
          <div className="absolute top-[-16px] tracking-wide select-none ">
            <div className=" items-center justify-center h-[16px]">
              <div className="w-[250px] flex items-center">
                <p>Mostrar:</p>
                <p
                  onClick={() => setshowMenu(!showMenu)}
                  className="relative px-2 mx-1 py-1 border rounded-[4px] border-[#00000081] flex items-center h-[26px] w-[70px] justify-center"
                >
                  {limitNumebr}
                  {showMenu && (
                    <span className="z-[2] border border-[#00000081] bg-[#00000031]  absolute left-2 bottom-[-105px]  flex flex-col text-center w-[55px]">
                      <span
                        onClick={() => changeLimit(2)}
                        className="hover:bg-[#00000031] "
                      >
                        2
                      </span>
                      <span
                        onClick={() => changeLimit(3)}
                        className="hover:bg-[#00000031] "
                      >
                        3
                      </span>
                      <span
                        onClick={() =>
                          changeLimit(dataText.dataText.proyects.length)
                        }
                        className="hover:bg-[#00000031] "
                      >
                        Todos
                      </span>
                    </span>
                  )}
                </p>
                <span>proyectos</span>
              </div>
            </div>
          </div>
          {dataText.dataText.proyects.map((e, n) => {
            if (n >= limitNumebr) return;
            return (
              <ContainerProyects
              key={"proyec" + n}
                index={n}
                title={e.title}
                about={e.about}
                img={e.img}
                web={e.web}
                langs={e.tags}
                inGroup={e.onGroup}
                repo={e.repo}
                showImage={showImage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
