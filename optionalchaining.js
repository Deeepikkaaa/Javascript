// Optional chaining simplifies the process of accessing properties nested within objects

const user1 = {
    name: "Dilli Ram Paudel",
    dog: {
        name: "Khaire",
        age: 1
    }
};

const user2 = {
    name: "Kale" // fixed syntax (was = instead of :)
};

const user3 = { };

// Normal property access without optional chaining
console.log("Normal Access");
// This works because dog exists
console.log(user1.dog.name); // Khaire

// These lines would throw errors
// console.log(user2.dog.name); 
// console.log(user3.dog.name);

// Using optional chaining
console.log("\nUsing Optional Chaining");
console.log(user1.dog?.name);        // Khaire
console.log(user2.dog?.name);        // undefined
console.log(user3.dog?.name);        // undefined

// Optional chaining with function call
const userWithFunc = {
    greet() {
        console.log("Hello there!");
    }
};

const userWithoutFunc = { };

// Normal function call
userWithFunc.greet(); // Hello!
// userWithoutFunc.greet(); // would throw Uncaught TypeError
// Optional chaining function call
userWithFunc.greet?.();      // Hello!
userWithoutFunc.greet?.();   // No error, returns undefined

// Optional chaining with array access
const data = {
    items: ["apple", "banana"]
};

console.log(data.items?.[0]);   // apple
console.log(data.nothing?.[0]); // undefined, no error
