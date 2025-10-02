

import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  {/* import.meta.env.BASE_URL is automatically set by Vite depending on your vite.config.js base setting.
      For GitHub Pages build → it becomes /Ashfaquls-Portfolio/
      For container build (npm run build -- --base=/) → it becomes / */}

    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
