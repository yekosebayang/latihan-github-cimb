arr = [1,2,3,4,5]
val = 0
arr = 0
const replika = (array, cb) => {
    for(let i=0; i<arr.length; i++){
        cb(array[i], i, array)
        return val, idx
    }
}

// cara panggil
replika(arr, (param1, param2, param3) => {

})// kenapa kurung disini? karena kita callback function si CB, 
// nah function nya si replika ARR, itu yang dikurungin, gitu.