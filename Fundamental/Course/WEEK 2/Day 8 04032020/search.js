// diberikan Sebuah ARRAY
// jika input "a" semua array yang ada "a/A" nya, terpanggil

// 1. ada for untuk pemanggilan setiap array yang ada A nya
// 2. ada function untuk mengecek apakah A ada di stiap array apa engga

// PRIMITIVE
class Cinca{
    constructor(nama, harga, stock){
    this.nama = nama
    this.harga = harga
    this.stock = stock
    }
}
let arr= [
    new Cinca("Apel", 3000, 2),
    new Cinca("Apple", 4000, 2),
    new Cinca("Amazoon", 12000, 2),
    new Cinca("Horizon", 11000, 2),
    new Cinca("Iron", 5000, 2),
    new Cinca("Megatron", 18000, 2),
    new Cinca("Steel", 22000, 2),
    new Cinca("Peeler", 1000, 2),
]

let arrN=[-7,-2,1,3,2,4,5,2,-12]
const searchProductName = str => {
    return arr.filter((value) => value.nama.toLowerCase().includes(str.toLowerCase()))
}
const searchProductPrice = (min, max) => {
    return arr.filter(value => value.harga >= min && val.harga <= max)
}
const searchPositive = arrN => {
    let pos = arrN.filter(value => value > 0)
    let neg = arrN.filter(value => value >= 0)
    return [pos.reduce((a, b) => a + b), neg.reduce((a, b) => a + b)]
    }

// console.log(searchProductName('ap'))
// console.log(searchProductPrice(5000, 7000))
console.log(searchPositive())