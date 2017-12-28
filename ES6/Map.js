//Map is object hold key value pair

var course = new Map();
course.set('react', {description: 'ui'});
course.set('jest', {description: 'testing'});
console.log(course);
console.log(course.get('react'));


var books = new Set();
books.add('Pride and Prejudice');
books.add('War & Peand');
books.add('Oliver Twist');

console.log(books);
console.log('How many books?', books.size);
console.log('Has Oliver Twist?', books.has('Oliver Twist'));


var data = [1,3,4,5,6,6,2,1,3,3,4,5,6,6,9];
var set = new Set(data);
console.log(set);


//For-of is a new loop in ES6 that we can use to loop over iterable objects like arrays, strings, maps, and sets.
for ( let letter of 'JavaScript') {
	console.log(letter);
}

for ( let topic of books) {
	console.log(topic);
}