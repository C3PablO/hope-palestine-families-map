import type { Family } from "../../types/family";

interface Props {
  family: Family;
  index: number;
  selected: boolean;
  onSelect: (family: Family) => void;
}

export default function FamilyListItem({ family, index, selected, onSelect }: Props) {
  return (
    <li
      className={`family-list__item ${selected ? "family-list__item--selected" : ""}`}
      onClick={() => onSelect(family)}
    >
      <span className="family-list__dot">{index}</span>
      <div>
        <span className="family-list__name">{family.name}</span>
      </div>
    </li>
  );
}
