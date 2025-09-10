//You can check if a property exists in an object using the in operator:
const obj = {
    name: 'Prakash',
    age: 99,
    city: 'Humla'
};

const isPropertyFound = 'name' in obj;
console.log(isPropertyFound); // Output: true

const isAgePropertyFound = 'age' in obj;
console.log(isAgePropertyFound); // Output: true

const isCountryPropertyFound = 'country' in obj;
console.log(isCountryPropertyFound); // Output: false

const isCityPropertyFound='city' in obj;
console.log(isCityPropertyFound);
