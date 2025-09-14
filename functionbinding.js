// binding = setting the value of "this" inside function

// Problem without binding
const country = {
    name: "Nepal",
    greet: function () {
        console.log("I love my country " + this.name);
    }
};

const greet = country.greet; // taking reference
greet(); // called without binding (this is lost)

// bind() method creates a new function with this permanently bound
const country1 = {
    name: "Nepal",
    greet1: function () {
        console.log("I love my country " + this.name);
    }
};
const greet1 = country1.greet1;
const boundGreet = greet1.bind(country1);
boundGreet();

// call() method immediately invokes the function, passing arguments one by one
const country2 = {
    name2: "Nepal",
    greet2: function (city) {
        console.log("Love " + this.name2 + " from " + city);
    }
};

country2.greet2('Kathmandu'); // direct call
const greet2 = country2.greet2;
greet2.call(country2, 'Dang'); // call() used

// apply() method similar to call(), but arguments are passed as an array
const country3 = {
    name3: "Nepal",
    greet3: function (city, code) {
        console.log("Love " + this.name3 + " from " + city + " " + code);
    }
};

country3.greet3('Kathmandu', 1001); // direct call
const greet3 = country3.greet3;
greet3.apply(country3, ['Deupur', 1011]); // apply() used
