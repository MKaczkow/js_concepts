const address = {
    street: '',
    city: '',
    country: ''
};

// without destructuring
const street = address.street
const city = address.city;
const country = address.country;

// more elegant way
const { street, city, country } = address;
const { street: st } = address;
