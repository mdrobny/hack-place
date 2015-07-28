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
                        <img className="place-img" src={this.props.imageUrl || 'http://img.wiocha.pl/images/d/f/df3cfb96adee2b7b56abe326b2c0ea3f.jpg'} />
                        <div className="ratings">
                            <div className="rating pluses">
                                <img src="images/happy.png"/>
                                <span className="rating-value">{this.props.rating.pluses}</span>
                            </div>
                            <div className="rating minuses">
                                <img src="images/sad.png"/>
                                <span className="rating-value">{this.props.rating.minuses}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
});

export default Place;
