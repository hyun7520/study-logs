// prompt is not used 
const age = parseInt(prompt("How old are you"));

// console.log(typeof age, typeof parseInt(age));

console.log(isNaN(age));

if (isNaN(age) || age < 0) {
    console.log("Please Write a positive number");
} else if (age < 18) {
    console.log("Not Good");
} else if (age >= 18 && age <= 50) { // || or , && and
    console.log("Good");
} else {
    console.log("Good");
}