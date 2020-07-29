//problem no 1:
function feetToMile(feet) {
    //var mile = feet/5280;
    var mile = feet*0.00018939;
    return mile;
}
var allMile = [15002, 85600, 4589];
var result = feetToMile(allMile[1]);
var output = Math.round(result)
console.log("Converted mile is:",output, "miles")

// Problem no: 2
function woodCalculator(chair, table, bed) {
    var x = chair*1;
    var y = table*3;
    var Z = bed*5;
    return x+y+Z;
    }
   
var woodNeeded = woodCalculator(14, 15, 10);
console.log("Total wood needed:", woodNeeded, "cubic feet")



/* function woodCalculator1(table) {
    var cubicFeet1 = table*3;
    return cubicFeet1;
    }

var woodNeeded1 = woodCalculator1(14);
console.log("total wood needed:",woodNeeded1, "cubic feet")

function woodCalculator2(bed) {
    var cubicFeet = bed*5;
    return cubicFeet;
    }

var woodNeeded = woodCalculator2(14);
console.log("total wood needed:",woodNeeded, "cubic feet") */


// Problem no: 3
function brickCalculator(noOfFloors) {
    
    if (noOfFloors <= 10) {
        var totalFeet = 15*noOfFloors;    
    }
    else if(noOfFloors > 11 && noOfFloors <=20) {
        var firstPortion = 15*noOfFloors 
        var totalFeet = firstPortion + 12*noOfFloors;   
    }
    else{
        firstPortion = 15*noOfFloors;
        seconPortion = 12*noOfFloors
        var totalFeet = firstPortion + seconPortion+ 10*noOfFloors;  
    }
    return totalFeet*1000
}
var TotalNoOfBricks = brickCalculator(45)
console.log("Total Bricks needed:", TotalNoOfBricks, "bricks")


/* var name = ["Musaddik", "Munna", "O", "Jahangirs", "Rahat", "ABCjhjhnn", "AbdulBasit"];
var smallName = name[0].length;
var shortName = name[0];
for (let i = 0; i < name.length; i++) {
    let element = name[i].length;
    let elementName = name[i];
    if (element < smallName) {
        smallName = element;
        shortName  = elementName;
    }
}
console.log(shortName) */


// Problem no: 4
function tinyFriend(name) {
    var smallName = name[0].length;
    var shortName = name[0];
for (let i = 0; i < name.length; i++) {
    let element = name[i].length;
    let elementName = name[i];
    if (element  < smallName) {
        smallName = element;
        shortName  = elementName;
        }
    }
   return shortName; 
}
name = ["Musaddik", "Munna", "Oli", "Jahangir", "Rahat", 'asad', 'shahan', 'emran', 'ruhul' ];
var friendName = tinyFriend(name);
console.log('Shortest name from my friend list is: ',friendName)