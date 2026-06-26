let x = Number(prompt("Enter the Value of Number1 :"));
let y = Number(prompt("Enter the value of Number2 :"));
let Operator = prompt("Enter the Operation, '+','-','*','/'");
if (Operator=='+'){
    console.log(x+y);
}else if(Operator=='-'){
    console.log(x-y);
}else if(Operator=='*'){
    console.log(x*y);
}else{
    console.log(x/y);
}