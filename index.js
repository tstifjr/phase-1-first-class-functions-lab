// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2);
}

const returnLastTwoDrivers = array => array.slice(array.length-2)

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(int){
    
    return (fare) => int * fare;
}

const fareMultiplier = createFareMultiplier(2);
const fareMultiplier2 = createFareMultiplier(3);

function fareDoubler(fare){
    return fareMultiplier(fare);
}

function fareTripler(fare){
    return fareMultiplier2(fare);
}

function selectDifferentDrivers(array,f){
    return f(array);
}

//console.log(selectDifferentDrivers([0,1,2,3],selectingDrivers[1]));
//console.log(fareDoubler(10));
