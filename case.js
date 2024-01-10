// *********Question no.1*********

let arr=[4,5,6,7,8];
let firstElement = arr[0];

function isprime(n){
    if ( n==1){
        return  console.log("is not a prime number")
    }

        for(var i=2; i < n; i++){
            if (n % i ===0){
             return  console.log("is not a prime number")
            }
        }
return console.log("is a prime number");
    }

isprime(firstElement)

// **********Question No.2*************

const arr2 = [1, 2, 2, 2, 1, 4, 5, 6, 2];

function mostFrequentItem() {
    let result;
    let maxCount = 0;

    for (let i = 0; i < arr2.length; i++) {
        
        const elementS = arr2[i];

        let count = 0;

  
        for (let j = 0; j < arr2.length; j++) {
            
            const elementD = arr2[j];

            if (elementS === elementD){
                count++;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            result = elementS;
        }
    }

    console.log(`The most frequent number is: ${result}`);
}


mostFrequentItem(arr2);

// *****Question No.3******

for (let i = 1; i <= 15; i++) {
    if (i%2===0) {
        console.log("is even number")
    }
    else{
        console.log('is odd number')
    }
}

    // *****Question No.4**********

    let arr3= [1,2,3,4,5];
    let sumofsquares = 0;
    
for (let i = 0; i < arr3.length; i++) {
    sumofsquares += arr3[i] * arr3[i];
    
}

console.log("sumofsquares:", sumofsquares);
