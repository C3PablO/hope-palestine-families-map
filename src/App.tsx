import PalestineMap from "./components/Map/PalestineMap";
import families from "./data/families.json";
import "./App.css";

const points: [number, number][] = families.map((f) => [f.lat, f.lng]);

export default function App() {
  return (
    <div className="app">
      <PalestineMap points={points} />
    </div>
  );
}
