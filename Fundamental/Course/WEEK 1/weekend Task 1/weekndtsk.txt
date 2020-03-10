// 1. Function utk hapus huruf vocal
// 2. Function utk sort array string (A-Z dan Z-A)
// 3. Function utk sort array integer (0-9 dan 9-0)
// 4. Function display angka terbesar dalam array. (Gak boleh pake Math.max())
// 5. Function ngefilter string (hanya bisa integer). (Output array isinya hanya bisa number)
// 6. Function untuk hapus huruf awal dan akhir saja 
let themeat = ['a','k','i','m','u','s','e','b','o']
let themeat2 = [0,1,2,3,4,5,6,7,8,9]
let themeat3 = [1,23,41,23,14,921,25,32,11,32]
let themeat4 = [1,"2",3,"a",4,'12']
let newa = []
// 1
function hapusVocal(){
    for (i=0; i<themeat.length; i++)
    {if ((themeat[i] == "a") || (themeat[i] == "i") || (themeat[i] == "u") || (themeat[i] == "e") || (themeat[i] == "o"))
        {newa += ''
        // console.log(newa)
    }
    else
        {newa += themeat[i]}}

console.log(newa)
}

// 2
function sortaz(){
    themeat.sort()
    console.log(themeat)
}

// 3
function sortza(){
    themeat.sort(function (a, b) {
        if (a > b) {
            return -1}
        if (b > a) {
            return 1}
        return 0;})
    console.log(themeat)
}

// 4
function sort09(){
    themeat.sort(function (a, b) {
        if (a > b) {
            return -1}
        if (b > a) {
            return 1}
        return 0;})
    console.log(themeat2)
}

// 5
function sort90(){
    themeat2.sort()
    console.log(themeat2)
}

// 6
function bigstnum(){
    themeat3.sort()
let newa = []
for (let i=0; i<themeat3.length; i++){
    if (themeat3[i] <= themeat3[i+1])
    {newa += ''}
    else
    {newa += themeat3[i]}
}
console.log(newa)
}

// 7
function filter(){
    let hasil = themeat4.filter(function (item) {
        return (parseInt(item) == item);
      });
    console.log(hasil)
}

// 8
function removeChar(){
    let huruf = "themeat"
    let dieu = huruf.split('')
    console.log(dieu)
    dieu.shift()
    dieu.pop()
    console.log(dieu)
}

