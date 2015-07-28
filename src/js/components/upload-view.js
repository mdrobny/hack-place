import React from 'react';
import places from '../utils/places';
import DropzoneComponent from 'react-dropzone-component';
import {Navigation} from 'react-router';

var UploadView = React.createClass({
    mixins: [Navigation],
    displayName: 'UploadView',
    getInitialState() {
        return {
            coords: {},
            name: '',
            location: '',
            comment: '',
            validation: {
                location: '',
                name: '',
                comment: '',
                imageId: ''
            }
        };
    },

    onFileUploadComplete(data) {
        var response = JSON.parse(data.xhr.response);
        this.setState({
            imageId: response.id
        });
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

    onNameChange(evt) {
        this.setState({
            name: evt.target.value
        });
    },

    onDescriptionChange(evt) {
        this.setState({
            comment: evt.target.value
        });
    },

    lookupPlace(event) {
        this.setState({
            coords: {},
            location: event.target.value
        });
        // send request to google's api
    },

    saveForm() {
        let validation = {};
        let isValid = true;
        if (!this.state.coords.latitude) {
            validation.location = 'Wybierz lokalizację';
            isValid = false;
        }
        if (!this.state.name.length) {
            validation.name = 'Wpisz nazwę';
            isValid = false;
        }
        if (!this.state.comment.length) {
            validation.comment = 'Dodaj komentarz';
            isValid = false;
        }
        if (!this.state.imageId) {
            validation.imageId = 'Prześlij zdjęcie';
            isValid = false;
        }
        this.setState({validation: validation});
        if (isValid) {
            places.saveEntry({
                name: this.state.name,
                latitude: this.state.coords.latitude,
                longitude: this.state.coords.longitude,
                description: this.state.comment,
                'image_id': this.state.imageId
            }, (err, data) => {
                this.transitionTo('home')
            });
        }
    },

    render() {
        let dropzoneConfig = {
            allowedFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: 'http://pdziok.vgnett.no/enably.ng-api/images/'
        };
        let djsConfig = {maxFiles: 1};
        let eventHandlers = {
            success: this.onFileUploadComplete
        };

        let locationButton = 'geolocation' in navigator ? (
            <button onClick={this.onLocateMeClick}>Zlokalizuj mnie</button>
        ) : '';

        return (
            <div className="pure-g">
                <div className="pure-u-1-2">
                    <DropzoneComponent config={dropzoneConfig} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                    <p>{this.state.validation.imageId}</p>
                </div>
                <div className="pure-u-1-2">
                    <div>
                        <label>Lokalizacja</label>
                        <input type="text" onChange={this.lookupPlace} required />
                        <p>{this.state.validation.location}</p>
                        {locationButton}
                    </div>
                    <div>
                        <label>Nazwa</label>
                        <input type="text" onChange={this.onNameChange} required maxLength="20" />
                        <p>{this.state.validation.name}</p>
                    </div>
                    <div>
                        <label>Opis</label>
                        <textarea onChange={this.onDescriptionChange} required></textarea>
                        <p>{this.state.validation.comment}</p>
                    </div>
                    <button onClick={this.saveForm}>Opublikuj</button>
                </div>
            </div>
        );
    }
});

export default UploadView;
