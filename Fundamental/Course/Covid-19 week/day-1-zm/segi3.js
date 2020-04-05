const persegi = () => {
    for (let i = 0; i <= 4; i++) {
      let hasil = ""
      for (let j = 0; j <= 4; j++) {
        hasil += "*"
      }
    console.log(hasil);
    }// empat x empat
}

const sikuKiri = () => {
    for (let i = 0; i <= 4; i++) { //i = 0, 
        let hasil = "";
        for (let j = 0; j <= i; j++) { // saat i = 0, print bintang 1x, naik ke for atas, jarak close loop
            hasil += '*'//loop nya nambah, bintang yang ditulis juga nambah
        }
         console.log(hasil);
      }// bikin segitiga |\    
}

const sikuKanan = () => {
    for (let i = 0; i <= 4; i++) { //i = 0, 
        let hasil = "";
        for (let h = 4; h >= i; h--){
            hasil += ' '
        }
        for (let j = 0; j <= i; j++) { // saat i = 0, print bintang 1x, naik ke for atas, jarak close loop
            hasil += '*'//loop nya nambah, bintang yang ditulis juga nambah
        }
         console.log(hasil);
      }// bikin segitiga |\    
}

const lancipBawah = () => {
    for (let i = 0; i <= 4; i++) {
        let hasil = "";
        for (let j = 0; j <= i; j++) {
            hasil += ' '}
        for (let k = i; k <= 4; k++) {
            hasil += '*'    
        }
         console.log(hasil);
      }// bikin segitiga \|      
}

persegi()