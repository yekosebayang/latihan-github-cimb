class Produk{
    constructor(nama, harga, stock){// kalo ga ada di parameter tapi ada di dalam class, pasti kepanggil
        this.nama = nama 
        this.harga = harga 
        this.stock = stock
        this.qty = 0 // im talkin about this guy
    } 
}
class EmpatSehat extends Produk{
    constructor(nama, harga, stock, warna){
        super(nama, harga, stock) //penamaan tidak harus sama dengan atasnya(parent) >> nama, ttl, asal << || penamaan ini untuk declare parentnya
        this.warna = warna // ini tambahan ke parent-nya || bisa tembak langsung
    }
}

class Phone extends Produk{
    constructor(nama, harga, stock, garansi){
        super(nama, harga, stock)
        this.garansi = garansi
    }
} 

class Baju extends Produk{
    constructor(nama, harga, stock, size){
        super(nama, harga, stock)
        this.size = size
    }
}

let produkLet =[
    [new EmpatSehat ("Anggur", 2, 15, "Hijau"),
    new EmpatSehat ("Apel", 3, 15, "Merah")],
    [new Phone ("Grande", 100, 5, 1),
    new Phone ("Swift", 90, 5, 0)],
    [new Baju ("FiEstA", 6, 12, "S"),
    new Baju ("DurabEx", 9, 14, "L")],
]
// produkLet[0].push(new EmpatSehat("Kentang", 12,1,"Coklat"))
// // console.log(produkLet.length)    
// // console.log(produkLet[0].length)
// // console.log(produkLet[0][2].stock)        
// console.log(produkLet[0][2].nama)    
// // console.log(produkLet[0][2].qty)    
// console.log(produkLet[0].sort(EmpatSehat))

const jamet = (tiara) => {
    if (tiara == 'nama'){
        produkLet.sort(function(a,b){
        const orangA = a.kentang.toUpperCase();
        const orangB = b.kentang.toUpperCase();

        let comparison = 0;

        if (orangA > orangB) {
            comparison = 1;}
        else if (orangA < orangB) {
            comparison = -1;}
            if (isNama == true){
                isNama = !isNama
                return comparison}
            else{
                isNama = !isNama
                return comparison*-1
            }
        }
        )
    }
}

