import "leaflet/dist/leaflet.css";
import { type LatLngBoundsExpression } from "leaflet";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import HeatmapLayer from "./HeatmapLayer";
import borders from "../../data/palestine-borders.json";
import "./PalestineMap.css";

interface Props {
  points: [number, number][];
}

const SHOW_BORDERS = false;

const borderStyle = {
  color: "#5B8648",
  weight: 3,
  fillColor: "#5B8648",
  fillOpacity: 0.08,
};

function getBounds(points: [number, number][]): LatLngBoundsExpression {
  const lats = points.map(([lat]) => lat);
  const lngs = points.map(([, lng]) => lng);
  return [
    [Math.min(...lats), Math.min(...lngs)],
    [Math.max(...lats), Math.max(...lngs)],
  ];
}

export default function PalestineMap({ points }: Props) {
  const bounds = getBounds(points);

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
      <HeatmapLayer points={points} />
    </MapContainer>
  );
}
