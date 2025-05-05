const NumberToWords = require('./converter');

const converter = new NumberToWords();

// NOTES : Edit this to change result
console.log(converter.ToWords(12345));
console.log(converter.ToWords(1000000));
console.log(converter.ToWords(999999999));
