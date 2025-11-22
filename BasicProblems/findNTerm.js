//given two intergers a and b the first and second terms of an arithmetic series respectively,
//the problem is to find the nthe term in the series

function findNTerm(a, b, n) {
    //c is the difference of the numbers
    //n is the term to which we should increase the number of times c
    let nth = a;
    c = b - a;
    for (let i = 1; i < n; i++) {
        nth += c;
        console.log(nth)
    }

}

findNTerm(2, 3, 4);

//using arithmetic progression formula

function usingForlmula(a, b, n) {
    let term = a + (n - 1) * (b - a);
    console.log(term)
}

usingForlmula(2, 3, 4)