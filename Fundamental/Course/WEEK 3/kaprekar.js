arrAngka = [2]
const cekJumlah = () => {
    while (arrAngka.length < 4){
        arrAngka.push(0)
    }
    return arrAngka
}

const fungsiSort = (susun) => {
    // console.log(arrAngka + ' arrangka di fnsort')
    arrAngka.sort(function(a,b){
        let comparison = 0;
        if (a > b) {
            comparison = 1}
            // console.log(comparison + ' a>b')
        else if (a < b) {
            comparison = -1;}        
            if (susun == 'asc'){
                // console.log('masuk if' + comparison)
                return comparison*1}
            else if (susun == 'desc'){
                // console.log('masuk else')
                return comparison*-1}
        })
        // console.log(arrAngka + ' arrangka setelah disort')
        return(arrAngka)
}

const themeat = () => {
    let kaprekar = 0
    let count = 0
    while (kaprekar != 6174){
        cekJumlah()
        let kaprekarAsc = parseInt(fungsiSort('asc').join(''))
        let kaprekarDesc = parseInt(fungsiSort('desc').join(''))
        kaprekar = kaprekarDesc - kaprekarAsc
        arrAngka = kaprekar.toString().split('')
        count +=1
        // console.log(arrAngka + ' habis kaprekar')
        console.log(kaprekarDesc+' - '+kaprekarAsc +' = '+kaprekar +' '+ count +'x')
        if (kaprekar == 0){
            kaprekar = 6174
            console.log('angka tidak bisa di kaprekar')
        }
    }
}
themeat()
// console.log(arrAngka + ' 1st')
// cekJumlah()
// console.log(arrAngka + ' ditambah 0')
// let kaprekarAsc = parseInt(fungsiSort('asc').join(''))
// let kaprekarDesc = parseInt(fungsiSort('desc').join(''))
// console.log(kaprekarAsc + ' ASC')
// console.log(kaprekarDesc + ' DESC')
