import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import UserDetail from "../pages/UserDetail/UserDetail";

// 1. Crear nuestro router, que no mas que una lista de rutas que tendra nuestra aplicación

// 2. Definir las rutas que tendra la aplicación. Una ruta es un objeto con minimo una propiedad llamada "element" (para rutas layout), normalmente tenemos dos propiedades: path y element

// element: es el JSX que se desea renderizar en el path especificado.
// path: es la descripción de la ruta de interes

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    // Las rutas pueden tener segmentos dinamicos, es decir, partes que pueden cambiar pero que no afecta que haga coincidencia.
    path: "/user/:userId",
    element: <UserDetail />,
  },
]);
