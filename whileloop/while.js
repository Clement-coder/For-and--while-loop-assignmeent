//3. Calculating Factorial Using While Loop in JavaScript

let n = 5;

let result = 1;
let i = 1;

while (i <= n){
    result *= i;
    i++;
}
console.log(`the factorial of${n} is ${result}`);