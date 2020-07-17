// function feetToMile(feet){
//     var feet = feet/5280;
    
//     if(feet < 0 ){
//         return "Distance can't be a negative value."
//     }
//     return feet;
    
// }
// var result = feetToMile(1000);
// console.log(result);

// function woodCalculator(chair,table,bed){
//     var woodForChair = chair*1;
//     var woodForTable = table*3;
//     var woodForBed = bed*5;
//     if(chair < 0 || table < 0 || bed < 0){
//         return "Qunatity never be a negative number."
//     }
//     return woodForChair + woodForTable + woodForBed;
// }
// var TotalWood = woodCalculator(1,2,3);
// console.log(TotalWood);

function brickCalculator(floors){
    if (floors>=1 && floors<=10){
        if(floors < 0){
            return "Floor's number never be a negative value"
        }
        for(i = 0; i<=floors; i++){
            brick = 1000*15*floors;
            // total1 = brick1*floors;
        }
        return brick;
    }

    else if(floors>=11 && floors<=20){
        if(floors < 0){
            return "Floor's number never be a negative value"
        }
        for(i = 11; i<=floors; i++){
            brick = (1000*15*10) + 1000*12*(floors-10);
            //total2 = brick2*floors;
        }
        return brick;
    }
    else{
        if(floors < 0){
            return "Floor's number never be a negative value"
        }
        for(i = 21; i<=floors; i++){
            brick =(1000*15*10) + (1000*12*10) + 1000*10*(floors-20);
            // total3 = brick3*floors;
        }
        return brick;
    }
}
var result = brickCalculator(22);
console.log(result);

// function tinyFriend(str){
//     var friendName = '';
//     for(i = 0; i<str.length; i++){
//         var smallestName = str[i];
//         if (smallestName < friendName){
//             smallestName = friendName;
//         }
//     }
//     return smallestName;
// }
// var result = tinyFriend(['Arko', 'Rashedul', 'Mishu', 'Akhi']);
// console.log(result);
