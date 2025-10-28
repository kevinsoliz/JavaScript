const address = {
    street: 'Juan Carlos I',
    city: 'San Francisco',
    zip: 30850
}

function showAddress(obj) {
    for (let key in obj) {
        console.log(key + ": " + obj[key]);
    }
}

showAddress(address);