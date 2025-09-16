//Iterating over characters of string in javascript
//for loop
let greet="Good Morning Cutie!";
for(let i=0;i<greet.length;i++){
console.log(greet[i]);
}

//for...of loop is a modern way to iterate directly over the characters of the string without needing to use indexing
let address="Dang";
for( let char of address){
    console.log(char);
}

//foreach()method 
//it can be used on array so that we first split the string into an array of chars and use foreach to iterate
//syntax is :: array.forEach(callback(element, index, arr), thisValue)
let name="Deepika";
name.split('').forEach((char,index ) => {
    console.log(`${index}:${char}}`);
    
});

