import type { Family } from "../../types/family";

interface Props {
  family: Family;
  index: number;
}

export default function FamilyListItem({ family, index }: Props) {
  return (
    <li className="family-list__item">
      <span className="family-list__dot">{index}</span>
      <div>
        <span className="family-list__name">{family.name}</span>
        {/* <span className="family-list__location">{family.location}</span> */}
      </div>
    </li>
  );
}
