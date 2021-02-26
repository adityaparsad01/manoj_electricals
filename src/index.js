import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Navbar from "./Navbar";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
  rootElement
);
