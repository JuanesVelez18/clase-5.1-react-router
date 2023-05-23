import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// Cuando el archivo se llama "index" no es necesario agregarlo a la ruta de importación porque por defecto es al que se accede
import { router } from "./router";

import "./index.css";

// 3. Mediante el componente especial "RouterProvider" le decimos a la aplicación de React que router utilizara.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
