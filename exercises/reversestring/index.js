// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Turn str into an array
// call reverse method on the array
// join the array back into a string
// return the result

// this turns our string into an array by spliting it then and then reduces the charachters 
function reverse(str) {
    debugger;
    return str.split('').reduce((reversed, character)=>{
        return character + reversed; 

    });
 }

module.exports = reverse;


// function reverse(str) {
//     return str.split(' ').reverse().join(' ');


// }

// function reverse(str) {
//     let reversed = ' ';

//     for (let character of str) {
//         reversed = character + reversed;

//     }

//     return reversed;
// }
