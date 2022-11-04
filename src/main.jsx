import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/cv/index.scss";
import "./components/cv/background.scss";
import CvMain from "./components/cv";
import { ParallaxProvider } from "react-scroll-parallax";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ParallaxProvider>
        <CvMain />
        </ParallaxProvider>
  </React.StrictMode>
);
