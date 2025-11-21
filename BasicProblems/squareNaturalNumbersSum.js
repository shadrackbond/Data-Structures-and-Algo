//given a positive integer n we have to find the sum of squares of first n natural numbers
let sum = 0;
function addNaturalNumbers(n) {
    for (let i = 1; i < n + 1; i++) {
        //console.log(i);
        let squareNumber = Math.pow(i, 2)
        sum = sum + squareNumber
        console.log(sum)
    }
}
addNaturalNumbers(2);

//using mathematicalformula

function sumNumbers(n) {
    return (n * (n + 1) * (2 * n + 1)) / 6;
}

console.log(sumNumbers(2))