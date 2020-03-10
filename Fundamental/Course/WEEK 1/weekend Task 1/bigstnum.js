let themeat3 = [1,23,41,23,14,921,25,32,11,32]
themeat3.sort()
let newa = []
for (let i=0; i<themeat3.length; i++){
    if (themeat3[i] <= themeat3[i+1])
    {newa += ''}
    else
    {newa += themeat3[i]}
}
console.log(newa)




