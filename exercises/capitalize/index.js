  
// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//slice 

//toUpperCase

// create result which is the first charachter of the input string capitalized
// for each charachter in the string
// 	if the charter to the left has a space
// 		capitalize it and add it to result

// 	Else
// 	add it to result

function capitalize(str) {
	let result = str[0].toUpperCase()


	for( i= 1; i<str.length; i ++){
		if (str[i-1] === ' '){
			result += str[i].toUpperCase();
		} else {
			result += str[i];
		}
	}
	return result;

}


console.log(capitalize('a short sentence'));




//make an empty array of words
//split the input string by spaces to get an awway
//for each word in the array
// uppercase the first letter of the word
// join the first letter with the est of the string
// push result into words array
//join words into a string and return it

	// const words = [];




	// for (let word of str.split(' ')){
	// 	words.push(word[0].toUpperCase() + word.slice(1));
	// }

	// return words.join(' ');
module.exports = capitalize;