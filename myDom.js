// ______________________Document Object____________________

// console.dir(document);
// // console.log(document.forms[0]);
// // console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello"
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// ____________________GET ELEMENTBYID_________________________

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Hello dude"
// headerTitle.innerText = "JavaScript"
// console.log(headerTitle.textContent) 
// console.log(headerTitle.innerText)

// textContent vs innerText
// 1) textContent after display: none also applying styling
// 2) innerText no applying
// headerTitle.innerHTML = '<h3>HelloBuddy</h3>';
// header.style.borderBottom = "solid 3px #000"

// ________________GET ELEMENTSBYCLASSNAME______________________

// var items = document.getElementsByClassName('list-group-item');
// console.log(items)
// items[3].textContent = "Hello";
// items[3].style.backgroundColor = "cyan"

//Gives error
// items.style.backgroundColor = "yellow";

// for (var i = 0; i < items.length; i++) {
// 	items[i].style.backgroundColor = "#f4f4f4";	
// }


// _____________________GET ElEMENTSBYTAGNAME________________________

// var li = document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent = "Helo DOM"


//querySelector

// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px gray"

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "send"

// var item = document.querySelector('.list-group-item');
// 	item.style.color = "red";

// var lastItem = document.querySelector('.list-group-item:last-child');
// 	lastItem.style.color = "green";

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// 	secondItem.style.color = "blue";

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// 	thirdItem.style.color = "cyan";


// ____________________querySelectorAll___________________________

// var items = document.querySelectorAll('.list-group-item')
// console.log(items);
// items[0].textContent = "Hello Item"

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (var i = 0; i < odd.length; i++) {
// 	odd[i].style.backgroundColor = "gray";
// }


// ____________________Traversing the DOM___________________________

var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement.parentElement.parentElement);


//childNodes

// console.log(itemList.childNodes)
// console.log(itemList.children);

//firstChild
// console.log(itemList.firstChild)

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "firstElementChild textContent"
// itemList.firstElementChild.style.backgroundColor = 'cyan';

//nextSibling
// console.log(itemList.nextSibling)

//nextElementSibling
// console.log(itemList.nextElementSibling)

//previousSibling
// console.log(itemList.previousSibling)

//previousElementSibling
// console.log(itemList.previousElementSibling)


//createElement

//create div

// var newDiv = document.createElement('div');

// // Add class
// newDiv.className = "Hello"

// // Add id
// newDiv.id = "hello01"

// //Add attr
// newDiv.setAttribute('title', 'Hello Div')

// //create  text node
// var newDivText = document.createTextNode('Hello wolrd');

// //Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
 
// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = "30px";

// console.log(newDiv);




var newDiv = document.createElement('div');
newDiv.className = "newdivclass";
newDiv.id = "newid";
newDiv.setAttribute('title', 'newattr');

var newDivText = document.createTextNode('Hello JS Developer');
newDiv.appendChild(newDivText);

var form = document.querySelector('header .container');
var h2 = document.querySelector('header h1');
form.insertBefore(newDiv, h2);


console.log(newDiv)
