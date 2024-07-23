
function main(){

    let n = 14

    for(let i = 1; i < n; i++){

        if(((i%3)===0) & ((i%5)===0)){
            console.log("FizzBuzz");
        }else if((i%5)===0){
            console.log("buzz");
        }else if((i%3)===0){
            console.log("Fizz");
        }else{
            console.log(i);
        }
    }

}
main();

/*
(Medium) Task 4: Loops and Functions
Create a function printNumbers that takes a number n and prints all numbers from 1 to n using a for loop.
Inside the loop, if the number is divisible by 3, log "Fizz". If it is divisible by 5, log "Buzz". If it is divisible by both 3 and 5, log "FizzBuzz". Otherwise, log the number itself.

 */