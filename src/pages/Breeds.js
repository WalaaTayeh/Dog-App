import { useEffect, useState } from "react";
import api from "../services/api";

function Breeds() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await api.get("/v2/breeds");
      setBreeds(response.data.data);
    };

    fetchBreeds();
  }, []);

  return (
    <div>
      <h2>Breeds</h2>
      {breeds.map((breed) => (
        <p key={breed.id}>{breed.attributes.name}</p>
      ))}
    </div>
  );
}

export default Breeds;