// Object constructor is a special type of function that is used to create and initialize objects

// Constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    };
}

// Creating instances with a constructor
const a = new Student("Deepika", 100);
const b = new Student("Harry", 99);

a.sayHello();
b.sayHello();

// Adding properties to object after creation
const constitution = {
    articles: 308,
    schedules: 9,
    name: "Constitution of Nepal"
};
constitution.date = "2072/06/03"; // dot notation
constitution["amendments"] = "Three"; // bracket notation

console.log(constitution);
/*
Output:
{
  articles: 308,
  schedules: 9,
  name: 'Constitution of Nepal',
  date: '2072/06/03',
  amendments: 'Three'
}
*/

// Adding properties to constructor inside function
function Genz1(d, b) {
    this.A = 12;
    this.B = 28;
    this.C = "YOUTH OF NEPAL"; // extra property
}
const youth = new Genz1(11, 15);
console.log(youth);

// Adding methods to object after creation
const obj1 = { A: 10, B: 5 };
obj1.sum = function () {
    return this.A + this.B;
};
console.log("Sum:", obj1.sum());

// Adding methods to constructor inside function
function Genz2(d, b) {
    this.A = 12;
    this.B = 28;
    this.C = "YOUTH OF NEPAL";
    this.sum = function () {
        return this.A + this.B;
    };
}
const obj2 = new Genz2(55, 45);
console.log("Sum:", obj2.sum());

// Instantiating Objects using new Object()
let deepika1 = new Object();
deepika1.a = "beautiful";
deepika1.b = "intelligent";
console.log("Deepika is " + deepika1.a + " and " + deepika1.b);

// Instantiating Objects using {}
let deepika2 = {};
deepika2["a"] = "beautiful";
deepika2["b"] = "intelligent";
console.log("Deepika is " + deepika2.a + " and " + deepika2.b);
