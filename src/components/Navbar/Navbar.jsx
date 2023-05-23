import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // VISUALES
  // 2. NavLink: Funciona exactamente igual que Link con caracteristica adicional de que te permite saber si la ruta esta activa o no y asi dar estilos y clases especificas. En pocas palabras, NavLink te permite saber cuando esta activo esa ruta en particular para dar estilos.

  // El NavLink en sus props "className" y "style" permite pasar una función que recibe un booleano que indica si el usuario esta actualmente esa ruta para calcular la clase/estilo deseado.

  const getClass = ({ isActive }) => {
    if (isActive) return "navbar__link navbar__link--active";
    else return "navbar__link";
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/" className={getClass}>
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/contact" className={getClass}>
            Contact
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/about" className={getClass}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
