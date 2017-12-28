//Arrowfunctions


// var studentList = function(students) {
// 	console.log(students);
// };


// studentList("Joe", "Himanshu", "Sam");


// var studentList = students => console.log(students);


// studentList(["Joe", "Himanshu", "Sam"]);


// var person = {
// 	first: "Doug",
// 	actions: ['bike', 'hike','ski', 'surf' ],
// 	printActions: function() {
// 		// var _this = this;
// 		this.actions.forEach(function(action) {
// 			var str = this.first + " likes to " + action;
// 			console.log(str);
// 		}.bind(this));
// 	}
// };

// person.printActions()

var person = {
	first: "Doug",
	actions: ['bike', 'hike','ski', 'surf' ],
	printActions() {
		this.actions.forEach(action => {
			var str = this.first + " likes to " + action;
			console.log(str);
		});
	}
};

person.printActions()