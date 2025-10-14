//Arguments Object in non arrow function 
// a regular function has argument object
//argument object is an array like object present locally iniside a function
//and it contains value of all the arguments passed to a function

function calculateTotal(a,b){
    return a+b;
}
const total=calculateTotal(6,6);
console.log(total);

function calculate(){
    let sum=0;
    console.log(arguments.length);
    for(let value of arguments){
        sum+=value;
    }
    console.log(sum);
}
calculate(9,7,5,6,8,2);

//we use restparameter in the latest version of javascript in the place of argumentsobjedct
