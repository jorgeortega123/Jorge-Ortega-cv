import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/index.scss";
import "./styles/main.css";
import "./styles/header.scss";
import "./styles/skill.scss";
import "./styles/console.scss";
import "./styles/contact.scss";
import "./styles/navbar.scss";
import CvMain from "./components/index.jsx";
import MainContextComponent from "./components/context/MainContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainContextComponent>
        <CvMain />
    </MainContextComponent>
  </React.StrictMode>
);
