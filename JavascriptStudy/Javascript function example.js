const search = 1;

function main () {
    let numberArray = [5,2,10,1,6,8,4,1]; // array declaration
    const x = numberArray.length; // this will show as 8
    console.log(x);

    for (let i = 0; i < x; i++){
        if(search == numberArray[i]){
           console.log("1 exists and it's index is: " + i);
        }else{
            console.log(`index: ${i} is not 1`);
        }
    }
}

main();