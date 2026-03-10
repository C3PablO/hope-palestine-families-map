import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import FamilyMarker from "./FamilyMarker";
import ZoomDisplay from "./ZoomDisplay";
import type { Family } from "../../types/family";
import borders from "../../data/palestine-borders.json";
import "./PalestineMap.css";

interface Props {
  families: Family[];
}

const SHOW_BORDERS = false;

const borderStyle = {
  color: "#5B8648",
  weight: 3,
  fillColor: "#5B8648",
  fillOpacity: 0.08,
};

export default function PalestineMap({ families }: Props) {
  return (
    <MapContainer
      className="palestine-map"
      center={[31.45, 34.42]}
      zoom={11.3}
      zoomSnap={0.1}
      zoomDelta={0.5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {SHOW_BORDERS && <GeoJSON data={borders as GeoJSON.FeatureCollection} style={borderStyle} />}
      <ZoomDisplay />
      {families.map((f, i) => (
        <FamilyMarker key={f.id} family={f} index={i + 1} />
      ))}
    </MapContainer>
  );
}
