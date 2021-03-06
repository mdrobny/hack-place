import React from 'react';
import {GoogleMaps, Marker, InfoWindow} from 'react-google-maps';
import placesStore from '../../utils/places';

class SimpleClickEvent extends React.Component {

    constructor (...args) {
        super(...args);


        this.state = {
            zoom: 13,
            center: new google.maps.LatLng(50.072962, 19.891600),
            timeoutId: null,
            googleMapsApi: null,
            markers: [
                {
                    position: {
                        lat: 50.072962,
                        lng: 19.891600
                    },
                    key: "STP",
                    content: 'Tutaj jest STP tylko',
                    showInfo: false,
                    animation: 2
                },
                {
                    position: {
                        lat: 50.07243,
                        lng: 19.922
                    },
                    key: "STP2",
                    content: 'A tu co innego',
                    showInfo: false,
                    animation: 2
                }
            ]
        };
    }

    componentWillMount () {
        placesStore.fetchData(() => {
            var places = placesStore.getData();
            places = places.pluses.concat(places.minuses);

            places = places.map(place => {
                place.showInfo = false;
                place.content = place.description;
                return place;
            });

            this.setState({
                markers: places,
                googleMapsApi: google.maps
            });
        });
    }

    onMarkerClick (marker) {
        marker.showInfo = true;
        this.setState(this.state);
    }

    onCloseClick (marker) {
        marker.showInfo = false;
        this.setState(this.state);
    }

    renderMarker(marker, index) {
        var ref = `marker_${index}`;
        return (
            <Marker key={ref} ref={ref}
                    position={marker.position}
                    title={(index+1).toString()}
                    onClick={this.onMarkerClick.bind(this, marker)}>
                {this.renderInfoWindow.call(this, marker, index)}
            </Marker>
        );
    }

    renderInfoWindow (marker, index) {
        var ref = `marker_${index}`;
        return marker.showInfo ?
            <InfoWindow
                key={`${ref}_info_window`} owner={ref}
                content={marker.content}
                onCloseclick={this.onCloseClick.bind(this, marker)}
            /> : null;
    }

    render () {
        const {props, state} = this,
            {googleMapsApi, ...otherProps} = props;

        return (
            <GoogleMaps containerProps={{
                    ...otherProps,
                    style: {
                        height: "100%"
                    }
                }}
                ref="map"
                googleMapsApi={this.state.googleMapsApi}
                zoom={state.zoom} center={state.center} >

                {this.state.markers.map(this.renderMarker, this)}
            </GoogleMaps>
        );
    }

}

export default SimpleClickEvent;