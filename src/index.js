import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // come si importa il css
import App from "./App"; //importiamo App - componente react
// import reportWebVitals from './reportWebVitals'; 2) togliavo la riga che porta all'interno lo struento per misurare le prestazioni della nostra app

// react sta creando una "radice" dentro il div con id root all'interno dell'idex.html, ovvero il punt di partenza della nostra app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> 3) si toglie perché andrà a creare clonfitti più avanti
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); 1) per misurare le prestazioni della nostra app
