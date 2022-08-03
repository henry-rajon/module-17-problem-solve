// Problem-1

var fruits = ['Apple', 'Banana', 'Orange'];

// Find the index
var index = fruits.indexOf('Banana');
// console.log(index);

// Replace

fruits[1] = 'Mango';
// console.log(fruits);

// Remove 'Orange'
fruits.pop()
// console.log(fruits);

// Add 'Watermelon'
fruits.push('Watermelon');
// console.log(fruits);


// Problem-2

var markes = 30;

if (markes >= 80) {
    console.log('Grad A');
}
else if (markes >= 60) {
    console.log('Grad B');
}
else if (markes >= 50) {
    console.log('Grad C');
}
else if (markes >= 40) {
    console.log('Grad D')
}
else{
    // console.log('Grad F')
}


// Porblem-3.1

var num1 = 130;
var num2 = 790;
var num3 = 4000;

if (num1 > num2 && num1 > num3) {
    // console.log(num1);
}
else if (num2 > num1 && num2 > num3) {
    // console.log(num2);
}
else {
    // console.log(num3);
}