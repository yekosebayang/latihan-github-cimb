//MAP

const validator = (arr, cb) => {
    let arrResult = []
    for (let i = 0; i<arr.length; i++){
        // arrResult[i] = cb(arr[i])// arr ke i dijadikan parameter nya si CB << iini parameter andre
        if (cb(arr[i], i, arr == true)){
            arrResult.push(arr[i])
        }// <2> filter
    }
    
    return arrResult
}
//coba ini terus
let arrParam = [3,7,4,7,1,2]



// console.log(validator(arrParam, (andre) => { //cara panggil
//     return andre*2
// // ini si andre isinya function, dimana di dalam function ini ada isi lagi, dan si andre hanya terima satu parameter
// }))

console.log(validator(arrParam, (andre) => { //<2> filter
    if (andre <= 5) {return true}
}))