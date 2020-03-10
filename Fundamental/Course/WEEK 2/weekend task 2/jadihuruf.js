let Alphabet =(" abcdefghijklmnopqrstuvwxyz")
let arrAlphabet = Alphabet.split('')
let angkaGeser = [2,2,2]
let jadiHuruf = ''
for (let i=0; i<angkaGeser.length; i++){
    jadiHuruf += arrAlphabet[angkaGeser[i]]}
console.log(jadiHuruf)
// console.log(arrAlphabet[1])
