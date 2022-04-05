import {
  GlobalSearch,
  Home,
  Items,
  Locations,
  Monsters,
  Notes,
  NPCs,
  Quests,
  Shops,
  Timeline,
  Worlds,
} from "./pages";
import { NavBar } from "./components";

import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="viewport">
        <GlobalSearch />
        <div className="application">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/monsters" element={<Monsters />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/npcs" element={<NPCs />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/worlds" element={<Worlds />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
