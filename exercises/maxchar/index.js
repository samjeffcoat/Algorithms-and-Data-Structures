// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
// take our string and convert to an object, and key it up
//assign our charMap to an empty object
// set initial max to 0
//maxChar is set to empty string

// for loop to set up an object with keys, and assign those values to each letter or charachter

// The for...of statement creates a loop iterating over iterable objects, 
//The only difference is over what they iterate: for..in iterates over all enumerable property keys of an object. for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.




function maxChar(str) {

	const charMap = {};
	let max = 0;
	let maxChar= '';

	for(let char of str){
		if(charMap[char]){
			charMap[char]++;
		} else {
			charMap[char]=1;
		}


	}

	for (let char in charMap){
		if (charMap[char]> max){
			max= charMap[char];
			maxChar = char;
		}
	}










return maxChar;


}

module.exports = maxChar;