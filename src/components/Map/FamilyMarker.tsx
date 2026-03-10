import { Marker, Popup } from "react-leaflet";
import { createNumberedIcon } from "./markerIcon";
import type { Family } from "../../types/family";

interface Props {
  family: Family;
  index: number;
  selected: boolean;
  onSelect: (family: Family) => void;
}

export default function FamilyMarker({ family, index, selected, onSelect }: Props) {
  return (
    <Marker
      position={[family.lat, family.lng]}
      icon={createNumberedIcon(index, selected)}
      eventHandlers={{ click: () => onSelect(family) }}
    >
      <Popup>
        <strong>{family.name}</strong>
      </Popup>
    </Marker>
  );
}
