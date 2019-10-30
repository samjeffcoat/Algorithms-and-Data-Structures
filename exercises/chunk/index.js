// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//size is the index size

//create an empty array to hold our chunks called chunkedArray
// for each element in our unchunked array
// retrieve the last element in chunked
//if last element does not exist or its length is equal to chunk size,
//	push a new chunk into chunked with the current element
// else add the current element into the chunk

function chunk(array, size) {

	const chunked = []; 
	let index = 0;

	while (index < array.length){
		chunked.push(array.slice(index, index + size));
		index += size
	}
	return chunked;

}

module.exports = chunk;

	// const chunked = []; 
	// for (let element of array){
	// 	const last = chunked[chunked.length -1];
	// 	if (!last || last.length === size){
	// 		chunked.push([element]);
	// 	} else{
	// 		last.push([element]);
	// 	}
	// }
	// return chunked;