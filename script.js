/* Basic Exercise 1 */

var text = "Hello from the Console";
console.log(text);

var text_2 = "Hello from the Browser";
document.write(text_2);

/* Basic Exercise 2 */

var text_3 = "Hi my name is Martin";
console.log(text_3);

/* Basic Exercise 3 */

var age = 30;
var name = "Freddy";

/* Basic Exercise 4 */

var players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];
console.log(players[2]);

/* Intermediate Exercise 1 */

var autos = ["Tesla", "Audi", "Rnault", "Volvo", "Mazda", "Fiat", "Ferrari"];
console.log(autos.sort());

/* Intermediate Exercise 1a */

var fruits = ["apple", "banana", "kiwi"];
fruits.push("orange");

var fruits2 = ["apple", "banana", "kiwi", "orange"];
fruits2.pop("orange");
console.log(fruits2);

/* Intermediate Exercise 1b */

var a = 'Monkey horse dog.';
var animals = new Array();
animals = a.split(' '); // dont forget the space
console.log(animals);