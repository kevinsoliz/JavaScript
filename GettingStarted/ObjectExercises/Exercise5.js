function Inexpensive(price) {
    this.price = price;
    this.maximumPrice = 100;
    this.isInexpensive = function () {
        return this.price <= maximumPrice;
    };
}

function Moderate(price) {
    this.price = price;
    this.maximumPrice = 1000;
    this.isInexpensive = function () {
        return this.price <= maximumPrice;
    };
}

function Pricey(price) {
    this.price = price;
    this.maximumPrice = 1000;
    this.isInexpensive = function () {
        return this.price <= maximumPrice;
    };
}

let priceRange = [Inexpensive, Moderate, Pricey];
//La manera correcta:
let priceRanges = [
    {label: '$', tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: "Pricey", minPerPerson: 21, maxPerPerson: 50},
]