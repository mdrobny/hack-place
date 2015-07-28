import React from 'react';
import placesStore from '../../utils/places';

import Place from './place';

var PlaceList = React.createClass({
    displayName: 'PlaceList',

    getInitialState() {
        return {
            places: placesStore.getData()
        };
    },

    componentWillMount() {
        placesStore.fetchData(() => {
            this.setState({places: placesStore.getData()});
        });
    },

    render() {
        console.log(this.state);
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
