import React from 'react'

export default function Footer({staticInf, goToUrl}) {
  return (
    <div
    id="bottomPage"
    className="text-slate-50 px-1 text-[12px] lg:text-[13px] flex flex-col mt-[20px] mb-[20px] bg-[#03224a] justify-center items-center "
  >
    <div className="flex">
      <div className="w-[250px] mb-[40px]">
        <p className="pb-3">Gracias por visitar el portafolio</p>
        <p>
          Si quieres dejar alguna recomendacion, critica o propuesta de
          trabajo puedes mandar un{" "}
          <span
            onClick={() =>
              document?.getElementById("textareOfFooter").focus()
            }
            className="underline cursor-pointer"
          >
            mensaje aqui:
          </span>{" "}
        </p>
      </div>
      <div className="flex-col capitalize ">
        <p className="mb-2">Redes sociales:</p>
        {staticInf.social.map((socialMedia, indexNum) => {
          return (
            <div
              onClick={() => {
                goToUrl(socialMedia.url);
              }}
              className="underline hover:text-green-400 cursor-pointer"
              key={"socialData" + indexNum}
            >
              {socialMedia.name}
              <img src={socialMedia.svg} alt="" />
            </div>
          );
        })}
      </div>
    </div>
    <div className="underline">Jorge Ortega 2022</div>
  </div>
  )
}
