//Getters_and_setters.js

var attendence = {
	_list: [],
	set addName(name) {
		this._list.push(name);
	},

	get list() {
		return this._list.join(', ');
	}
};

attendence.addName = "Himanshu";
console.log("List getter:", attendence.list);
console.log("Underscore list (prop)", attendence._list);


Whats is Programming ?
Programming is the ability to take this idea in your head, break
it apart into its individual pieces, and know how to write those
pieces in the Programming

JavaScript is a C-based interpreted case-sensitive language