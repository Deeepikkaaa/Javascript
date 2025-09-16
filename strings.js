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
    console.log(`${index}:${char}`);
    
});

//using charAt()method with while loop
//it returns the character at a given index
//combinig with a while loop allows us to iterate over the string by manually tracking the index
let index=0;
let str="Bhandari";
while(index<str.length){
    console.log(str.charAt(index));
    index++;
}

//using reduce() method
//splitting the array then using the accumulator to concatenate or perform operations on each character
let bihani="Suvasandhya!";
let result=bihani.split('').reduce((acc,char)=>acc+char,'');
console.log(result);

//for in loop
//allows to iterate over the indices of the string,which we can then use to access each character
let gender="Female";
for(let index in gender){
    console.log(gender[index]);
}