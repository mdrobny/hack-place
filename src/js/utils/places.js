import xhr from 'xhr';

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

    entries: [],

    fetchData(callback) {
        if (this.entries.length) {
            callback();
            return;
        }

        xhr({
            url: 'http://pdziok.vgnett.no/enably.ng-api/entries?limit=4',
            headers: {
                'Content-Type': 'application/json'
            }
        }, (err, res, body) => {
            this.entries = JSON.parse(body);
            callback();
        });
    },

    getData() {
        return this.entries;
    }
};


export default places;
