import React from 'react';
import DropzoneComponent from 'react-dropzone-component';

var UploadView = React.createClass({
    displayName: 'UploadView',
    propTypes: {
        coords: React.PropTypes.object,
        location: React.PropTypes.string,
        comment: React.PropTypes.string,
        imageIds: React.PropTypes.arrayOf(React.PropTypes.number)
    },
    getDefaultState() {
        return {
            coords: {},
            location: '',
            comment: '',
            imageIds: []
        };
    },

    onFileUploadComplete(evt) {
        console.log('upload completed', evt);
    },

    onLocateMeClick() {
        navigator.geolocation.getCurrentPosition(this.onLocationDetected);
    },

    onLocationDetected(data) {
        this.setState({
            coords: data.coords,
            location: data.coords.latitude + ' ' + data.coords.longitude
        });
    },

    render() {
        let dropzoneConfig = {
            allowedFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: 'http://pdziok.vgnett.no/enably.ng-api'
        };
        let djsConfig = {maxFiles: 1};
        let eventHandlers = {
            onFileUploadComplete: this.onFileUploadComplete
        };

        let locationButton = 'geolocation' in navigator ? (
            <button onClick={this.onLocateMeClick}>Zlokalizuj mnie</button>
        ) : '';

        return (
            <div className="pure-g">
                <div className="pure-u-1-2">
                    <DropzoneComponent config={dropzoneConfig} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                </div>
                <div className="pure-u-1-2">
                    <div>
                        <label>Lokalizacja</label>
                        <input type="text" value={this.props.location} />
                        {locationButton}
                    </div>
                    <div>
                        <label>Komentarz</label>
                        <textarea value={this.props.comment}></textarea>
                    </div>
                    <button>Publikuj</button>
                </div>
            </div>
        );
    }
});

export default UploadView;
