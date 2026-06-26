let Year = Number(prompt("Enter The Year:"));
if((Year%4==0)&&(Year%100!==0)||(Year%400==0)){
    console.log("THE YEAR IS LEAP YEAR");
}else{
    console.log("THE YEAR IS NOT A LEAP YEAR");
}