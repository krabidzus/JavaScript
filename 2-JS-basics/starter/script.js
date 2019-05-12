/************************
* VAriables and data types
*/
/*
var firstName = 'John';
console.log(firstName)

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
*/

/**************************
 * Variable mutation and type coercion
 */

 /*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName)

//zkouska gitu
*/



/***************************
 * Basic operators
 

 var year, yearJohn, yearMark;
year = 2020;
ageJohn = 28;
ageMark = 33;


// Math operators
yearJohn = year - ageJohn;
yearMark = year - ageMark;

console.log(yearJohn);

console.log(year + 2);
console.log(year * 2);
console.log(year / 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is kokot')
var x;
console.log(typeof x);

*/

/**********************
 * Operator precedence
 

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assigments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// 2 + 4 + 5
// = je zprava do leva associativity

// More operators
x *= 2; // = x = x * 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);

*/

/**************
 * First coding challenge
 * reseno jinak pouze boleanem
 * true/false
 
var massMark, massJohn, heightMark, heightJohn;
massMark = 70;
massJohn = 9;
heightMark = 1,8;
heightJohn = 1,75;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

function whosBmiIsHigher() {
    if (bmiMark > bmiJohn) {
        return "Mark";
} else {
        return "John";
}}

console.log('Higher BMI has: ' + whosBmiIsHigher() + '.');

*/
/**********************
 * If / else statements
 

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

*/

/******************
 * Boolean logic
 

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if(age >= 13 && age < 20) { // between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young .');
}else {
    console.log(firstName + ' is a man.');
}
*/

/******************
 * The Tenrnary Operator and Switch Statements
 

var firstName = 'John';
var age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/* if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
} */

/*
// Switch statement
var job = 'driver';
switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'drive':
        console.log(firstName + ' drives an uber in Prague.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 31;
switch (true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young .');
        break;
    default: 
        console.log(firstName + ' is a man.');
}
*/

/****************
 * Truthy and Falsy values and equality operators


// falsy values: undefined, null, 0, '', Nan
// truthy values: not falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable is not defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coersion!');
}

 */

/**************
 * Coding Challenge 2
 

var averageJohn = (89 + 120 + 103) / 3;
var averageMike = (116 + 94 + 123) / 3;

console.log('John: ' + averageJohn);
console.log('Mike: ' + averageMike); 

if (averageJohn > averageMike){
    console.log('The winner is John\'s team with score: ' + averageJohn);
} else if (averageJohn === averageMike){
    console.log('It is split with score: ' + averageJohn);
} else {
    console.log('The winner is Mike\'s team with score: ' + averageMike);
}

*/

/******************
 *  Coding Challenge 2 EXTRA
 

var averageJohn = (94 + 134 + 105) / 3;
var averageMike = (94 + 134 + 105) / 3;
var averageMary = (94 + 134 + 105) / 3;

console.log('John: ' + averageJohn);
console.log('Mike: ' + averageMike); 
console.log('Mary: ' + averageMary);


switch (true){
    case averageJohn > averageMike && averageJohn > averageMary:
        console.log('The winner is John with score: ' + averageJohn);
        break;
    case averageMike > averageJohn && averageMike > averageMary:
        console.log('The winner is Mike with score: ' + averageMike);
        break;
    case averageMary > averageMike && averageMary > averageJohn:
        console.log('The winner is Mary with score: ' + averageMary);
        break;
    case averageMary === averageMike && averageMary === averageJohn:
        console.log('It is split all of them ' + averageMary);
        break;
    case averageMary === averageMike:
        console.log('It is split between Mary and Mike ' + averageMary);
        break;
    case averageMary === averageJohn:
        console.log('It is split between Mary and John ' + averageMary);
        break;
    case averageMike === averageJohn:
        console.log('It is split between Mike and John ' + averageMike);
        break;
}

*/






















