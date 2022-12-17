import React, { useState } from "react";
import MailSVG from "../../../../../assets/svg/mail.svg";
import CallSVG from "../../../../../assets/svg/call.svg";
import SendSGV from "../../../../../assets/svg/send.svg";
import useMainContext from "../../../context/useMainContext";
import Button from "../../Button";
import { SendIcon } from "../../../../../assets/svg";
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
  const [showMensajeSend, setShowMensajeSend] = useState(false)
  const [showMensajeErr, setShowMensajeErr] = useState(false)
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
  const verifyBeforeSend = () => {
    if (!name || !email || !userTextWrote) {
      setname("")
      setShowMensajeSend(false)
      setShowMensajeErr(true)
      return;
    }
    setname("")
    setemail("")
    setuserTextWrote("")
    setShowMensajeErr(false)
    setShowMensajeSend(true)
    sendText(formatToSend);
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
    <div className="bg-transparent  flex lg:space-x-2 flex-col lg:flex-row rounded-[11px] w-full items-center mt-10">
      <div className="flex flex-col justify-start items-start space-y-2 w-full ">
        {dataContact.map((e) => {
          return (
            <div className="flex justify-center items-center ">
              <div className="w-12 h-12 mx-2">
                <img src={e.icon} alt="" />
              </div>
              <div className="altura-letras ">
                <div className="font-bold text-[26px] text-[#66ff00]">
                  {e.title}
                </div>
                <div className="font-light text-slate-200 text-[19px] transition-all ">
                  <a href={`${e.href + e.inf}`}>{e.inf}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative w-full flex justify-center lg:w-[1550px]">
        <div className="pt-10 space-y-2  sm:space-y-2 w-full lg:w-11/12 flex flex-col relative overflow-x-hidden overflow-y-auto items-center justify-center">
          <div className="flex flex-col space-y-2 sm:space-y-2 w-full">
            <div className="border-[1px] flex-col input-contact w-full">
              <p className="text-[13px] target-p-contact blockAllSelect">
                Name
              </p>
              <input
                onChange={(e) => {
                  setname(e.target.value);
                }}
                value={name}
                className="input-sender input-s-s bg-transparent w-full h-full  "
                type="text"
              />
            </div>
            <div className="border-[1px] flex-col input-contact w-full">
              <p className="text-[13px] target-p-contact blockAllSelect">
                Email
              </p>
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                value={email}
                type="email"
                className="input-sender input-s-s bg-transparent w-full h-full "
              />
            </div>
          </div>
          {/* <div className="border-[1px] flex-col w-full input-contact ">
            <p className="text-[13px] target-p-contact blockAllSelect">
              Subject
            </p>
            <input
              onChange={(e) => {
                setsubject(e.target.value);
              }}
              className="input-sender input-s-s bg-transparent w-full h-full "
              type="text"
            />
          </div> */}
          <div className="border-[1px] flex-col w-full input-contact ">
            <p className="text-[13px] target-p-contact blockAllSelect">
              {dataText.extras.footer.input}
            </p>
            <textarea
              id="textareOfFooter"
              className="input-sender input-s-s bg-transparent w-full h-[140px] "
              name=""
              onChange={(e) => {
                setuserTextWrote(e.target.value);
              }}
              value={userTextWrote}
            />
          </div>
          {showMensajeSend && <div className="text-green-500 border-[1px] border-green-500 w-full text-center rounded-[8px]">Send data success</div>}
          {showMensajeErr && <div className="text-red-300 border-[1px] border-red-500 w-full text-center rounded-[8px]">Incomplete data</div>}
          
          <div className="w-full flex items-end justify-end ">
            <Button
              svg={true}
              icon={SVGsend}
              text={"Send"}
              onClick={() => verifyBeforeSend()}
              className="capitalize right-0 active:text-green-400"
            >
              <SendIcon></SendIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
