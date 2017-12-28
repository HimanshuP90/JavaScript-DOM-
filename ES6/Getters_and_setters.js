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