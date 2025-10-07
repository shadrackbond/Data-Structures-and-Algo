/*
we need an array to store the contacts
we need a target
we need a loop to search through the contacts array
*/

const contactList = ["John Doe", "Martha James", "Arthur Pentdragon", "Merlin Oaks", "Tony Stark", "Black Panther"];

function searchContact(collection,target){
    for(let i = 0; i<collection.length; i++){
        if(collection[i] === target){
            return `${target} has been found at position ${i}`
        }
    }
    return null;
}

const display = searchContact(contactList, "Black Panther");
console.log(display)
