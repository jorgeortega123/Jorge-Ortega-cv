import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/cv/index.scss";
import "./components/cv/rounded_carrousel/carrousel.scss";
import "./components/cv/svg.scss";
import "./output.css"
import CvMain from "./components/cv";
import { ParallaxProvider } from "react-scroll-parallax";
import MainContextComponent from "./components/cv/context/MainContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainContextComponent>
      <ParallaxProvider>
        <CvMain />
      </ParallaxProvider>
    </MainContextComponent>
  </React.StrictMode>
);
