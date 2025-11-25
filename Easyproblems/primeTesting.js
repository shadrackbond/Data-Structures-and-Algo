//Given a positive integer, check if the number is prime or not.
//prime number is a number greater than 1 that is divisible with 1 or itself
//output true or false

function findPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false
        }
    }

    return true
}

console.log(findPrime(10))