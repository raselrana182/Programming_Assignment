// feetToMile //

function feetToMile(feet){
    var mile = feet/5280;
    if(feet < 0 ){
        return "Distance can't be a negative value."
    }
    return mile;
}

// woodCalculator //

function woodCalculator(chair,table,bed){
    var woodForChair = chair*1;
    var woodForTable = table*3;
    var woodForBed = bed*5;
    if(chair < 0 || table < 0 || bed < 0){
        return "Qunatity never be a negative number."
    }
    return woodForChair + woodForTable + woodForBed;
}


// brickCalculator //

function brickCalculator(floors){
    if (floors>=1 && floors<=10){
        if(floors < 0){
            return "Floor's number never be a negative value"
        }
        for(i = 0; i<=floors; i++){
            var firstTenFloor = 1000*15*floors;
        }
        return firstTenFloor;
    }

    else if(floors>=11 && floors<=20){
        if(floors < 0){
            return "Floor's number never be a negative value"
        }
        for(i = 11; i<=floors; i++){
            var secondTenFloor = (1000*15*10) + 1000*12*(floors-10);
        }
        return secondTenFloor;
    }
    else{
        if(floors < 0){
            return "Floor's number never be a negative value"
        }
        for(i = 21; i<=floors; i++){
            var aboveFloor =(1000*15*10) + (1000*12*10) + 1000*10*(floors-20);
        }
        return aboveFloor;
    }
}


// tinyFriend //

function tinyFriend(str){
    var friendName = '';
    for(i = 0; i<str.length; i++){
        var smallestName = str[i];
        if (smallestName.length < friendName.length){
            smallestName = friendName;
        }
    }
    return smallestName;
}

