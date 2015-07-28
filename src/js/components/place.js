import React from 'react';
import placesStore from '../utils/places';

var PlaceView = React.createClass({
    displayName: 'PlaceView',
    propTypes: {
        params: React.PropTypes.object
    },
    getInitialState() {
        return {
            place: null
        };
    },

    componentDidMount() {
        this.fetchData();
    },

    fetchData() {
        var id = this.props.params.id;
        placesStore.fetchOne(id, () => {
            var place = placesStore.getOne();
            console.log(place);
            this.setState({place: place});
        });
    },

    render() {
        var viewData;
        if (this.state.place) {
            var imgSrc = 'http://pdziok.vgnett.no/enably.ng-api/upload/' + this.state.place.image.filename;

            viewData = (<div className="pure-g">
                    <div className="pure-u-1-5 col"></div>
                    <div className="pure-u-2-5 col">
                        <div className="place-view">
                            <div className="place-img">
                                <img src = {imgSrc} />
                            </div>
                            <div className="place-description">
                                <p>{this.state.place.name}</p>
                                <br />
                                <p>{this.state.place.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1-5 col map">
                        <div className="place-likes">
                            <div className="ratings">
                                <div className="rating pluses">
                                    <img src="images/happy.png"/>
                                    <span className="rating-value">{this.state.place.rating.pluses}</span>
                                </div>
                                <div className="rating minuses">
                                    <img src="images/sad.png"/>
                                    <span className="rating-value">{this.state.place.rating.minuses}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1-5 col"></div>
                </div>);
        } else {
            viewData = <div></div>;
        }

        return viewData;
    }
});

export default PlaceView;
