import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvoider } from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvoider>
      <App />
    </ContextProvoider>
  </React.StrictMode>,
  document.getElementById("root")
);
