import { addition } from './function/addition.js';
import { squareroot } from './function/square_root.js';
import { multiplication } from './function/multiplication.js';
import { subtraction } from './function/subtraction.js';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Opération (+ ou -) : ', (op) => {
    rl.question('Premier nombre : ', (a) => {
        rl.question('Deuxième nombre : ', (b) => {
            const x = parseFloat(a);
            const y = parseFloat(b);
            let result;
            if (op === '+') {
                result = addition(x, y);
            } else if (op === '-') {
                result = subtraction(x, y);
            } else {
                console.log('Opération inconnue');
                rl.close();
                return;
            }
            console.log('Résultat :', result);
            rl.close();
        });
    });
});
