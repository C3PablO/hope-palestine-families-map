import { Marker, Popup } from "react-leaflet";
import { createNumberedIcon } from "./markerIcon";
import type { Family } from "../../types/family";

interface Props {
  family: Family;
  index: number;
}

export default function FamilyMarker({ family, index }: Props) {
  return (
    <Marker position={[family.lat, family.lng]} icon={createNumberedIcon(index)}>
      <Popup>
        <strong>{family.name}</strong>
        <br />
        {family.location}
      </Popup>
    </Marker>
  );
}
