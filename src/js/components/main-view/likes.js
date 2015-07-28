import React from 'react';

var Likes = React.createClass({
    displayName: 'Likes',

    propTypes: {
        imageUrl: React.PropTypes.string,
        description: React.PropTypes.string
    },

    render() {
        return (
            <div className="place-likes">
                <div>
                    <span>+5</span>
                </div>
                <div>
                    <span>-7</span>
                </div>
            </div>
        );
    }
});

export default Likes;
