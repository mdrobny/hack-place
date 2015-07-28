import React from 'react';

var PlaceView = React.createClass({
    displayName: 'PlaceView',
    propTypes: {
        entryId: React.PropTypes.number
    },

    render() {
        return (
            <div className="place-wrapper">
                <div className="place-view">
                    <div className="place-img">
                        <img src="http://g.wieszjak.pl/p/_wspolne/pliki_infornext/8000/8016.jpg" />
                    </div>
                    <div>
                        <p>asdf asdf asdf asdfd asf asdf asdfdsa</p>
                        <p>asdf asdf asdf asdfd asf asdf asdfdsa asdfadsf sdafsz dfxc</p>
                    </div>
                </div>
            </div>
        );
    }
});

export default PlaceView;
