import React, { useState } from "react";
import MailSVG from "../../../../../assets/svg/mail.svg";
import CallSVG from "../../../../../assets/svg/call.svg";
import SendSGV from "../../../../../assets/svg/send.svg";
import useMainContext from "../../../context/useMainContext";
import Button from "../../Button";
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
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const dataContact = [
    { inf: "+593 9627  16235", icon: CallSVG, title: "Call me", href: "tel:" },
    {
      inf: dataText.contact.email,
      icon: MailSVG,
      title: "Email",
      href: "mailto:",
    },
  ];
  const formatToSend = {
    text: {
      name: name,
      email: email,
      subject: subject,
      body: userTextWrote,
    },
  };
  const SVGsend = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill=""
        height="38"
        width="38"
        viewBox="0 0 48 48"
      >
        <path d="M8 37V11l30.85 13Zm1.55-2.4L34.85 24 9.55 13.3v8.4L19.3 24l-9.75 2.25Zm0 0V13.3v12.95Z" />
      </svg>
    );
  };
  return (
    <div className="bg-transparent flex lg:space-x-5 flex-col lg:flex-row rounded-[11px] w-full items-center mt-10">
      <div className="flex flex-col justify-start items-start space-y-2 w-full ">
        {dataContact.map((e) => {
          return (
            <div className="flex justify-center items-center ">
              <div className="w-12 h-12 mx-2">
                <img src={e.icon} alt="" />
              </div>
              <div className="altura-letras ">
                <div className="font-bold text-[26px]">{e.title}</div>
                <div className="font-light text-slate-300 text-[18px] transition-all hover:text-[#3add11]">
                  <a href={`${e.href + e.inf}`}>{e.inf}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative w-full flex justify-center">
        <div className="pt-10 space-y-1  sm:space-y-7  w-full flex flex-col relative overflow-x-hidden overflow-y-auto items-center justify-center">
          <div className="flex flex-col space-y-1 sm:space-y-0  lg:space-x-6 w-full">
            <div className="border-[2px] flex-col input-contact w-full">
              <p className="text-[13px] target-p-contact blockAllSelect">Name</p>
              <input
                onChange={(e) => {
                  setname(e.target.value);
                }}
                className="input-sender bg-transparent w-full  "
                type="text"
              />
            </div>
            <div className="border-[2px] flex-col input-contact w-full">
              <p className="text-[13px] target-p-contact blockAllSelect">Email</p>
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="email"
                className="input-sender bg-transparent w-full "
              />
            </div>
          </div>
          <div className="border-[2px] flex-col w-full input-contact ">
            <p className="text-[13px] target-p-contact blockAllSelect">Subject</p>
            <input
              onChange={(e) => {
                setsubject(e.target.value);
              }}
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

          <Button
            svg={true}
            icon={SVGsend}
            onClick={() => sendText(formatToSend)}
            className="capitalize"
            randNumber={1}
          >
            <SVGsend></SVGsend>
          </Button>
        </div>
      </div>
    </div>
  );
}
