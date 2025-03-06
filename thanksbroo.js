// Given an array of names, write a program that prints a thank your message for each of the user. Sample output: "Thank you user for the birthday gift", where "user" is the name(s) from the array

let myGees = ["Clement","Raymond","Gladness","Kingsley"];
let i = 0;

while(i < myGees.length){
    console.log(`Thank you ${myGees[i]} for the birthday gift`)
    i++
};