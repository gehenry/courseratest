// var company = new Object();
// company.name = "Facebook";

// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.lastName = "Zuckerberg";
// company.ceo.favColor = "blue";
// console.log(company);
// console.log(company.name + "'s CEO name is : " + company.ceo.firstName + " " + company.ceo.lastName);

//BEtter way: object literal

// var facebook = {
// 	name: "Facebook",
// 	ceo: {
// 		firstName : "Mark",
// 		favColor : "blue"
// 	}, //ceo object
// 	"stock of company": 110
// }; //facebook object

// console.log(facebook);

// function multiply(x,y){
// 	return x * y;
// } //end of func multiply

// console.log(multiply(5,3));
// multiply.version = "v.1.0.0";
// console.log(multiply.version);

// //Function factory

// function makeMultiplier(multiplier){
// 	var myFunc = function(x){
// 		return multiplier * x;
// 	}; //end of myfunc

// 	return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));

// function makeMultiplier(multiplier){
// 	var myFunFunc = function(x){
// 		console.log("multiplier: " + multiplier);
// 		return multiplier * x;
// 	};

// 	return myFunFunc;
// }


// var operation = makeMultiplier(15);

// console.log(operation(10));


