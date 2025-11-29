//Given a positive integer, check if the number is prime or not.
//prime number is a number greater than 1 that is divisible with 1 or itself
//output true or false

//My original logic for this code is:
//O(n)
function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        let rem = n % i;

        if (rem === 0) {
            return false;
        }
    }

    return true;
}


//Optimized solution that goes upto the square root of n
/*
Both factors are greater than /n:
If a > /n AND b > /n, then their product a * b must be greater than /n * /n, which means a * b >n.
This contradicts n = a * b. Therefore, this case is impossible.

Both factors are less than /n:
If a < /n AND b < /n, then their product a * b must be less than n.
This also contradicts n = a * b. This case is only possible if n is very small, but mathematically, this doesn't hold for factor pairs.


One factor is less than or equal to /n and the other is greater than or equal to /n:
This is the only mathematically required case for a composite number n.
If you find one factor a such that a <= /n, then the corresponding factor b must 
satisfy b>=/n (or vice versa).
*/
//O(/n)
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
console.log(isPrime(10))
console.log(findPrime(10))