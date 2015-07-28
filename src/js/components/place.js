import React from 'react';

var PlaceView = React.createClass({
    displayName: 'PlaceView',
    propTypes: {
        entryId: React.PropTypes.number
    },

    render() {
        return (
            <div className="place-view">
                <div className="place-img">
                </div>
            </div>
        );
    }
});

export default PlaceView;
