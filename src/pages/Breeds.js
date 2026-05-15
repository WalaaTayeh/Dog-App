import { useEffect, useState } from "react";
import api from "../services/api";
import BreedCard from "../components/BreedCard";

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
<div className="grid">
  {breeds.map((breed) => (
    <BreedCard key={breed.id} breed={breed} />
  ))}
</div>
    </div>
  );
}

export default Breeds;