//Spread operators

/*The Spread operator can turn the elements of an array
into arguments of a function call, or into elements
of an array literal */

var cats = ["Tabby", "Siamese", "Persian"];
var dogs = ["Golden Retriver", "Pug", "Schnauzer"];

var animals = ["Whale", "Girafe", cats, "Snake", dogs, "Coyote"]

console.log(animals);

/*We want to add cats and dogs into animals, So use the Spread operator */

/*
 If we want to add the array elements to the new array,
 we can use the spread operator. 
 Instead of just using the variable name,
 I'm going to have each of these variables preceded by three dots.

*/
var animals = ["Whale", "Girafe", ...cats, "Snake", ...dogs, "Coyote"]

console.log(animals);
