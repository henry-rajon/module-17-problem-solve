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
else if (markes <= 39) {
    console.log('Grad F')
}
