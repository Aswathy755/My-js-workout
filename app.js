let arr=[1,2,5,8,9]

for (let i = 0; i <=arr.length; i++) {
    let element = arr[i];
    console.log(element)
}

let person= { name:'aswathy', age:14, place:'tsr'}
for(x in person){
    console.log(person[x]);

}

let arr2=[1,2,3,4,5,6];
let j=0;
while(j<arr2.length){
    console.log(arr2[j]);
    j++
}


const arr2 = [1, 2, 2, 2, 1, 4, 5, 6, 2];

function mostFrequentItem() {
    // Initialize variables to keep track of the most frequent element and its count
    let result;
    let maxCount = 0;

    // Iterate through the array to check each element
    for (let i = 0; i < arr2.length; i++) {
        // Get the current element to compare
        const elementS = arr2[i];
        // Initialize count for the current element
        let count = 0;

        // Nested loop to compare the current element with all other elements
        for (let j = 0; j < arr2.length; j++) {
            // Get the element for comparison
            const elementD = arr2[j];

            // Check if the elements are equal
            if (elementS === elementD) {
                // Increment the count if they are equal
                count++;
            }
        }

        // Update result and maxCount if the current element has a higher count
        if (count > maxCount) {
            maxCount = count;
            result = elementS;
        }
    }

    // Print the result after both loops have completed
    console.log(`The most frequent number is: ${result}`);
}

// Call the function to find and print the most frequent element
mostFrequentItem(arr2);
