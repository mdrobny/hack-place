import React from 'react';

var Place = React.createClass({
    displayName: 'Place',

    propTypes: {
        imageUrl: React.PropTypes.string,
        description: React.PropTypes.string
    },

    render() {
        return (
            <div className="place-wrapper">
                <div className="place">
                    <img className="place-img" src={this.props.imageUrl} />
                    <div>
                        <p className="description">{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
});

export default Place;
