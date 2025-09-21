//Declaring the object with computed property name
//Method 1  use exp within [] square brackets to create name of an object property
let LAST_NAME="lastname";
let fullname={
    firstname:"Deepu",
    [LAST_NAME]:"Bhandari"
};
console.log("My full name is: "+fullname.firstname+" "+fullname.lastname);
//Method 2 you first create the object normally, then assign new properties using square brackets.
let LAST_NAME1="lastname1";
let fullname1={
    firstname1:"Deepika",
    };
    fullname1[LAST_NAME1]="Bhandari";
    console.log("My full name is: "+fullname1.firstname1+" "+fullname1.lastname1);
