// normal functions
function sum(a, b) {
    return a + b
};

function isPositive(number) {
    return number >= 0
};

function randomNumber() {
    return Math.random
};

document.addEventListener('click', function() {
    console.log('click')
});


// arrow functions with the same functionality
let sum_arrow = (a, b) => {
    return a + b
};

let sum_arrow_short = (a, b) => a + b

let isPositive_arrow = number => number >= 0

let randomNumber_arrow = () => Math.random

document.addEventListener('click', () => console.log('click'))


// testing
result = sum_arrow(3, 5);
console.log(result);
result = sum_arrow(33, 5);
console.log(result);
console.log(sum_arrow('alef', 5));
console.log(sum_arrow_short(11, 8));

