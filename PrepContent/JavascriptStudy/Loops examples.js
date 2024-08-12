array.push(value);

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

const fruit = 'apple';
switch (fruit) {
    case 'apple':
        console.log('Apple');
        break;
    case 'banana':
        console.log('Banana');
        break;
    default:
        console.log('Unknown fruit');
}

//return; returns out of the entire function
//break; breaks out of the current loop
//continue; skips to the next itteration

function example() {
    console.log('This will be printed');
    return; // Exits the function
    console.log('This will not be printed'); // This line is never reached
}

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        break; // Exits the loop when i is 2
    }
    console.log(i); // Outputs: 0, 1
}

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skips the current iteration when i is 2
    }
    console.log(i); // Outputs: 0, 1, 3, 4
}

// modulo %