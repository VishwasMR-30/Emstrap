import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Polyline, Tooltip, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const makeIcon = (emoji) =>
  L.divIcon({
    html: `<div style="font-size:26px;line-height:1;filter:drop-shadow(0 0 6px rgba(0,0,0,.9))">${emoji}</div>`,
    className: '',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  })

const icons = {
  incident: makeIcon('🆘'),
  ambulance: makeIcon('🚑'),
  police: makeIcon('👮'),
  hospital: makeIcon('🏥'),
  fire: makeIcon('🚒'),
}

// Zoom the map so every marker is visible
function FitAll({ points }) {
  const map = useMap()
  useEffect(() => {
    map.fitBounds(points, { padding: [60, 60], maxZoom: 15 })
  }, [points[1][0], points[1][1]])
  return null
}

function Pin({ position, type, label }) {
  return (
    <Marker position={position} icon={icons[type]}>
      <Tooltip permanent direction="top" offset={[0, -14]}>{label}</Tooltip>
    </Marker>
  )
}

export default function LiveMap({ pickup, hospital, ambulance, police, fire, route }) {
  return (
    <div className="isolate rounded-2xl overflow-hidden border border-line">
      {/* Makes the free OpenStreetMap tiles look dark to match the theme */}
      <style>{`.dark-tiles { filter: invert(1) hue-rotate(180deg) brightness(0.95) contrast(0.9); }`}</style>
      <MapContainer
        center={pickup}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: 420, width: '100%', background: '#0b1220' }}
      >
        <TileLayer
          className="dark-tiles"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <FitAll points={[...route, police, fire]} />
        <Polyline positions={route} pathOptions={{ color: '#22d3ee', weight: 3, dashArray: '8 8' }} />
        <Pin position={pickup} type="incident" label="EMERGENCY / PICKUP" />
        <Pin position={hospital} type="hospital" label="HOSPITAL (DROP)" />
        <Pin position={police} type="police" label="Police" />
        <Pin position={fire} type="fire" label="Fire" />
        <Pin position={ambulance} type="ambulance" label="AMBULANCE A" />
      </MapContainer>
    </div>
  )
}
