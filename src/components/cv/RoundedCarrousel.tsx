import React from "react";
export default function RoundedCarrousel() {
  var images = [
    "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/k_fhm489.png",
    "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/sass-logo-7702_sxv52z.png",
    "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/typescript_original_logo_icon_146317_p5xnyi.png",
    "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845292/pngegg_pnsolw.png",
     "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845292/javascript-39404_yvaz5m.png",
     "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/pngwing.com_h8ucbi.png",
     "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667862619/git_original_wordmark_logo_icon_146510_scimhx.png", 
     "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667862619/github_original_wordmark_logo_icon_146506_jek88d.png"

  ]
  return (
    <div className="carrousel ">
      {images.map((e, ind)=> { 
        return (<img src={e} className="card" key={'rounded'+ ind} id={`c${ind}`}></img>)
      })}
    </div>
  );
}
