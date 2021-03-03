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

// Excercise Challenge 1
console.log("\t Challenge 1\n")

var multi = [
    ["Viena", null, null, null],
    [null, "is", null, null],
    [null, null, "nice", null],
    [null, null, null, "city"]
];
console.log("\n\t The diagonally array ist:\n\t", multi);


var multi2 = [
    ["Viena", "-----", "-----", "-----", ],
    ["-------", "is", "-----", "-----"],
    ["-----", "-----", "nice", "-----"],
    ["-----", "-----", "-----", "city"]
];
document.write("<br>The diagonally array ist:<br>", multi2[0], "<br>", multi2[1], "<br>", multi2[2], "<br>", multi2[3], );