import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Facts from "./pages/Facts";
import Breeds from "./pages/Breeds";
import Groups from "./pages/Groups";
import "./App.css";

function App() {
  return (
    <Router>
      <div>

        <header className="header">
          <h1>Dog API App</h1>
        </header>

        <nav className="navbar">
          <NavLink to="/facts" className="nav-link">Facts</NavLink>
          <NavLink to="/breeds" className="nav-link">Breeds</NavLink>
          <NavLink to="/groups" className="nav-link">Groups</NavLink>
        </nav>

          <main className="main">
          <Routes>
            <Route path="/" element={<Facts />} />
            <Route path="/facts" element={<Facts />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/groups" element={<Groups />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;