// //settimeout=>execute code after sometime
console.log("I am first to be executed!")
const settimeout=setTimeout(()=>{console.log("I am from settime out");},5000);

setTimeout(()=>{
    clearTimeout(settimeout);
    console.log("Time out cancelled before execution");

},2000);
 
//settimeinterval=>used for periodic task like updating a clock or fetching data at regular interval

console.log("I am free from settimeinterval");
let value=0;
const intervalid= setInterval(()=>{
    value++;
    console.log("I am running at a regular interval",value);
    
if (value === 3){
    clearInterval(intervalid);
    console.log("Interval Stopped!")

}
},2000);

