import xhr from 'xhr';

var apiUrl = 'http://pdziok.vgnett.no/enably.ng-api/';

var places = {
    entries: {
        pluses: [],
        minuses: []
    },
    activeEntry: {},

    fetchData(callback) {
        if (this.entries.pluses.length) {
            callback();
            return;
        }

        this.fetchPluses(function() {
            this.fetchMinuses(callback);
        }.bind(this));
    },

    fetchPluses(callback) {
        xhr({
            url: apiUrl + 'entries?order=overallRating+ASC&limit=4',
            headers: {
                'Content-Type': 'application/json'
            }
        }, (err, res, body) => {
            if (this.entries.pluses.length === 0) {
                this.entries.pluses = JSON.parse(body);
            }
            callback(err);
        });
    },

    fetchMinuses(callback) {
        xhr({
            url: apiUrl + 'entries?order=overallRating+DESC&limit=4',
            headers: {
                'Content-Type': 'application/json'
            }
        }, (err, res, body) => {
            if (this.entries.minuses.length === 0) {
                this.entries.minuses = JSON.parse(body);
            }
            callback(err);
        });
    },

    saveEntry(data, callback) {
        xhr({
            url: 'http://pdziok.vgnett.no/enably.ng-api/entries',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            json: data
        }, (err, res, body) => {
            callback(err, body);
        });
    },

    fetchOne(entryId, callback) {
        xhr({
            url: apiUrl + 'entries/' + entryId,
            headers: {
                'Content-Type': 'application/json'
            }
        }, (err, res, body) => {
            console.log('m');
            this.activeEntry = JSON.parse(body);
            callback(err);
        });
    },

    getOne() {
        return this.activeEntry;
    },

    getData() {
        return this.entries;
    }
};

export default places;
