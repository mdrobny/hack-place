import React from 'react';
import placesStore from '../../utils/places';

import Place from './place';

var imgUrl = 'http://pdziok.vgnett.no/enably.ng-api/upload/';

var PlaceList = React.createClass({
    displayName: 'PlaceList',
    propTypes: {
        type: React.PropTypes.string
    },

    getInitialState() {
        var places = placesStore.getData();
        places = places[this.props.type];
        return {
            places: places
        };
    },

    componentWillMount() {
        placesStore.fetchData(() => {
            var places = placesStore.getData();
            places = places[this.props.type];

            places = places.map(place => {
                place.imageUrl = imgUrl + place.image.filename;
                return place;
            });
            this.setState({places: places});
        });
    },

    render() {
        var title = (this.props.type === 'pluses') ? 'Najlepsze' : 'Najgorsze';
        return (
            <div className="places-list">
                <header className="places-list-header">{title}</header>
                {this.state.places.map((place) =>
                    <Place {...place} />
                )}
            </div>
        );
    }
});

export default PlaceList;
