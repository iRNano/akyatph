import React,{Component} from 'react';
import './App.css';
import L from 'leaflet';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import greenIcon from './assets/icons/leaf-green.png'
import redIcon from './assets/icons/leaf-red.png'
import orangeIcon from './assets/icons/leaf-orange.png'
import shadowIcon from './assets/icons/leaf-shadow.png'

  
var greenMarker = L.icon({
  iconUrl: greenIcon,
  shadowUrl: shadowIcon,

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


class App extends Component {

  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render(){
    const position= [this.state.lat, this.state.lng];
    return (
      <Map id="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={greenMarker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
  
}

export default App;
