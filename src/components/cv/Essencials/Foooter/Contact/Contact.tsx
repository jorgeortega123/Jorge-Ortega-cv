import React, { useState } from "react";
import MailSVG from "../../../../../assets/svg/mail.svg";
import CallSVG from "../../../../../assets/svg/call.svg";
import useMainContext from "../../../context/useMainContext";
export default function ContactComponent({
  dataText = { contact: { email: "@" }, extras: { footer: { input: "" } } },
  copyToClipBoard,
}: {
  dataText: {
    contact: { email: string };
    extras: { footer: { input: string } };
  };
  copyToClipBoard: (data: string) => void;
}) {
  const [userTextWrote, setuserTextWrote] = useState("");
  const { data, sendText } = useMainContext();
  return (
    <div className="bg-transparent flex flex-col lg:flex-row rounded-[11px] w-full items-center justify-left">
      <div>
        <div
          className="flex-col cursor-pointer"
          onClick={() => copyToClipBoard("number")}
        >
          <div className="flex">
            <img className="w-[36px] h-[36px] " src={CallSVG} alt="" />
            <p>Call Me</p>
          </div>
          <a
            href={`${"tel:" + "+593 9627  16235"}`}
            className="text-[16px] pt-[5px] pl-2 w-[238px] text-center hover:text-green-400"
          >
            {"+593 9627  16235"}
          </a>
          {/* { <img
                        className="w-[22px] h-[22px] mt-[2px]"
                        src={CopySGV}
                        alt=""
                      />} */}
        </div>
        <div
          className="flex-col cursor-pointer"
          onClick={() => copyToClipBoard("email")}
        >
          <div className="flex">
            <img className="w-[36px] h-[36px]" src={MailSVG} alt="" />
            <p>Email</p>
          </div>
          <a
            href={`${"mailto:" + dataText.contact.email}`}
            className="text-[16px] pt-[5px]  w-[238px]  pl-2 underline hover:text-green-400"
          >
            {dataText.contact.email}
          </a>
        </div>
      </div>
      <div className="relative w-full flex justify-center mt-3">
        <div className="pt-12 space-y-7  w-full flex flex-col relative overflow-x-hidden overflow-y-auto items-center justify-center">
          <div className="flex space-x-3  lg:space-x-6 w-full">
            <div className="border-[1px] flex-col input-contact w-full">
              <p className="text-[13px] target-p-contact">Hola</p>
              <input className="input-sender bg-transparent  " type="text" />
            </div>
            <div className="border-[1px] flex-col input-contact w-full">
              <p className="text-[13px] target-p-contact">Holsa</p>
              <input className="input-sender bg-transparent " type="text" />
            </div>
          </div>
          <div className="border-[1px] flex-col w-full input-contact ">
            <p className="text-[13px] target-p-contact">Subject</p>
            <input
              className="input-sender bg-transparent w-full input-contact"
              type="text"
            />
          </div>

          <textarea
            id="textareOfFooter"
            placeholder={dataText.extras.footer.input}
            className="input-contact w-full h-[200px] focus:border-cyan-500 px-2 input-sender hover:border-cyan-600 active:border-cyan-600  border-[1px] rounded-[8px]  "
            name=""
            onChange={(e) => {
              setuserTextWrote(e.target.value);
            }}
          />

          <div
            onClick={() => sendText(userTextWrote)}
            className="border-[1px] border-[aqua] text-center w-[50px] cursor-pointer h-[25px] rounded-md transition-all hover:text-[aqua]"
          ></div>
        </div>
      </div>
    </div>
  );
}
