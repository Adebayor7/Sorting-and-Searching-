// Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.
// Each time we take a new card we put it in the right place in our hand. 
// Each time work only with the first i-1 element from of the array
// Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1

function sortItems(arr){
    for (let i = 0; i < arr.length-1; i++){
        for (let j = 0; j < arr.length-1; j++){
            if (arr[j] > arr[j+1]){
                let tempSort = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tempSort;
            }
        }
    }
    return arr;
}

console.log(sortItems([3,8,99,6,2,5]));