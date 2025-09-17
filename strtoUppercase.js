//js string to uppercase method
//this method converts entire string to uppercase
let name="deepikabhandari";
let string =name.toUpperCase();
console.log(string);


//this method doesn't affect strings already in uppercase
 let country="Nepal";
 let uppercase=country.toUpperCase();
 console.log(uppercase);

 //creating an array of data with elements 'javascript', 'html', and 'css'. It uses map() and toUpperCase() to 
 // convert each element to uppercase.
 let data=['javascript','html','css'];
 let result =data.map(data=>data.toUpperCase());
 console.log(result);