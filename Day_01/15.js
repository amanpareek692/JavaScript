let Total_bill = 2000;
if (Total_bill>=5000){
    console.log("Final Amount After Discount: = ",Total_bill=Total_bill-(.3*Total_bill));
}else if(Total_bill>=3000){
    console.log("Final Amount After Discount: =",Total_bill=Total_bill-(.2*Total_bill));
}else if(Total_bill>=1000){
    console.log("Final Amount After Discount:",Total_bill=Total_bill-(.1*Total_bill));
}else{
    console.log("Final Amount with no discount:",Total_bill );
}