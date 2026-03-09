import PalestineMap from "./components/Map/PalestineMap";
import FamilyList from "./components/FamilyList/FamilyList";
import families from "./data/families.json";
import type { Family } from "./types/family";
import "./App.css";

const data = families as Family[];

export default function App() {
  return (
    <div className="app">
      <PalestineMap families={data} />
      <FamilyList families={data} />
    </div>
  );
}
