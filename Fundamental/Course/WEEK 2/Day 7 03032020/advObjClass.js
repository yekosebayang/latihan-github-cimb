// let orang = [
//     {
//         nama: 'Corona-Ind',
//         ttl : 'Depok',
//         asal: 'Wuhan',     
//         spcl: 'Threatening Country',
//         expr: '3 days'
//     }
// ]

// cetakan
// function cetakanOrang(nama, ttl, asal){ 
//     return{
//         nama, // gaperlu nama: x, karena sudah sama dengan paramater
//         ttl,
//         asal
//     }
// // }
// let a = 

// camalCase for variable
class Person{       //lain dengan variable, class harus menggunakan kapital disetiap awal kata
    constructor(nama, ttl, asal){
        this.nama = nama //yg kanan amabil dari paramater constructor
        this.ttl = ttl  //yg kiri dari class
        this.asal = asal

    } 
}

class Developer extends Person{
    constructor(a, b, c, spcl, exps){//declare paramater constrtctr
        super(a,b,c) //penamaan tidak harus sama dengan atasnya(parent) >> nama, ttl, asal << || penamaan ini untuk declare parentnya
        this.specil = spcl // ini tambahan ke parent-nya || bisa tembak langsung
        this.experiences = exps // jadi parentnya nambah specialty, dan pengalaman
    } 

}

let a = new Person('Kasep', '1980', 'Sunda')
let b = new Person('Kasep2', '1982', 'Sundanese')
let c = new Developer('a','b', 'c', 'tempat specialty', 'tempat pengalaman')
console.log(c)