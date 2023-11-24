/**
 *  
 */

 function sortDescending(inputArray) {
    var n = inputArray.length;

    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {            
            if (inputArray[j] < inputArray[j + 1]) {
                var temp = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = temp;
            }
        }
    }
}

// Example
var numbers = [6, 2, 0, 1, 4, 9];
console.log("Original inputArray: ", numbers);

sortDescending(numbers);

console.log("Sorted inputArrayay (Descending): ", numbers);

