// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//	recursion: always think about your base case. if trying to print numbers 10 down to 0 and stop at zero, then zero will be your base case
// 	if (row === n) then we have hit the end of our problem
// 	if the 'stair' string has a length === n then we are at the end of a row


//loop through problem and print the right number of steps

function steps(n, row = 0, stair = '') {

	//this is our base case. 
	if (n === row){
		return;
	}

	if (n === stair.length){
		console.log(stair);
		return steps(n, row +1);
	}

	if (stair.length <= row){
		stair += '#';
	} else {
		stair += ' ';
	}
	steps(n, row, stair);


}

module.exports = steps;


	// From 0 to n (iterate through rows)
	// 	create an empty string, 'stair'
	// 	from 0 to n (iterate through columns)
	// 	if the current column is equal to or less than the current row
	// 		add a # to 'stair'
	// 	else
	// 		add a space to 'stair'
	// 	console.log'stair'
	// have row and column



	// for (let row = 0; row < n; row++){
	// 	let stair = ''

	// 	for (let column = 0; column <n; column++){
	// 		if (column <= row ){
	// 			stair += '#';
	// 		} else {
	// 			stair += ' ';
	// 		}
	// 	}

	// 	console.log(stair);
	// }
