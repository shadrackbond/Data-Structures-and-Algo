//Given a number n, check whether it is even or odd. Return true for even and false for odd
//First approach checking using the reminder

function isEven(n) {
    let rem = n % 2;
    if (rem == 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

isEven(15)

//Using Bitwise AND operator
/*The last bit of all odd numbers is always 1, while for even numbers its 0.
When performing bitwise AND operation with 1, odd numbers give 1 and even give 0.
*/

function isEven(n) {
    if ((n & 1) === 0) {
        console.log(true);
    }
    else {
        console.log(false)
    }
}

isEven(4)

