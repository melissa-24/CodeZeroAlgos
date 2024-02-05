// Bubble Sort Algorithm

// Think of Bubble Sort like arranging a line of guppy fish in ascending order of size. You compare adjacent fish and swap them if they are out of order. You keep doing this until the entire line is sorted.

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) { // i = 0; i < 7; i++ | 0
        for (let j = 0; j < n - i - 1; j++) { // j = 0; j < 7 - i; j++ | 0 | 1 | 2
            if (arr[j] > arr[j + 1]) { // j > j+1 | 64 > 34 | 64 > 25 | 64 > 12
                let temp = arr[j]; // temp = 64 | 64
                arr[j] = arr[j + 1]; // arr[j] = 34 | 25
                arr[j + 1] = temp; // arr[j+1] = 64 | 64
            }
        }
    }
    return arr;
}
let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = bubbleSort(unsortedArray);
console.log("Sorted Array:", sortedArray);

// Line 5 = Create a job called bubbleSort that takes a list of information to work the instructions for the job will follow
// Line 6 = Creating a variable called n setting it equal to the number of items in the list (like nickles in a row)
// Line 8 = Checking each item in the list one by one (looking at each nickle) => for loop - starting at 0 going till no longer less than n-1 increasing by 1 each loop
// Line 9 = starting another check to look at each item
// Line 10 = If current value is greater than the next index's value
// Line 11 = Creating variable temp setting it equal to the current value at the second loops current index
// Line 12 = Setting current value at second loops current index to that plus 1 meaning next index
// Line 13 = Setting the next index to what was current value

// given a pile of nickles that are different years out of order.
// create a loop to check each one from top to bottom
// create a second loop to move the same but have if statement to check of the top nickle younger than the next one swap them till the top nickle is no longer the younger nickle then move to the next one and keep going
// Basically you are focusing on the 1st nickle and getting it into place amongst the other nickles each time you restart the 2nd loop the 1st loop is to jut repeat the 2nd loop till you have reach the full length of items