// digital root number
let arr = [9,1,2,3,2,1,3,21,4,1,3,2,1,4,3,1,5,34,1,3,2,1,55,1,23]
let hasil = 0
while (arr.length > 1){
    for (let i=0; i<arr.length; i++){
        hasil += parseInt(arr[i])
    }
    arr = hasil.toString().split('')
    hasil = 0
}
console.log(parseInt(arr.join()))

// arr = 123
// arr2 = arr.toString().split('')

// console.log(parseInt(arr2[2]))