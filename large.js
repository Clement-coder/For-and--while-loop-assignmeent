// 6. Finding the Largest Digit in a Number Using While Loop

let num = 5482;
let largeDigit = 0;

while (num > 0){
    let lastDigit = num % 10;
    if (lastDigit > largeDigit){
        largeDigit = lastDigit;
    }
    num = Math.floor(num / 10);
};
// console.log(num % 10)
console.log("Largest digits", largeDigit);