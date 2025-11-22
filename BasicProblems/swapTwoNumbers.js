//given two numbers a and b, swap them
//using a temporary value
let a = 5;
let b = 7;
let c = a;

a = b;
b = c;

console.log(a)
console.log(b)


//Array destruction

let d = 1;
let e = 3;

[d, e] = [e, d];

console.log(`the new value of d = ${d}`)
console.log(`the new value of e =${e}`)

