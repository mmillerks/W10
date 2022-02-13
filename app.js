//ACTIVITY 1
//Without running the following code, try to determine:
let a = '';
let b = 'bongos';
let c = 'get your';
a = b
b = c
c = a

a = bongos
b = get your
c = bongos

//ACTIVITY 2
//Use the + operator to concatenate these strings together within a console.log: 
//"Please", "squeeze", "the", "cheese". Make sure there are spaces in-between each word.
//=> "Please squeeze the cheese"
console.log("Please " + "squeeze " + "the " + "cheese.");

//Extra
//With the variable const word = 'believe', replace the string "squeeze" with the word variable.
=> "Please believe the cheese"
console.log("Please " + word + "the " + "cheese.");
console.log(`Pleae ${word} the cheese.`);

//Extra
//Output a console log "The sum of 5 and 10 is 15" where the values for 
//5 and 10 are saved to variables, and where 15 comes from those variables being srummed.
const num1 = 5
const num2 = 10
console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);


//ACTIVITY 3
//Console.log each boolean expression
//Check: is -10 greater-than-or-equal-to -100?
console.log(-10 >= -100);

//Check: is 0 less than 1000?
console.log(0 < 1000);

//Check: is 888 the same as 889?
console.log(888 === 889);

//Check: is 20 less-than-or-equal-to 20?
console.log(20 <= 20);


//ACTIVITY 4
//Write a while loop that counts from 1 to 100.
let i = 1;
while (i<=100) {
    console.log(i);
    i++;
}

//Make the loop count from 0 to 5000 and print the square of each number.
let i = 0;
while (i<=5000) {
    console.log(i*i)
    i++;
}

//FIGURE IT OUT: How can you get a while loop to count backwards? 
i--

//Use the postfix operator i-- to make a loop count backwards from 1000 to 1.
let i = 1000;
while (i>=1) {
    console.log(i);
    i--;
}


//ACTIVITY 5
//Write a for loop that counts from 999 to 9999.
for (let i=999; i <=9999; i++) {
    console.log(i);
}

//CONFETTI BALL
//Write a for loop that prints 'This is the song that never ends' to the console 100 times.
for (let index=0; index <= 100; index++) {
    console.log("This is the song that never ends.");
}

//Write a for loop that counts backwards from 1000 to 1, using the postfix operator i--.
for (num3 = 1000; num3 <=1; num--) {
    console.log(num3);
}


//PRACTICE MODULE #1
//Create two separate modules:
//A module named "random" that has a function assigned to the module.exports and 
//returns a random number, as an integer, between two numbers provided, inclusive, a
//s arguments; so that we could use it in our program like this:

const random = require('./utilities/random');
    for(let i=0; i<10; i++) {
        console.log(random.random (100,200));
    }  


//PRACTICE MODULE #2 (need to finish)
//A module named "circle" that exports two functions:
//area: Computes the area of a circle (radius squared// X Pi), with the radius provided as an argument.
//circumference: Computes the circumference of a circle (radius X 2 X Pi), with the radius provided as an argument.
Hint: This is JS, so Math.PI is available.

const circle = require('./utitilties/circle');
console.log( circle.area(50) );
console.log ( circle.circumference(75) );


//PRACTICE MODULE #3
//make a folder in the folder you have been working in called capitalize.
//Create 2 files index.js and test.js
//in index.js answer the following and export the function

const capitalize = require('./capitalize/index');
capitalize('a lazy fox)';
console.log(capitalize('a lazy fox'));


//PRACTICE MODULE #4





