//Async_with_fetch


// const githubRequest = async(loginName) => {
// 	try {
// 		var response = await fetch(`https://api.github.com/users/${loginName}/followers`);
// 		var json = await response.json();
// 		var followerList = json.map(user => user.login);
// 		console.log(followerList);				
// 	} catch(e) {
// 		console.log("Data didn't load", e);
// 	}
// };

// githubRequest('Ethan-Arrowood');



(async(loginName) => {
	try {
		var response = await fetch(`https://api.github.com/users/${loginName}/followers`);
		var json = await response.json();
		var followerList = json.map(user => user.login);
		console.log(followerList);				
	} catch(e) {
		console.log("Data didn't load", e);
	}
})('Ethan-Arrowood');


//If we didn't use async and wait then getting error

Data didn't load TypeError: response.json is not a function
    at Async_with_fetch.js:22
    at Async_with_fetch.js:28

    