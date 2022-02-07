import { Map, TileLayer, withLeaflet } from 'react-leaflet';
import PrintControl from 'react-leaflet-easyprint';

import './App.css';

//const PrintControl = withLeaflet(PrintControlDefault);

function App() {
  return (
    <div className="App">
      <Map center={[52.00, -21.00]} zoom={7}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url="http://10.92.152.30:8080/tile/{z}/{x}/{y}.png"
        />
      
        <PrintControl ref={(ref) => { this.printControl = ref; }} position="topleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} />
        <PrintControl position="topleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} title="Export as PNG" exportOnly />
      </Map>
    </div>
  );
}

export default App;
