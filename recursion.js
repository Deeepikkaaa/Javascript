//Recursion is a programming term where the function is called from itself

//wap to calculate the sum of num from 1 to 10

function calcSum(number){
    if (number==1){ //base condition is required as function starts calling itself endlessly
        return number;
    }
    return number+calcSum(number-1);
}
const total=calcSum(10);
console.log(total);

//wap to calculate factorial of a num

function calcFactorial(num){
    if(num==1){
        return num;
    }
    return num*calcFactorial(num-1);
}
const factorial=calcFactorial(6);
console.log(factorial)