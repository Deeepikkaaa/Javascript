//Create an object person with properties name, age, and city. 
// Print each property using dot notation and bracket notation.
const person={
    name:'Deepika',
    age:12,
    city:"Newyork"
};
//printing each property using dot notation and bracket notation
console.log(person.name);
console.log(person['age']);
console.log(person.city);

//Add a new property hobby to the person object. 
//Then delete the city property.
person.hobby="Reading";
delete person.city;
console.log(person);
// writing a function that takes an object as input and returns the 
// number of properties in that object.
function countobjprop(obj){
    return Object.keys(obj).length;
}
console.log(countobjprop(person));
