//given two integers n and m. Find the number closest to n and divisible by m. If there is more than one such
//number, then output the one having the maximum absolute value
//Iterating through the numbers O(m)TIME O(1) SPACE
let closest = 0;
let minDifference = Infinity;

function closestDivisible(n, m) {
    for (i = n - Math.abs(m); i < n + Math.abs(m); i++) {

        if (i % m == 0) {
            let difference = Math.abs(n - i);
            if (difference < minDifference || (difference === minDifference && Math.abs(i) > Math.abs(closest))) {
                closest = i;
                minDifference = difference
            }
        }

    }
    return closest;

}

console.log(closestDivisible(-15, 6))

//By finding quotient O(1)TIME and O(1)SPACE

function closestNumber(n, m) {

    let q = parseInt(n / m);
    let b = m * q;
    let c = (n * m) > 0 ?
        (m * (q + 1)) : (m * (q - 1));

    if (Math.abs(n - b) < Math.abs(n - c))
        return b

    return c;
}

console.log(closestNumber(13, 4))