import L from "leaflet";

export function createNumberedIcon(num: number, selected = false): L.DivIcon {
  const bg = selected ? "#000" : "#5B8648";
  return L.divIcon({
    className: "",
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -12],
    html: `<div style="
      width:20px;height:20px;
      background:${bg};
      border:2px solid #fff;
      border-radius:50%;
      box-shadow:0 2px 6px rgba(0,0,0,.35);
      display:flex;align-items:center;justify-content:center;
      color:#fff;font-weight:700;font-size:11px;
      line-height:1;
    ">${num}</div>`,
  });
}
