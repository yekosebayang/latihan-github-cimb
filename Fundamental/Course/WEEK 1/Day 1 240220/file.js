// var, let, const
// var melakukan ovrwrite, jika ada penggunaan variable yang sama
// penggunaan let, dan const mencegah/mengindikasi jika ada penggunaan nama variable yang sama

//var container = '1'/* |string, dibungkus dengan tanda kutip */
//var container = 2 // akan me-rewrite

//let kutip = "Batman's City Called " + '"Gotham"' //cara menggunakan banyak kutip. |string concatination.


//console.log(container)
//================================================================================
let city = '"Gotham"'
let ownr = "Batman"

//"Gotham" is the city of batman
//simplenya : console.log(city + ' is the city of ' + ownr) | dapat menerima banyak parameter.
//antar var bisa menggunakan ',' akan ada otomatis space, untuk var berisi string(selain '+'),
//jika menggunakan '+' pada var berisi int. isi variable akan dijumlahkan(brlku utk - + / *).  
let comb = city + " is the city of " + ownr

//parse!!
let hrga = '1000'
let pjak = 20
console.log(parseInt(hrga))// convrt data type ke data yang diinginkan.

