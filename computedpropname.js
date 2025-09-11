//Declaring the object with computed property name
//Method 1  use exp within [] square brackets to create name of an object property
let LAST_NAME="lastname";
let fullname={
    firstname:"Deepu",
    [LAST_NAME]:"Bhandari"
};
console.log("My full name is: "+fullname.firstname+" "+fullname.lastname);