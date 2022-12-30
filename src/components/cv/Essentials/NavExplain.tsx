import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
export default function NavExplain({showMenuNavbar, setshowMenuNavbar, dataText}) {

 if (!showMenuNavbar) return <></>;
  return (
    <div className=' bg-slate-200 max-w-screen max-h-screen relative z-[7]'>
        <div
          className="menu-items capitalize top-0 fixed"
        > 
          <p>
            <a onClick={()=>setshowMenuNavbar(false)} href="#home">{dataText.headers.home}</a>
          </p>
          <p>
            <a onClick={()=>setshowMenuNavbar(false)}  href="#about">{dataText.headers.about}</a>
          </p>

          <p>
            <a  onClick={()=>setshowMenuNavbar(false)} href="#proyects">{dataText.headers.proyects}</a>
          </p>
          <p>
            <a  onClick={()=>setshowMenuNavbar(false)}  href="#contact">{dataText.headers.contact}</a>
          </p>
        </div>
        </div>
  )
}
