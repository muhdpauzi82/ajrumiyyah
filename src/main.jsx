import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { registerSW } from "virtual:pwa-register";

import "./index.css";
import "./ui/ads.css";
import "./ui/theme/index.css";

import App from "./App.jsx";


/* =========================================================
   PWA SERVICE WORKER
   Auto update apabila versi baharu telah dideploy
========================================================= */

registerSW({
  immediate: true,
});


/* =========================================================
   REACT
========================================================= */

createRoot(
  document.getElementById("root")
).render(
  <StrictMode>
    <App />
  </StrictMode>
);