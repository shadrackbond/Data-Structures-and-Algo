//Given a number n we need to print its table
//Iterative Approach Time complexity O(1): Space complexity O(1)

function multiplicationTable(n) {
    for (let i = 1; i < 11; i++) {
        let multiply = i * n;
        console.log(`${n} * ${i} = ${multiply}`)
    }
}

multiplicationTable(5)

console.log("\n")
//recursive approach

function multiplicationTable2(n, i = 1) {
    if (i == 11) {
        return;
    }
    let multiply = i * n;
    console.log(`${n} * ${i} = ${multiply}`)
    multiplicationTable2(n, i + 1)
}

multiplicationTable2(5);