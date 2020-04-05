let arr = [1,2,3,4,5]

for (let item of arr){
    tampil = ''
    if ((item-1) %2 == 0){
        tampil += item-1}
    console.log(tampil)
}