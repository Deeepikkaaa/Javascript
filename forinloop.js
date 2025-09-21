//for.....in loop Javascript
//It is an special loop that is used to go through all keys (property names ) of an object
 const car={
    model:"corolla",
    make:"Toyota",
    year:2025
 };
 for (key in car){
    console.log(`${key}: ${car[key]} `);
 }
