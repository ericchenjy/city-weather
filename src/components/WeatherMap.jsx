import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import './WeatherMap.scss';


function WeatherMap(props) {
  
  const { mapCoordinates } = props;
  console.log(mapCoordinates)

  return (
    <div className="WeatherMap">
    
    <MapContainer center={[mapCoordinates.lat, mapCoordinates.lon]} zoom={13}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>

     
    </div>
  );
}

export default WeatherMap;
