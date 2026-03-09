import FamilyListItem from "./FamilyListItem";
import type { Family } from "../../types/family";
import "./FamilyList.css";

interface Props {
  families: Family[];
}

export default function FamilyList({ families }: Props) {
  return (
    <aside className="family-list">
      <ul className="family-list__items">
        {families.map((f, i) => (
          <FamilyListItem key={f.id} family={f} index={i + 1} />
        ))}
      </ul>
    </aside>
  );
}
