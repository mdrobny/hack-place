import React from 'react';

var PlaceView = React.createClass({
    displayName: 'PlaceView',
    propTypes: {
        entryId: React.PropTypes.number
    },

    render() {
        return (
            <div className="pure-g">
                <div className="pure-u-1-5 col"></div>
                <div className="pure-u-2-5 col">
                    <div className="place-view">
                        <div className="place-img">
                            <img src="http://g.wieszjak.pl/p/_wspolne/pliki_infornext/8000/8016.jpg" />
                        </div>
                        <div className="place-description">
                            <p>asdf asdf asdf asdfd asf asdf asdfdsa</p>
                            <p>asdf asdf asdf asdfd asf asdf asdfdsa asdfadsf sdafsz dfxc</p>
                        </div>
                    </div>
                </div>
                <div className="pure-u-1-5 col map">
                    <div className="place-likes">
                        <div>+5</div>
                        <div>-75</div>
                    </div>
                </div>
                <div className="pure-u-1-5 col"></div>
            </div>
        );
    }
});

export default PlaceView;
