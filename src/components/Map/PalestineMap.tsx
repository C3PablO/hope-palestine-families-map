import "leaflet/dist/leaflet.css";
import { type LatLngBoundsExpression } from "leaflet";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import { useEffect } from "react";
import FamilyMarker from "./FamilyMarker";
import type { Family } from "../../types/family";
import borders from "../../data/palestine-borders.json";
import "./PalestineMap.css";

interface Props {
  families: Family[];
  selectedFamily: Family | null;
  flyTarget: Family | null;
  onSelect: (family: Family) => void;
}

const SHOW_BORDERS = false;

const borderStyle = {
  color: "#5B8648",
  weight: 3,
  fillColor: "#5B8648",
  fillOpacity: 0.08,
};

function getFamilyBounds(families: Family[]): LatLngBoundsExpression {
  const lats = families.map((f) => f.lat);
  const lngs = families.map((f) => f.lng);
  return [
    [Math.min(...lats), Math.min(...lngs)],
    [Math.max(...lats), Math.max(...lngs)],
  ];
}

function FlyTo({ family }: { family: Family | null }) {
  const map = useMap();
  useEffect(() => {
    if (family) {
      map.flyTo([family.lat, family.lng], 14, { duration: 0.8 });
    }
  }, [family, map]);
  return null;
}

export default function PalestineMap({ families, selectedFamily, flyTarget, onSelect }: Props) {
  const bounds = getFamilyBounds(families);

  return (
    <MapContainer
      className="palestine-map"
      bounds={bounds}
      boundsOptions={{ padding: [60, 60] }}
      zoomSnap={0.5}
      zoomDelta={0.5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {SHOW_BORDERS && <GeoJSON data={borders as GeoJSON.FeatureCollection} style={borderStyle} />}
      <FlyTo family={flyTarget} />
      {families.map((f, i) => (
        <FamilyMarker key={f.id} family={f} index={i + 1} selected={selectedFamily?.id === f.id} onSelect={onSelect} />
      ))}
    </MapContainer>
  );
}
