//4. Write a program that finds the summation of every number from 1 to N. The number will always be a positive integer greater than 0.

let n = 5;
let sum = 0;

for (i = 1; i <= n; i++){
    sum+= i;
}

console.log(`summation of numbers from 1 to ${n} is ${sum}`)
// console.log(10*(10+1)/2)
