// Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:
// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
    return Math.floor(0.5*time);
    // Math.floor() rounds towards closest lower integer number.
}
console.log(litres(11.8));


function litresAgain(time){
    return Math.trunc(0.5*time);
    //Math.trunc() cuts away (truncates) the decimal places. 
}
console.log(litresAgain(11.8));