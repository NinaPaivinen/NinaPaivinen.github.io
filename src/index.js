
import React from "react";
import { createRoot } from "react-dom/client";

import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker.js";
const container = document.getElementById("root");
const root = createRoot(container);

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
  

serviceWorker.unregister();


