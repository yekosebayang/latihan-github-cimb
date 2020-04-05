const pecah = (str) =>{
    arrMasak =  str.toLowerCase().split('')
    hasil = ``
    for (let i=0; i < arrMasak.length; i++){
        let k = 0
        console.log('index arrmasak ke '+ (i+1) + ' ' + arrMasak.indexOf(arrMasak[i]))
        while (k<=arrMasak.indexOf(arrMasak[i])){
            hasil += arrMasak[i]
            // console.log(k)
            // console.log(hasil)
            k +=1
            arrMasak[i] = '.'
        }
    }
    return hasil
}

console.log(pecah('hello'))