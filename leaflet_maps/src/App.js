import { Map, TileLayer } from 'react-leaflet';
import './App.css';


function App() {
  return (
    <div className="App">
      <Map center={[52.00, -21.00]} zoom={7}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          //url="http://10.92.152.30:8080/tile/{z}/{x}/{y}.png"
        />
      </Map>
    </div>
  );
}


export default App;
