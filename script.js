// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Did parents allow you?');
//   }
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// }

// // is else required? is there any difference in behavior of these two variants?
// // doesnt looks like, because if IF not true, then return. only two options regardless.	

// /Rewrite the function using '?' or '||'/

// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	} else {
// 		return confirm("Did parents allow you?");
// 	}
// }

// function checkAge(age) {
// 	return (age > 18 ? true : "did parents allow?");
// }

// function checkAge(age) {
// 	return ((age > 18) || "Did parents allow?");
// }

// //write a function min(a,b) which returns the least of two numbers a and b.
// //for instance:

// /min(2,5) == 2
// min(3, -1) == -1
// min(1, 1) == 1/

// function getMin(a, b) {
// 	if(+a > +b) {
// 		return b
// 	} else {
// 		return a
// 	}
// }

// /alternatively/

// function getMin(a, b) {
// 	return a < b ? a : b
// }

// // write a function pow(x,n) that returns x in power n, or, in other words, multiples
// //x by itself n times, and returns the result.

// /pow(3,2) = 3 * 3 = 9;
// pow(3,3) = 3 * 3 * 3 = 27;
// pow(1, 100) = 1 * 1 * ... * 1 = 1;/

// /create a web page that prompts for x and n and returns pow(x,n)

function pow(x,n){
	let result = 1;
	x = prompt("Choose a number");
	n = prompt("How many times you want to exponentiate it?");
	for(i = n; i > 0; i--) {
		result = result * x;
	} console.log(result);
	return alert(result)
}