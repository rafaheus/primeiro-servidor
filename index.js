const { uniq } = require('lodash');
const {arrayNumeros, arrayLetras} = require('./array.js'); // ou apenas ./array

console.log(arrayLetras);
console.log(arrayNumeros);


const arrayNumeroUnico = uniq(arrayNumeros);
const arrayLetraUnica = uniq(arrayLetras);

console.log(arrayNumeroUnico);
console.log(arrayLetraUnica);