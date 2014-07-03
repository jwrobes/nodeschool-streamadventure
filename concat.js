var concat = require('concat-stream')

	var con = concat(function (data) {
	var result = data.toString().split('').reverse().join('') + "\n"
	console.log(result)
})

process.stdin.pipe(con)

// The takeway fomr this is that concat does not pipe out a stream.
//  You can only get the concatanated results from within the callback itslef.
