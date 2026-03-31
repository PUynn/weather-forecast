var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

const firstHigh = highTemperatures[0];
const lastLow = lowTemperatures[lowTemperatures.length - 1];

const avgHigh = highTemperatures.reduce((sum, v) => sum + v, 0) 
const avgLow = lowTemperatures.reduce((sum, v) => sum + v, 0) 

//1-Print the first high temperature to the console.
console.log("First high temperature:", firstHigh);

//2-Print the last low temperature to the console.
console.log("Last low temperature:", lastLow);

//3-What is the average high temperature from the data set?
console.log("Average high temperature:", avgHigh);

//4-What is the average low temperature from the data set?
console.log("Average low temperature:", avgLow);