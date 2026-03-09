# Palestine Family Map

## Tech Stack
- React + TypeScript via Vite
- Leaflet + react-leaflet for the map
- CartoDB Positron tiles (no API key)
- Plain CSS with BEM naming
- Static JSON for family data

## Project Structure
```
src/
  main.tsx                          # Entry point
  App.tsx / App.css                 # Grid layout (map | sidebar)
  index.css                         # Full-viewport reset
  types/family.ts                   # Family interface
  data/
    families.json                   # Family pin data (name, lat, lng, location)
    palestine-borders.json          # GeoJSON borders (currently disabled via SHOW_BORDERS flag)
  components/
    Map/
      PalestineMap.tsx / .css       # MapContainer + TileLayer + markers
      FamilyMarker.tsx              # Single numbered marker with popup
      markerIcon.ts                 # Leaflet DivIcon factory (green #5B8648)
      ZoomDisplay.tsx / .css        # Editable zoom level control
    FamilyList/
      FamilyList.tsx / .css         # Sidebar list
      FamilyListItem.tsx            # Single list row
```

## Key Conventions
- Brand color: `#5B8648` (green) — used for pins, sidebar dots, and borders
- Font: Libre Baskerville for family names in sidebar
- Markers are 20x20 DivIcons with 11px font, no image assets
- Palestine GeoJSON borders exist but are disabled (`SHOW_BORDERS = false` in PalestineMap.tsx)
- Map supports fractional zoom (zoomSnap/zoomDelta 0.5), default zoom 11.5
- All family data is in Spanish (locations)
- No state management — data is static, passed via props

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npx tsc --noEmit` — type-check
