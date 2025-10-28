function createAddress(street, city, zip) {
    return {
        street,
        city,
        zip
    };
}

function Address(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip;
}

function showAddress(obj) {
    for (let key in obj) {
        console.log(key + ": " + obj[key]);
    }
}

const address1 = createAddress("San Juan", "Sapin", 8098);

const address2 = new Address("San Francisco", "Washington", 8023);

showAddress(address1);
showAddress(address2);
