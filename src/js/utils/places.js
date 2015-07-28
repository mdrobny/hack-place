import xhr from 'xhr';

var apiUrl = 'http://pdziok.vgnett.no/enably.ng-api/';

var places = {

    mockData: [
        {
            description: 'asdf asdf asdf asdf asdf asdf asdf jk;lk jkl;j asdf ',
            imageUrl: 'http://g.wieszjak.pl/p/_wspolne/pliki_infornext/8000/8016.jpg',
            up: 5,
            down: 10,
            id: 1
        }, {
            description: 'asdf asdf asdf asdf asdf asdf asdf jk;lk jkl;j asdf ',
            imageUrl: 'http://g.wieszjak.pl/p/_wspolne/pliki_infornext/8000/8016.jpg',
            up: 5,
            down: 10,
            id: 1
        }, {
            description: 'asdf asdf asdf asdf asdf asdf asdf jk;lk jkl;j asdf ',
            imageUrl: 'http://g.wieszjak.pl/p/_wspolne/pliki_infornext/8000/8016.jpg',
            up: 5,
            down: 10,
            id: 1
        }, {
            description: 'asdf asdf asdf asdf asdf asdf asdf jk;lk jkl;j asdf ',
            imageUrl: 'http://g.wieszjak.pl/p/_wspolne/pliki_infornext/8000/8016.jpg',
            up: 5,
            down: 10,
            id: 1
        }
    ],

    entries: {
        pluses: [],
        minuses: []
    },

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
            console.log('pluses');
            this.entries.pluses = JSON.parse(body);
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
            console.log('m');
            this.entries.minuses = JSON.parse(body);
            callback(err);
        });
    },

    saveEntry(data, callback) {
        xhr.post({
            url: 'http://pdziok.vgnett.no/enably.ng-api/entries',
            headers: {
                'Content-Type': 'application/json'
            },
            params: data
        }, (err, res, body) => {
            callback(err, body);
        });
    },

    getData() {
        return this.entries;
    }
};

export default places;
