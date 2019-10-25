// n is the number of the arguments giving, fibonacci is a constant output of the numbers given, so if we have 8 as fibonnaci then we should get get a result of (0, 1, 1, 2, 3, 5, 8, 13)




// function fib(n) {
//     if (n === 1)
//         return [0,1]
//     else 
//     {
//         const x = (n-1);
//         x.join(x[x.length-1]+ x[x.length-2]);
//         return x; 
//     }

//     // if (pal === str)
//     //     return true
//     // else
//     //     return false 

// }

// console.log(fib(1))
// console.log(fib(2))


function fibonacci(n){
    const result = [0, 1];
    for (i = 2; i <=n; i ++ ){
        const a = result[i-1];
        const b = result[i-2];

        result.push(a+b);


    }
    return result[n];


}

console.log(fibonacci(8))


function F(n) {
    if (n == 0) {
        return 0;
    } if (n == 1) {
        return 1;
    } else {
        return F(n - 1) + F(n - 2);
    }
}

console.log(F(8))

function balancedBrackets(string) {

    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{':'}'
    }
    for (let i = 0; i < string.length; i++) {
        if (string[i]=== '(' || string[i]==='[' || string[i] ==='{') {
            stack.push(string[i]);
        }
        else{
            let last = stack.pop();

            if (string[i] !== map[last])
                return false; 
        }
    }
        if (stack.length  !==0)
            return false;
    return true;
}

console.log(balancedBrackets("[(])"))
console.log(balancedBrackets("foo(bar)baz"))