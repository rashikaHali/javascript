/*
	Build a waterfall function (using ES5), which:
	Takes 2 arguments (An array of asynchronous functions & a final callback function)
	Pass the result of one function to the next, and so on
	Pass the result of last function to the final callback function
	If an error occurs during any of the function’s execution, directly jump to the final callback function, with the error parameter
*/
let index = 0

function waterfall(arrayOfFunctions, finalCallback) {

	function finalCallbackModded(err) {
		if (err) {
			return finalCallback(err, arguments[1])
		}

		const rest = [];
		rest.push.apply(rest, arguments) && rest.shift()
		rest.push(finalCallbackModded)

		index += 1

		if (arrayOfFunctions[index]) {
			arrayOfFunctions[index].apply(this, rest)
		} else {
			finalCallback(null, arguments[1])
		}
	}

	arrayOfFunctions[0](finalCallbackModded)
}

const arrayOfFunctions = [
	function (doneCallback) {
		setTimeout(function () {
			console.log('FIRST');
			doneCallback(null, 'b')
		}, 100);
	},
	function (param, doneCallback) {
		setTimeout(function () {
			console.log('SECOND', param);
			doneCallback(null, 'c', 'd')
		}, 50);
	},
	function (param1, param2, doneCallback) {
		setTimeout(function () {
			console.log('THIRD', param1, param2);
			doneCallback(null, 'e')
		}, 10);
	}
]

function finalCallback(err, result) {
	console.log('err', err);
	console.log('result', result);
};

waterfall(arrayOfFunctions, finalCallback)

/*
	Output:

	FIRST
	SECOND b
	THIRD c d
	err null
	result e
*/
