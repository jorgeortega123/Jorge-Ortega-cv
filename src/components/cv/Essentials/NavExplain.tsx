import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
export default function NavExplain({showMenuNavbar, dataText}) {

 if (!showMenuNavbar) return <></>;
  return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween" }}
          className="menu-items capitalize top-0 fixed right-0 z-[3]"
        >
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#about">{dataText.headers.about}</a>
          </p>

          <p>
            <a href="#proyects">{dataText.headers.proyects}</a>
          </p>
          <p>
            <a href="#contact">{dataText.headers.contact}</a>
          </p>
        </motion.div>
  )
}
