import { useState } from "react";
import FamilyListItem from "./FamilyListItem";
import type { Family } from "../../types/family";
import "./FamilyList.css";

interface Props {
  families: Family[];
  onSelect: (family: Family) => void;
  selectedId: number | null;
}

export default function FamilyList({ families, onSelect, selectedId }: Props) {
  const isMobile = window.matchMedia("(max-width: 1200px)").matches;
  const [collapsed, setCollapsed] = useState(isMobile);

  return (
    <div className="family-list-wrapper">
      <button
        className="family-list__toggle"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? "Show family list" : "Hide family list"}
      >
        {collapsed ? "\u2630" : "\u2715"}
      </button>
      {!collapsed && (
        <aside className="family-list">
          <ul className="family-list__items">
            {families.map((f, i) => (
              <FamilyListItem
                key={f.id}
                family={f}
                index={i + 1}
                selected={f.id === selectedId}
                onSelect={onSelect}
              />
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}
