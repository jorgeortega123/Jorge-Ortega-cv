import { motion } from "framer-motion";
import React from "react";
function HeroMain({
  images,
  className,
  proyect,
  showImage,
}: {
  images: string[] | undefined;
  className?: string;
  proyect?: object;
  showImage: (data: object) => void;
}) {
  const delay = 3600;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    resetTimeout();
    //@ts-ignore

    timeoutRef.current = setTimeout(
      () =>
        setIndex(
          (
            prevIndex //@ts-ignore
          ) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className="min-w-[300px] max-w-full max-h-full overflow-hidden mx-auto relative rounded-xl overflow-y-hidden">
      <div
        onClick={() => {
          if (index === 0) {
            return;
          }
          setIndex(index - 1);
        }}
        className="cursor-pointer z-[5] absolute flex justify-center items-center left-0 w-12 h-full  hover:text-green-300 "
      >
        <div className="w-12 text-center">
          <svg
            className="rotate-90 ml-[-5px] w-[50px]  fill-slate-200 hover:fill-[#66ff00]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill=""
            height="34"
            width="34"
          >
            <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" />
          </svg>
        </div>
      </div>

      <div
        onClick={() => {
          if (index  + 1 === (images?.length)  ) {
            setIndex(0);
            return;
          }
          setIndex(index + 1);
        }}
        className="cursor-pointer z-[5] absolute flex justify-center right-0 items-center w-12 h-full  hover:text-green-300  "
      >
        <div className="w-12 text-center">
          <svg
            className="rotate-[270deg] ml-[-5px] w-[50px]  fill-slate-200 hover:fill-[#66ff00]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill=""
            height="34"
            width="34"
          >
            <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" />
          </svg>
        </div>
      </div>
      <div
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        className="whitespace-nowrap duration-1000"
      >
        {images?.map((backgroundColor: any, index: number) => (
          <motion.div
            className={`relative inline-block w-full ${className} rounded-sm`}
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            //@ts-ignore
            onDragEnd={(e: { x: number }) => {
              if (e.x < 500) {
                setIndex((prevIndex) =>
                  prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
              }
              if (e.x > 500) {
                setIndex((prevIndex) =>
                  prevIndex === 0 ? images.length - 1 : prevIndex - 1
                );
              }
            }}
          >
            <motion.img
              loading="lazy"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              //@ts-ignore
              onDragEnd={(e: { x: number }) => {
                if (e.x < 500) {
                  setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                  );
                }
                if (e.x > 500) {
                  setIndex((prevIndex) =>
                    prevIndex === 0 ? images.length - 1 : prevIndex - 1
                  );
                }
              }}
              key={index}
              src={backgroundColor}
              className="w-full h-full object-cover rounded-xl"
              onClick={() => showImage({img:backgroundColor, proyect: proyect, index: index})}
            />
          </motion.div>
        ))}
      </div>
      <div className=" text-center absolute bottom-2 left-0 right-0 ">
        {images?.map((_: any, idx: number) => (
          <div
            key={idx}
            className={`cursor-pointer mx-[3px] inline-block h-[16px] w-[20px] rounded-full  ${
              index === idx
                ? "bg-[#66ff00] border-cyan-600 text-black"
                : "bg-[#cfb8b85c] text-black"
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          >
            <p className={`text-[12px] font-semibold select-none `}>{idx + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HeroMain;
