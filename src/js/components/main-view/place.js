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
                <Link to="place" params={{id: this.props.id}} className="place-link">
                    <div className="place">
                        <header className="place-name">{this.props.name}</header>
                        <img className="place-img" src={this.props.imageUrl || ''} />
                        <div>
                            <p className="description">{this.props.description || 'pusto'}</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
});

export default Place;
