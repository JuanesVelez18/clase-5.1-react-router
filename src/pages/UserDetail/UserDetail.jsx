import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const getCharacterById = async (id) => {
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const UserDetail = () => {
  // Para acceder a la información que viene a traves de los segmentos dinamicos del path de la ruta existe un hook llamada "useParams". Al ejecutarse este hook se obtiene un objeto donde sus claves son los nombres dado al segmento dinamico y su valor es la información especifica que trae.

  // El nombre del parametro (segmento dinamico) debe ser IGUAL al que se puso en la configuración del router (texto despues de los dos puntos).

  const { userId } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const loadCharacter = async () => {
      const characterInfo = await getCharacterById(userId);
      setCharacter(characterInfo);
    };

    const userIdAsNumber = Number(userId);

    if (!isNaN(userIdAsNumber) && userIdAsNumber >= 1 && userIdAsNumber <= 126)
      loadCharacter();

    // Debido a que userId puede cambiar es necesario agregarlo al array de dependecias.
  }, [userId]);

  return (
    <>
      <h1>User Detail</h1>

      {!character ? (
        <p>Loading character...</p>
      ) : (
        <div>
          <div>
            <img src={character.image} />
          </div>
          <h2>{character.name}</h2>

          <Link to={`/user/${Number(userId) + 1}`}>Next User</Link>
        </div>
      )}
    </>
  );
};

export default UserDetail;
