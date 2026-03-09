import { useState, type KeyboardEvent } from "react";
import { useMapEvents } from "react-leaflet";
import "./ZoomDisplay.css";

export default function ZoomDisplay() {
  const [zoom, setZoom] = useState<number | null>(null);
  const [input, setInput] = useState("");

  const map = useMapEvents({
    zoomend: () => {
      const z = map.getZoom();
      setZoom(z);
      setInput(String(z));
    },
  });

  if (zoom === null) {
    setTimeout(() => {
      const z = map.getZoom();
      setZoom(z);
      setInput(String(z));
    }, 0);
    return null;
  }

  const applyZoom = () => {
    const val = parseFloat(input);
    if (!isNaN(val) && val >= 1 && val <= 20) {
      map.setZoom(val);
    }
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") applyZoom();
  };

  return (
    <div className="zoom-display">
      <label>
        Zoom:
        <input
          className="zoom-display__input"
          type="number"
          step="0.5"
          min="1"
          max="20"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          onBlur={applyZoom}
        />
      </label>
    </div>
  );
}
