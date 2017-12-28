function print(firstName) {
	// console.log("Hello " + firstName);
	//console.log(`Hi ${firstName}`);
}

print("Himanshu");

function createEmail(firstName, purchasePrice) {
	var shipping = 5.95;
	console.log(
		`Hi ${firstName}, Thanks for buying from us!
			Total: $${purchasePrice}
			Shipping: $${shipping}
			Grand Total: $${purchasePrice + shipping};
		`
	);
}

createEmail("Himanshu", 100);