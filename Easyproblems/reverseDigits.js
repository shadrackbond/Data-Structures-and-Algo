//a program to reverse digits of a number
//given an integer n find the reverse of its digits
const n = 122;
const thisArray = n.toString().split("").reverse().join("");
console.log(thisArray)