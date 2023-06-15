import React from "react";
import InProgressKnowledge from "../containers/InProgressKnowledge";
import { lang } from "../../langs";
const staticInf = lang.static;
export default function CurrentlyProyect(dataText) {
  dataText = dataText.dataText;
  console.log(dataText, staticInf);

  return (
    <div className="flex justify-center w-full lg:w-full xl:w-6/12  pt-2 mt-[16px]">
      <div className=" min-w-full p-3 pb-10 border-[1px] border-[#0000003c] bg-[#00000023] rounded-[6px]  max-w-full lg:max-w-[700px] flex flex-col ">
        <div className="text-[1.5rem]">{dataText.headers.learning}</div>
        <div className=" flex flex-col space-y-[1.5rem]">
          {staticInf.incomingKnowledge.map((d) => {
            console.log(d);
            return (
              <InProgressKnowledge
                dataText={dataText.headers.basicKnowledge}
                icon={d.icon}
                name={d.title}
                percentage={d.percentage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
