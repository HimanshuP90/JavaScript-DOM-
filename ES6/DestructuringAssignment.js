//DestructuringAssignment

// Destructuring Assignment gives us an easy way to extract data from arrays and objects and assign them to variables. 

// var cities = ["Spokane", "Boston", "Los Angels", "Seattle", "Portland"];
// cities[0];
// cities[3];


// var [first,,, fourth,] = ["Spokane", "Boston", "Los Angels", "Seattle", "Portland"];

// console.log(first);
// console.log(fourth);



/*
Generators are a new type of function that allow us 
to pause functions in the middle of execution, 
to be resumed later
*/

// function* director() {
// 	yield "Three";
// 	yield "Two";
// 	yield "One";
// 	yield "Action";
// }

// var action = director();
// console.log(action.next().value);
// console.log(action.next().value);
// console.log(action.next().value);
// console.log(action.next().value);
// console.log(action.next().value);

function* eachItem(arr) {
	for(var i=0; i<arr.length; i++) {
		yield arr[i];
	}
}

var letters = eachItem(['a', 'b', 'c', 'd', 'e', 'f', 'g']);

var abs = setInterval(function() {
	var letter = letters.next();
	if (letter.done) {
		clearInterval(abs);
		console.log("Now I kno my ABC's")
	}
}, 500);

