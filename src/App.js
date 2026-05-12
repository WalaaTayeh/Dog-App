import { useState } from "react";
import Facts from "./pages/Facts";
import Breeds from "./pages/Breeds";
import Groups from "./pages/Groups";

function App() {
  const [tab, setTab] = useState("facts");

  return (
    <div>
      <h1>Dog API App</h1>

      <button onClick={() => setTab("facts")}>Facts</button>
      <button onClick={() => setTab("breeds")}>Breeds</button>
      <button onClick={() => setTab("groups")}>Groups</button>

      {tab === "facts" && <Facts />}
      {tab === "breeds" && <Breeds />}
      {tab === "groups" && <Groups />}
    </div>
  );
}

export default App;