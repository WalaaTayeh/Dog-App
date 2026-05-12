import { useEffect, useState } from "react";
import api from "../services/api";

function Groups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const response = await api.get("/v2/groups");
      setGroups(response.data.data);
    };

    fetchGroups();
  }, []);

  return (
    <div>
      <h2>Groups</h2>
      {groups.map((group) => (
        <p key={group.id}>{group.attributes.name}</p>
      ))}
    </div>
  );
}

export default Groups;