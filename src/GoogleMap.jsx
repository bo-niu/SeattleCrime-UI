import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.jsx';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends React.Component {
  static async fetchData(match, search, showError) {
    return null;
  }

  constructor() {
    super();
  }

  render() {
    const { crimes } = this.props;
    console.log('crimes in google map:');
    console.log(crimes);
    // const crimesArray = Array.from(crimes.filtrateCrimes);
    const multipleMarkers = (
      crimes.map(crime => (
        <Marker
          lat={crime.Latitude}
          lng={crime.Longitude}
          name="C"
          color="blue"
        />
      ))
    );
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD0rYzImyIdiTBNNNLF_8bN1mruuoKhaMY', language: 'en' }}
          defaultCenter={{
            lat: 47.62,
            lng: -122.33,
          }}
          defaultZoom={11}
        >
          {multipleMarkers}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;