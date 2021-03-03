/* Basic Exercise 1 */
var text = "Hello from the console";
console.log(text);

var text_2 = "Hello from the Browser";
document.write(text_2);

/* Basic Exercise 2 */

var text_3 = "Hi my name is Martin";
console.log(text_3);

/*Basi Exercise 3 */

let age = 25;


/* Basic exercise 4 */

var players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"]
var b = players[2];
var c = "The most valuable player of the match is ";
console.log(c, b);

//  INTERMEDIATE EXERCISES

/* Exercise 1 */
console.log("\n\t INTERMEDIATE Exercise 1\n")
var array2 = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"]
var b1 = array2.sort();
console.log("\n Car's type sorted alphabetically:", b1)


// Exercise 2 
console.log("\t INTERMEDIATE Exercise 2\n")

var array3 = ['apple', 'banana', 'kiwi'];
console.log("The first array contains the following values: ", array3)
array3.splice(3, 0, 'orange')
console.log("The first method used SPLICE : ", array3)

var array_4 = ['apple', 'banana', 'kiwi', 'orange', 'Pear', 'Grape', 'Mango'];
var d1 = array_4.slice(0, 4);
console.log("The second method is SLICE: ", d1)

console.log("The second output is: ", array3)

/*var array_5 = ['apple', 'banana'. 'kiwi', 'orange']
var d2 = array3.splice(4,0, 'orange');
console.log("The added method of orange is: ", d2) WHY IS NOT WORKING */


var array_2 = ['dog', 'horse', 'monkey'];
console.log("The second array is: ", array_2)
array_2.splice(0, 0, 'cat') // first 0 ist the index position, the second 0 which index we want to overwrite
console.log("The second output of array 2 is: ", array_2)


// Exercise 3 
console.log("\t INTERMEDIATE Exercise 3\n")
var string = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"

var string1 = new Array();
string1 = string.split("/")
console.log("\nDivided string1 is: \n", string1)


// ADVANCED EXERCISES

console.log("\t ADVANCED Exercise 1\n")
var a = 7;

var b = 14;

var c = "21";

var d = '36';

var e = 42;

var w = a + b + parseInt(c) + parseInt(d) + e; //parseInt change the string to integer
console.log("\tThe sum of the variables are: ", w)

console.log("\nThe part b of the exercise 1:\n")

var f = '1';

var g = 15;

var h = 8;

var i = "1";

var w1 = parseInt(f) * g * h * parseInt(i);
console.log("The multiplication of the variables is: ", w1)

w3 = w / w1;

console.log("The divition of the results:", w3)


console.log("\t ADVANCED Exercise 2\n")

var array_6 = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
]
console.log("Select and output the numbers:\n 11, 25, 17, 27 and 0 in the console.")
var w2 = array_6[1][1];
var w3 = array_6[4][2];
var w4 = array_6[5][3];
var w5 = array_6[2][3];
var w6 = array_6[2][1];

console.log("The numbers selected are:\n\t", w2, "\n\t", w3, "\n\t", w4, "\n\t", w5, "\n\t", w6);

// CHALLENGE 

console.log("\t CHALLENGE EXERCISE 1\n")

var array_7 = [
    ['Viena'],
    ['is'],
    ['a'],
    ['nice'],
    ['city']
]
w7 = array_7.shift(0);
console.log(w7)
w8 = array_7.shift(1);
console.log("\t", w8)
w9 = array_7.shift(2);
console.log("\t\t", w9)
w10 = array_7.shift(3);
console.log("\t\t\t", w10)
w11 = array_7.shift(4);
console.log("\t\t\t\t", w11)

console.log("METHOD TWO:")
console.log((w7), "\n\t", w8, "\n\t\t", w9, "\n\t\t\t", w10, "\n\t\t\t\t", w11)



console.log("\t CHALLENGE EXERCISE 2\n")

var string2 = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
var string3 = string2.split("$").join(" ")
    //string4 = string3.con
console.log("The solution of exercise 2 is: \n", string3)
    //console.log(string2.join('$'))
    //console.log(string2.join());

// Extra Exercises 

console.log("\n\t Extra Exercises 1\n")

var string5 = "Hey there, i am a javascript developer, and i live in vienna"

var string6 = string5.substring(11, 39);
//console.log(string6)
var string7 = string6.toUpperCase(0);
console.log("The required shorted text is:\n\t\t", string7, "\n")

console.log("\n\t Extra Exercises 2\n")

console.log("Start = ", array3)
array3.splice(2, 0, "orange", "strawberry")
console.log("Output = ", array3)