// HOF accepts another function as an argument or return a function or does both is HOF
function firstorder(){
    return "Lets learn about first order function"
}

function hof (firstorder){
    console.log("Deepika", firstorder(),"and higher order function")
}
 hof(firstorder);

 function showMessage(){
    return function (){
        console.log("Hi there,i am from inner function!😉");
    }
 }
 const output=showMessage();
 output();


//Square of numbers
 const arr =[1,2,3,4,5,6,7,8,9];

 function getSquarenum(arr){
let squaredNum=[];
for(let number of arr){
    squaredNum.push(number**2);
}
return squaredNum;
 }
 const result=getSquarenum(arr);
 console.log(result);

 //hod function uses How it is used?
 const arrr=[1,2,3,4,5];

 function Square(number){
    return number**2;
 }

 function Cube(number){
    return number **3;
 }
 function Fourthpower(number){
    return number **4; 
 }
 function calcPower(inner,arr){
 let temparr=[];
 for (let number of arr){
    temparr.push(inner(number));
 }
 return temparr;
 }

 const Sqnum=calcPower(Square,arr);
console.log(Sqnum);

const cubenum=calcPower(Cube,arr);
console.log(cubenum);
const fournum=calcPower(Fourthpower,arr);
console.log(fournum);