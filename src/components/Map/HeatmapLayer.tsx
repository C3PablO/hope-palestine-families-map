import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";

interface Props {
  points: [number, number][];
}

export default function HeatmapLayer({ points }: Props) {
  const map = useMap();

  useEffect(() => {
    const heat = L.heatLayer(
      points.map(([lat, lng]) => [lat, lng, 1]),
      {
        radius: 35,
        blur: 30,
        maxZoom: 14,
        minOpacity: 0.4,
        gradient: {
          0.2: "#a8d5a2",
          0.4: "#5B8648",
          0.6: "#3d6a2e",
          0.8: "#2a4f1e",
          1.0: "#1a3510",
        },
      }
    );
    heat.addTo(map);
    return () => {
      map.removeLayer(heat);
    };
  }, [map, points]);

  return null;
}
