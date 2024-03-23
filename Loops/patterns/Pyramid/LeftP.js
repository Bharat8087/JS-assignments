//const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter the height of the triangle: ', (height) => {
//     height = parseInt(height);

var height = process.argv[2];
// if (isNaN(height) || height <= 0) {
//     console.log("Please enter a valid positive number for the height.");

//     return;
// }

for (let i = 1; i <= height; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

// rl.close();
//});