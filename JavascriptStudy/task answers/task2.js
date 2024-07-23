function main(){

    let object = {
        name: "Anthony",
        age: 25,
        address:{
            city:"somewhere",
            street:"somewhere else"
        }
    }

    console.log(object.name);
    console.log(object.address.street);
    console.log(object.address.city);

}
main();

/*
(Easy)Task 2: Objects
Create an object person with properties: name, age, and address (which is another object with street and city).
Log the name and street properties to the console.
 */