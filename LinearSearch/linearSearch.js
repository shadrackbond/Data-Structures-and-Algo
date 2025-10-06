function indexOFItem(collection,target){
    for(var i = 0; i<collection.length; i++){
        if(collection[i] === target){
            return i;
        }
    }
    return null;
}

const names = ["Francina Vigneault", "Lucie Hansman", "Nancie Rubalcaba", "Elida Sleight"];

var index = indexOFItem(names, "Lucie Hansman");
console.log(index);


//.....Project to work on involving Linear Search algorithms....
/* 

A Simple Contact List in a small application.

Searching a small list of tasks in a to-do app.

Finding the first occurrence of a character in a short string.

Finding the minimum or maximum value in an array.
*/