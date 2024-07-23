
function main(){

    let numbers = [];
    
    console.log(numbers);
    for(let i = 1; i<=20; i++){

        if((i%2)===0){
            numbers.push(i);
        }

    }

    console.log(numbers);
}
main();

/*
(Medium) Task 5: Dynamic Arrays
Create an empty array called numbers.
Use a for loop to iterate from 1 to 20. For each iteration:
If the current number is divisible by 2, add it to the numbers array.
Log the initial state of the numbers array to the console.
After the loop, log the final array to the console.
 */