import React from 'react';
import placesSource from '../../utils/places';

import Place from './place';


var PlaceList = React.createClass({
    displayName: 'PlaceList',

    getInitialState() {
        return {
            places: placesSource.getData()
        };
    },

    render() {
        return (
            <div className="list">
                {this.state.places.map((place) =>
                    <Place {...place} />
                )}
            </div>
        );
    }
});

export default PlaceList;
