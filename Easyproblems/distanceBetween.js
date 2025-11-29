//you are given two coordinates(x1,y1) and (x2,y2) of two-dimensional graph.
//find the distance between them

// we will use the pathogrean formulae to work this out
function findDistance(x1, x2, y1, y2) {
    let results = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
    console.log(results.toFixed(6))
}

findDistance(3, 4, 4, 3)