//importing the utils module
 const allthemodules=require("./utils.js");
 allthemodules.print("any");


 //destructing the functions from the utils module
 const {print,greet}=require("./utils.js");
 print(greet ("Deepika"));