import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./styles/main.scss";
import "materialize-css/dist/css/materialize.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
