//js string includes() method
//returns true if a string contains specified string

//this code checks whether  "Nepal" is found or not in "I love my country Nepal."

let string="I love my country Nepal.";
let check=string.includes("Nepal");
console.log(check);
//this method is case sensitive so it returns false
let check2=string.includes("nepal");
console.log(check2);

//this code checks if "e" is there starting from index 9
let check3=string.includes("e",9);
console.log(check3);

//if starting index is less than 0 , the entire array will be searched
let check4=string.includes('N',-5);
console.log(check4);

