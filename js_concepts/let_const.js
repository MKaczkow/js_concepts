// var -> scope is function
function sayHello() {
    for (var i=0; i<5; i++) {
        console.log(i);
    }

    console.log(i);
}

// let -> scope is block
function let_sayHello() {
    for (let i=0; i<5; i++) {
        console.log(i);
    }

    // console.log(i);  -> should cause error
}

// const -> scope is block; creates constant
const x = 1;
// x = 2;   -> should cause error

let_sayHello();
//sayHello();

// so, const is better than let, let is better than var

