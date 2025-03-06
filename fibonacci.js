//5. Generating Fibonacci Sequence up to N Terms with While Loop

// in fibonacci sequence each subsequent term is the sum of the previous two terms.

let n = 10;

let a = 0;
let b =1;
let count = 1;
console.log(a)

while (count < n){
    console.log(b);
    let addingPreviousNumber = a + b;
    a = b;
    b =addingPreviousNumber;
    count++;
}