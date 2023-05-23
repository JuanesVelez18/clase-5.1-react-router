import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  // PROGRAMATICAMENTE
  // useNavigate: es un hook que retorna un función que permite redireccionar al usuario a las distintas rutas del proyecto.

  // VISUAL
  // 3. Navigate: es un componente que al RENDERIZARSE hace la redirección hacia el path que apunte tu prop "to". Es casi instantaneo.

  const navigate = useNavigate();
  const [isVisibleNavigate, setIsVisibleNavigate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // El target de un evento submit es siempre el formulario
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Haciendo con la data...");
    console.log(data);

    // A la función se le pasa el path al que se desea redirigir.
    navigate("/");

    // NO SE USA ASI: useNavigate("/")
  };

  return (
    <>
      <Navbar />
      <h1>Contact</h1>

      <form onSubmit={handleSubmit}>
        <p>Dejanos tu correo y mensaje y te contactaremos pronto 😁</p>

        <div>
          <label htmlFor="emailId">Email: </label>
          <input type="email" id="emailId" name="email" />
        </div>

        <div>
          <textarea
            cols="30"
            rows="10"
            placeholder="Deja tu mensaje"
            name="message"
          ></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>

      <button onClick={() => setIsVisibleNavigate(true)}>Go to About</button>
      {isVisibleNavigate && <Navigate to="/about" />}
    </>
  );
};

export default Contact;
