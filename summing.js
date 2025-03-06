//6. Summing the Digits of a Number with While Loop


let num = 5432;
let sum =0;
while(num > 0){
    sum += num % 10;
    num = Math.floor(num / 10);
// console.log(Math.floor(num / 10))

}

console.log("sum of didits:", sum)
// console.log(5+4+3+2)