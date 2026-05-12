import { useEffect, useState } from "react";
import api from "../services/api";

function Facts() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const response = await api.get("/v2/facts");
        setFacts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFacts();
  }, []);

  return (
    <div>
      <h2>Dog Facts</h2>
{facts && facts.map((fact) => (
<p key={fact.id}>
  {fact.attributes?.body}
</p>
))}
    </div>
  );
}

export default Facts;