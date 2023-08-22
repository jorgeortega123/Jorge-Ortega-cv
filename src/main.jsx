import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/index_0.scss";
import "./styles/main.css";
import "./styles/header.scss";
import "./styles/skill.css";
import "./styles/console.css";
import "./styles/contact.scss";
import "./styles/navbar.css";
import "./styles/social.css";
import "./styles/services.css";
import "./styles/modal.css";
import "./styles/experience.css";
import "./styles/stars.css";
import CvMain from "./index.jsx";
import MainContextComponent from "./context/MainContext";
import { ImageContextProvider } from "./context/ImagesContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainContextComponent>
      <ImageContextProvider>
        <CvMain />
      </ImageContextProvider>
    </MainContextComponent>
  </React.StrictMode>
);
