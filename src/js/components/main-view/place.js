import React from 'react';
import {Link} from 'react-router';

var Place = React.createClass({
    displayName: 'Place',

    propTypes: {
        id: React.PropTypes.number,
        imageUrl: React.PropTypes.string,
        description: React.PropTypes.string
    },

    render() {
        return (
            <div className="place-wrapper">
                <Link to="place" params={{id: this.props.id}}>
                    <div className="place">
                        <img className="place-img" src={this.props.imageUrl} />
                        <div>
                            <p className="description">{this.props.description}</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
});

export default Place;
