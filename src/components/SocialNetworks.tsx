import React from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function SocialNetworks({
  img = "sad",
  url = "",
  classNamee = "",
  intoImg = "",
  number = 0,
  name = "text",
  ...props
}: {
  img?: any;
  url?: string;
  classNamee?: any;
  intoImg?: any;
  name?: string;
  number?: number;
}) {
  const goToUrl = (linkOpen: any) => {
    var link = document.createElement("a");
    link.href = linkOpen;
    link.target = "_blank";
    link.click();
  };
  var n = (number: number) => {
    if (number % 2 === 0) {
      return -36;
    }
    return -12;
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: n(number) }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "tween", duration: 1.5 }}
      className=""
    >
      <div
        onClick={() => {
          goToUrl(url);
        }}
        id="social-container"
        className={classNamee + "  flex justify-start items-center text-social-hidden sm:justify-center md:justify-start "}
      >
        <img src={img} className={`Social ${intoImg} cursor-pointer`} />
        <label htmlFor="social-container" className="label-social-network px-1 invisible capitalize hover:cursor-pointer">
          {name}
        </label>
      </div>
    </motion.div>
  );
}
