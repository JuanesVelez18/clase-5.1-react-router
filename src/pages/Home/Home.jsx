import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  // En React router existen varias forma de hacer redirección del usuario, y se dividen en dos grandes grupos: Visual y Programaticamente.

  //VISUALES
  // 1. Link: es un componente de la libreria de react-router-dom crear un enlace que permite redireccionar al usuario sin recargar la pagina. El path de la ruta a la que se desea redigir de debe pasar en su prop "to".

  return (
    <>
      <Navbar />
      <h1>Home</h1>

      {/* <a href="/contact">Go to Contact</a> */}
      <Link to="/contact">Go to Contact</Link>
    </>
  );
};

export default Home;
