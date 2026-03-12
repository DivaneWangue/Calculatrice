import { addition } from './function/addition.js';
import { squareroot } from './function/square_root.js';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Premier nombre : ', (a) => {
    rl.question('Deuxième nombre : ', (b) => {
        const result = addition(parseFloat(a), parseFloat(b));
        console.log('Résultat :', result);
        rl.close();
    });
});
