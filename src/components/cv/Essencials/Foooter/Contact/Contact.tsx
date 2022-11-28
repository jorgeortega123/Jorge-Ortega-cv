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
  const dataContact = [
    { inf: "+593 9627  16235", icon: CallSVG, title: "Call me", href:"tel:" },
    { inf: dataText.contact.email, icon: MailSVG, title: "Email", href: "mailto:" },
  ];
  //          href={`${"mailto:" + dataText.contact.email}`}
  //          href={`${"tel:" + "+593 9627  16235"}`}
  //          onClick={() => copyToClipBoard("email")}
  return (
    <div className="bg-transparent flex lg:space-x-5 flex-col lg:flex-row rounded-[11px] w-full items-center">
      <div className="flex flex-col items-start space-y-2 ">
        {dataContact.map((e) => {
          return (
            <div className="flex justify-center items-center ">
              <div className="bg-slate-600 w-12 h-12 mx-2"><img src={e.icon} alt="" /></div>
              <div>
                <div className="font-bold text-[16px]">{e.title}</div>
                <div className="font-light text-[14px]"><a href={`${e.href + e.inf}`}>{e.inf}</a></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative w-full flex justify-center">
        <div className="pt-12 space-y-7  w-full flex flex-col relative overflow-x-hidden overflow-y-auto items-center justify-center">
          <div className="flex space-x-3  lg:space-x-6 w-full">
            <div className="border-[2px] flex-col input-contact w-full">
              <p className="text-[13px] target-p-contact">Name</p>
              <input className="input-sender bg-transparent  " type="text" />
            </div>
            <div className="border-[2px] flex-col input-contact w-full">
              <p className="text-[13px] target-p-contact">Email</p>
              <input type="email" className="input-sender bg-transparent " />
            </div>
          </div>
          <div className="border-[2px] flex-col w-full input-contact ">
            <p className="text-[13px] target-p-contact">Subject</p>
            <input
              className="input-sender bg-transparent w-full input-contact"
              type="text"
            />
          </div>

          <textarea
            id="textareOfFooter"
            placeholder={dataText.extras.footer.input}
            className="input-contact w-full h-[200px] focus:border-cyan-500 px-2 input-sender hover:border-cyan-600 active:border-cyan-600  border-[2px] rounded-[8px]  "
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
