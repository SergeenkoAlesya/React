import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

import "./index.css";
import MainLayout from "./commonComponents/MainLayout/MainLayout";

const rootDiv = document.getElementById("root");
const root = ReactDOM.createRoot(rootDiv);
root.render(
  <BrowserRouter>
    <MainLayout>
      <Router />
    </MainLayout>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
