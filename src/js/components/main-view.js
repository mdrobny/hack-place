import React from 'react';
import PlaceList from './main-view/place-list';

var MainView = React.createClass({
    displayName: 'MainView',

    render() {
        return (
            <div>
                <div className="pure-g">
                    <div className="pure-u-6-24">
                        <PlaceList />
                    </div>
                    <div className="pure-u-12-24">
                        <div><p>Here goes content</p></div>
                    </div>
                    <div className="pure-u-6-24">
                        <PlaceList />
                    </div>
                </div>
            </div>
        );
    }
});

export default MainView;
