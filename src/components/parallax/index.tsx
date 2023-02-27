import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";
export interface Scroll {
  children?: ReactNode;
  duration?: number;
  offset?: number;
  input?: any[];
  output?: any[];
  name?: string[];
  x?: number[];
  y?: number[];
  scale?: number[];
  opacity?: number[];
  background?: string[];
  className?: string;
}
function Scroll({ offset = 0, duration = 0, ...props }: Scroll) {
  const height = document.getElementById(`scroll`)?.getBoundingClientRect().top;
  const input1 =
    (height as number) - offset <= 0 ? 0 : (height as number) - offset;
  const input2 = input1 + duration;

  const { scrollY } = useScroll();
  const scale =
    props.scale != undefined &&
    useTransform(scrollY, [input1, input2], props.scale, {
      clamp: true,
    });
  const x1 =
    props.x != undefined &&
    useTransform(scrollY, [input1, input2], props.x, {
      clamp: true,
    });
  const y1 =
    props.y != undefined &&
    useTransform(scrollY, [input1, input2], props.y, {
      clamp: true,
    });
  const op =
    props.opacity != undefined &&
    useTransform(scrollY, [input1, input2], props.opacity, {
      clamp: true,
    });
  const style = {
    x: props.x != undefined ? x1 : 0,
    y: props.y != undefined ? y1 : 0,
    scale: props.scale != undefined ? scale : 1,
    opacity: props.opacity != undefined ? op : 1,
  };
  return (
    //@ts-ignore
    <motion.div id={`scroll`} style={style} className={props.className}>
      {props.children}
    </motion.div>
  );
}

export default Scroll;