const prompt = require("prompt-sync")();
let Number01 = Number(prompt("Enter The Number One :"));
let Number02 = Number(prompt("Enter The Number Two:"));
let Number03 = Number(prompt("Enter The Number Three:"));
if ((Number01>Number02)&&(Number01>Number03)){
    console.log("Number01 is The Largest Number");
}else if((Number02>Number01)&&(Number02>Number03)){
    console.log("Number02 is The Largest Number");
}else{
    console.log("Number03 is The Largest Number");
}

