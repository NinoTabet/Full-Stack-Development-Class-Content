import person from './person.js'
import { car1, car2 } from './car.js';
import { createPerson } from './createPerson.js';

function main(){

    console.log(person.occupation);

    console.log(car1);
    console.log(car2);

    const localCharacter = createPerson('John Doe', 30, 'Software Developer');
    console.log(localCharacter);


}
main();