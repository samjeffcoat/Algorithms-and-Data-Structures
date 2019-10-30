
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB){
	return cleanString(stringA) === cleanString(stringB);


}

function cleanString(str){
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}


// ok so we are using the replace method to lowercase the string and take out all spaces and charachters
// then we are lower casing it to make sure they match
// then we are spliting it into an array, then sorting it and then joining it back together
// then we are comparing our values since that is what it wants. 



module.exports = anagrams;



// function anagrams(stringA, stringB) {
// 	const aCharMap= buildCharMap(stringA);
// 	const bCharMap= buildCharMap(stringB);


// 	if (Object.keys(aCharMap).length != Object.keys(bCharMap).length){
// 		return false 
// 	};


// 	for (let char in aCharMap ){
// 		if (aCharMap[char] != bCharMap[char]){
// 			return false;
// 		}
// 	}
// 	return true;

// }

//     function buildCharMap(str){
//     	const charMap= {};
//     	for (let char of str.replace(/[^\w]/g).toLowerCase()){
//     		charMap[char]= charMap[char] +1 || 1;
//     	}
//     	return charMap;

// }

