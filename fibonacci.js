//5. Generating Fibonacci Sequence up to N Terms with While Loop

// in fibonacci sequence each subsequent term is the sum of the previous two terms.

// let n = 10;

// let a = 0;
// let b =1;
// let count = 1;
// console.log(a);

// while (count < n){
//     console.log(b);
//     let addingPreviousNumber = a + b;
//     a = b;
//     b = addingPreviousNumber;
//     count++;
// }


let n = 10
let seq = "0, 1"
let counter = 0
let prev1 = 0
let prev2 = 1

while(n > counter) {
    current = prev1+prev2
    seq = ${seq}, ${current}
    prev1 = prev2
    
    prev2 = current
    
    counter++

    if(counter == (n-2)){
        break;
    }
}