var app = angular.module("simpleApp", []);

function simpleController() {
    this.collection = [{trackname: "Lovely",artist:"Billie Eillie", price: 650, album: "NewBellies",},
        {trackname: "You Broke Me First",artist:"Tate McRae", price: 800, album: "Memories"},
        {trackname: "You Belong With Me",artist:"Taylor Swift", price: 850, album: "Girltobe"},
        {trackname: "Alone",artist:"Alan Walker", price: 700, album: "FireAngels"},
        {trackname: "Blank Space",artist:"Taylor Swift", price: 680, album: "NastyLock"},
        {trackname: "Stuck With You",artist:"Justin Bieber", price: 820, album: "Piano"}];

    this.limit = 9;
    this.sortProperty = 'trackname';
    this.reverseSort = false;
}

simpleController.prototype.addEntry = function () {
    this.collection.push(this.newData);
    this.newData = '';
};

simpleController.prototype.sort = function (prop) {
    this.sortProperty = prop;
    this.reverseSort = !this.reverseSort;
}


app.controller("simpleController", simpleController);