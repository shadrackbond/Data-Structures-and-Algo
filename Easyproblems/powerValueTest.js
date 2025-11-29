//given two positive numbers x and y, check if y is a power of x or not

let n = 11;

function isPower(X, Y) {
    for (let i = 0; i < n; i++) {
        //Math.pow(base,exponent): base- the number raised to a power
        //exponent: the power to which the base is raised
        let results = (Math.pow(X, i))
        if (results === Y) {
            return true;
        }
    }

    return false
}

console.log(isPower(10, 100))
//this code works but if the Y is much greater and still a power value then the results will be false
//thus we are coming up with another approach where we are going to use th ealgorithmic formula
//logy(X) = log(Y)/log(X) if the result is an integer the results will be true

function isPower2(X, Y) {
    let answer = Math.log(Y) / Math.log(X);
    return answer === Math.floor(answer)
}

console.log(isPower2(10, 100))

