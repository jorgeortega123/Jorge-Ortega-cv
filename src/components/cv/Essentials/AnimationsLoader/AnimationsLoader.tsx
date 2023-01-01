import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimationsLoader({
  moveX=0,
  moveY=0,
  delay=0,
  duration=2,
  children,
}:{
  moveX?: number;
  moveY?: number;
  delay?: number;
  duration:number
  children: any;
}) {
  var effects = {
    translateX: 0,
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, translateX: moveX, translateY: moveY }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", duration: duration, delay:delay }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
