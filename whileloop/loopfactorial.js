//. Calculating Factorial Using While Loop in JavaScript


let num = 5;
let factorial = 1;
let i =  num;
while (i > 0){
    factorial *= i;
    i--;
};
// console.log(60*2)
console.log(`factorial of ${num} if ${factorial}`);