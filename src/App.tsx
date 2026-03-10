import { useState, useCallback } from "react";
import PalestineMap from "./components/Map/PalestineMap";
import FamilyList from "./components/FamilyList/FamilyList";
import families from "./data/families.json";
import type { Family } from "./types/family";
import "./App.css";

const data = families as Family[];

export default function App() {
  const [selectedFamily, setSelectedFamily] = useState<Family | null>(null);
  const [flyTarget, setFlyTarget] = useState<Family | null>(null);

  const handleListSelect = useCallback((family: Family) => {
    setSelectedFamily(family);
    setFlyTarget(family);
  }, []);

  const handleMapSelect = useCallback((family: Family) => {
    setSelectedFamily(family);
  }, []);

  return (
    <div className="app">
      <PalestineMap families={data} selectedFamily={selectedFamily} flyTarget={flyTarget} onSelect={handleMapSelect} />
      <FamilyList families={data} onSelect={handleListSelect} selectedId={selectedFamily?.id ?? null} />
    </div>
  );
}
