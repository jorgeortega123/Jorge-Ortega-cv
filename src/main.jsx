import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.scss";
import "./components/rounded_carrousel/carrousel.scss";
import CvMain from "./components/index.jsx";
import MainContextComponent from "./components/context/MainContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainContextComponent>
        <CvMain />
    </MainContextComponent>
  </React.StrictMode>
);
