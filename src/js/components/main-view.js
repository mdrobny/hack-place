import React from 'react';
import Map from './home/map';

var MainView = React.createClass({
    displayName: 'MainView',

    render() {
        return (
            <div>
                <div className="pure-g">
                    <div className="pure-u-6-24 col">
                        <PlaceList />
                    </div>
                    <div className="pure-u-12-24 col map">
                        <Map />
                    </div>
                    <div className="pure-u-6-24 col">
                        <PlaceList />
                    </div>
                </div>
            </div>
        );
    }
});

export default MainView;
