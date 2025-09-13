//binding =setting the value of this inside function


//a problem without binding
const country={
    name:"Nepal",
    greet:function(){
        console.log("I love my country"+ this.name);

    }
};

const greet=country.greet;//taking refrence
greet();//called without binding

//bind() method creates a new function with this function permanently bound
 const country1={
    name1:"Nepal",
    greet1:function(){
        console.log("I love my country "+this.name);
    }
 };
 const greet1=country1.greet1;
 const boundGreet=greet1.bind(country1);
 boundGreet();
 
 //call() method immediately invokes the function ,passing arguments one by one
  
