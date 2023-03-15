import React from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function NavExplain({
  showMenuNavbar,
  setshowMenuNavbar,
  dataText,
}) {
  if (!showMenuNavbar) return <></>;
  return (
    <div
      onClick={() => {
        document
          .getElementById("button-nav-id")
          ?.classList.remove("active-nav");
        setshowMenuNavbar(false);
      }}
      className="h-full w-screen  absolute z-[8] bg-[#0000006b] "
    >
      <div className="menu-items capitalize top-0 fixed">
        <p className="hover:text-[#66ff00] transition-all">
          <a onClick={() => setshowMenuNavbar(false)} href="#home">
            {dataText.headers.home}
          </a>
        </p>
        <p className="hover:text-[#66ff00] transition-all">
          <a onClick={() => setshowMenuNavbar(false)} href="#about">
            {dataText.headers.about}
          </a>
        </p>

        <p className="hover:text-[#66ff00] transition-all">
          <a onClick={() => setshowMenuNavbar(false)} href="#proyects">
            {dataText.headers.proyects}
          </a>
        </p>
        <p className="hover:text-[#66ff00] transition-all">
          <a onClick={() => setshowMenuNavbar(false)} href="#contact">
            {dataText.headers.contact}
          </a>
        </p>
        <div className="absolute bottom-0 left-2 text-[18px]">
    
          <p>Made with &hearts; by Jorge Ortega</p>
        </div>
      </div>
    </div>
  );
}
