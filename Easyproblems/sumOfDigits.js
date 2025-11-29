//Given a number n, find the sum of its digits

//n is the variable that will store the number to be splitted
const n = 687;
//arrayString is the variable array I want to store the splitted n and I
//can use it to be looped for sum
let arrayString = n.toString().split("")
//to store the sum
let sum = 0;
console.log(n);
console.log(arrayString)
//looping through the number to get the sum of each valueSS
for (let i = 0; i < arrayString.length; i++) {
    sum += parseInt(arrayString[i])
}

console.log(sum)
