/* First class function  /citizen
if a function can be assigned to a variable
if a function can be passed as argument to another function 
returning function from another function */

//1
const home= function(){
console.log("This house belongs to Deepika Bhandari");
}
 home();

 //2
 function city(){
    return "Welcome to the city of thousand temple!!🙏";

 }
 function greetMessage(inner,name){
    let message=inner();
    console.log(name,message);
 }
 greetMessage(city,"Harry");//passed city function as argument to greetMessage function

 //3
 function greeting (name){
    function wrapper(){
        let name="Harry";
        console.log(name,",How are you?")
    }
    return wrapper;
 }
 const output=greeting();
output();
greeting()();