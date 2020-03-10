let mobil = {
    tahun : 2000,
    merek : 'Toyota',
    harga : 10000
}
let mobil2 = {...mobil, jumlahPintu: 4}// bisa push
// belajar spread   (...arr)
// buka bungkusan
let arr= [1,2,3]
let arr2= [4,5,6]
console.log(arr)
console.log(...arr)
console.log(1,2,3)
console.log([...arr,...arr2]) //new way to push
console.log([...arr, 17])
console.log(arr) //originalnya tetap original
console.log(mobil)
console.log(mobil2)
console.log({...mobil2, merek: 'Mercedes'})// bisa edit