// Array Destructuring
const numbers = [10, 20, 30, 40];
const [a, b, , d] = numbers; // skipping 3rd element
console.log(a, b, d); // 10 20 40

// Swapping values using destructuring
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1

// Using Rest Operator with array
const [first, ...rest] = [5, 6, 7, 8];
console.log(first); // 5
console.log(rest);  // [6, 7, 8]

// Object Destructuring
const person = { name: "Alice", age: 25, city: "London" };
const { name, age } = person;
console.log(name, age); // Alice 25

// Rest operator with object
const { name: n, ...other } = person;
console.log(n);     // Alice
console.log(other); // { age: 25, city: 'London' }

// Nested Object Destructuring
const student = {
    id: 101,
    marks: { math: 90, science: 95 },
    address: { city: "Paris", country: "France" }
};
const { marks: { math, science }, address: { city } } = student;
console.log(math, science, city); // 90 95 Paris

// Destructuring function return
function getColors() { return ["red", "green", "blue"]; }
const [primary, secondary] = getColors();
console.log(primary, secondary); // red green
