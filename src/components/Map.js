import React from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../configs';
import Marker from './Marker';
import { statesWithCoordinates } from '../utils/statesWithCoordinates';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {
  render() {
    const defaultProps = {
      center: { lat: 37.0902, lng: -95.7129 },
      zoom: 4.4,
    };

    const { statesData } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
                {statesWithCoordinates.map((x) => {
            //find covid data for each state
            const state = statesData.find((y) => y.state === x.abbr);
            return (
              <Marker
                lat={x.lat}
                lng={x.long}
                text={x.name}
                color="red"
                state={state}
                statesData={statesData}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
