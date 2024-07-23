
function main(){

    let targetNumber = 4;
    let arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    for(let i = 0; i < arrayNumbers.length; i++){
        if(arrayNumbers[i]===targetNumber){
            console.log(i);
            break;
        }else if((arrayNumbers[i]%3)===0){
            continue;
        }else if(i === (arrayNumbers.length-1) & arrayNumbers[i]!= targetNumber){
            console.log("Target not found");
            return;
        }
    }
}
main();

/*

(Hard) Task 6: If Statements and Control Structures
Create a function findNumber that takes an array of numbers and a target number. The function should:
Loop through the array.
If the target number is found, log the index and exit the loop using break.
If the current number is divisible by 3, skip the current iteration using continue.
Log "Target not found" if the loop completes without finding the target.

 */