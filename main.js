var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit	
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

//Add Item
function addItem(e) {
	e.preventDefault();

	//Get input value
	var newItem = document.getElementById('item').value;

	//Create new li element 
	var li = document.createElement('li');

	//Add class
	li.className = 'list-group-item';

	//Add text node with the input value
	li.appendChild(document.createTextNode(newItem));

	//Create a del button element
	var deleteBtn = document.createElement('button');
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
	console.log(deleteBtn);

	deleteBtn.appendChild(document.createTextNode('X'));
	li.appendChild(deleteBtn);

	itemList.appendChild(li);
}


//Remove Items

function removeItem(e) {
	if (e.target.classList.contains('delete')) {
		if (confirm('Are You Sure?')) {
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}