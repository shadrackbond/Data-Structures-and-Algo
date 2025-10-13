target = 7;

function binarySearch(list,target){
    var first = 0;
    var last = list.length -1;

    while(first <= last){
        midpoint = (first + last)/2;

        if(list[midpoint] == target){
            return midpoint;
        }
        else if(list[midpoint] < target){
            first = midpoint + 1;
        }
        else{
            last = midpoint -1
        }
    }

}

const numberArray = [1,2,3,4,5,6,7,8,9];

binarySearch(numberArray, target);