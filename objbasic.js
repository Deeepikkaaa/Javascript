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
//Create an object car with properties brand, model, and year. 
// Write a method getDetails() that returns a string like "Toyota Corolla - 2020"
const car={
    Brand:"BMW",
    Model:"X5",
    Year:2022,
   getDetails: function(){
    return `${this.Brand} ${this.Model}-${this.Year}`;
}

};
console.log(car.getDetails());

