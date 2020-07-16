// function feetToMile(feet){
//     var feet = feet/5280;
    
//     if(feet < 0 ){
//         return "Distance can't be a negative value."
//     }
//     return feet;
    
// }
// var result = feetToMile(-1000);
// console.log(result);

function woodCalculator(chair,table,bed){
    chairOfWood = chair*1;
    tableOfWood = table*3;
    bedOfWood = bed*5;
    if(chair < 0 || table < 0 || bed < 0){
        return "Qunatity never be a negative number."
    }
    return chairOfWood + tableOfWood + bedOfWood;
}
var result = woodCalculator(15,20,30);
console.log(result);