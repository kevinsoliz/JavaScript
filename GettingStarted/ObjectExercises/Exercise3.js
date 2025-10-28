function Address(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip;
}

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zip === address2.zip;
}

function areSame(address1, address2) {
    return address1 === address2;
}

const address1 = new Address("San Francisco", "Sapin", 8098);
const address2 = new Address("San Francisco", "Sapin", 8098);
const address3 = address2;

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address3, address2));