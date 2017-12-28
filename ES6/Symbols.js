//The building blocks of all of our JavaScript applications are JavaScript primitives. Primitives in JavaScript are types, like numbers, strings, arrays, and objects. Symbols are a new primitive type in ES6. Symbols are often used as unique identifiers because they won't conflict with object keys that are strings. Symbols also help us to create customized iteration behavior


// const id = Symbol();
// const courseInfo = {
// 	title: "ES6",
// 	topics:["babel", "syntax", "functions", "classes"]
// };

// courseInfo[id] = 41284;
// console.log(courseInfo)


// const id = Symbol();
// const courseInfo = {
// 	title: "ES6",
// 	topics:["babel", "syntax", "functions", "classes"]
// 	,id: "js-course"
// };

// courseInfo[id] = 41284;
// console.log(courseInfo)


// const delay = seconds => {
// 	return new Promise(resolve => {
// 		setTimeout(
// 			() => resolve(` ${seconds} second delay is up`), 
// 			seconds*1000)
// 	});
// };

// console.log("Zero seconds");
// delay(2).then(() => console.log("one seconds"));
// delay(4).then(() => console.log("three seconds"));


//Often we use promises to load data. Let's create a function called space people that returns a promise

// fetch('http://api.open-notify.org/astros.json')
// .then(res => res.json())
// .then(console.log)

const  getPeopleInSpace = () =>
	fetch('http://api.open-notify.org/astros.json')
		.then(res => res.json());

const spaceNames = () => 
	getPeopleInSpace()
		.then(json => json.people)
		.then(people => people.map(p => p.name))
		.then(names => names.join('\n '));

spaceNames()
	.then(console.log);

// const spacePeople = () => {
// 	return new Promise((resolve, rejects) => {
// 		const api = 'http://api.open-notify.org/astros.json';
// 		const request = new XMLHttpRequest();
// 		request.open('GET', api);
// 		request.onload = () => {
// 			if( request.status === 200) {
// 				resolve(JSON.parse(request.response));
// 			} else {
// 				rejects(Error(request.statusText));
// 			}
// 		};
// 		request.onerror = err => rejects(err);
// 		request.send();
// 	});
// };

// spacePeople().then(
// 	spaceData => console.log(spaceData),
// 	err => console.error(
// 		new Error('Cannot load space people')
// 	)
// );