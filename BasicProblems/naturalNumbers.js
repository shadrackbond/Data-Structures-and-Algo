//given a positive integer n, find the sum of the first n natural numbers
//using loop O(n) Time and O(1) Space

let sum = 0;
function addNaturalNumbers(n) {
    for (let i = 1; i < n + 1; i++) {
        //console.log(i);
        sum = sum + i;
        console.log(sum)
    }
}
addNaturalNumbers(6);

console.log("\n")

//using recursion O(n)Time and O(n)Space

function findSum(n) {
    if (n == 1) {
        return 1;
    }
    return n + findSum(n - 1)
}
console.log(findSum(5))

console.log("\n")


//Formula Based Method  O(1)Time and O(1) Space

function findSumFormula(n) {
    return n * (n + 1) / 2
}

console.log(findSumFormula(5))
