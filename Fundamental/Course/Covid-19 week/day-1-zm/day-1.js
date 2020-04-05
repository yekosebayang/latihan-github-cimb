const tripleTrouble = (one, two, three) => {
  // Buatlah sebuah function yang menerima 3 string 
  // dan setiap string memiliki panjang yang sama
  // Input: "aa", "bb", "cc"
  // Output: "abcabc"

  // Input: "ab", "cd", "ef"
  // Output: "acebdf"

  // write your code here
  // stTwo = one.split('')
  // ndTwo = two.('')
  // rdTwo = three.split('')
  // total = [...stTwo,...ndTwo,...rdTwo]
  // console.log(tripTroub)
  // console.log(total)
  tripTroub = [...one.split(''),...two.split(''),...three.split('')]
  hasil1 = []
  hasil2 = []
  for (let i=0;i<tripTroub.length;i++){
    if (i%2==0){
      hasil1 += tripTroub[i]
    }
    else {hasil2 += tripTroub[i]} 
  }
console.log(hasil1+hasil2)
}
tripleTrouble('aa','bb','cc')


const altCaps = (string) => {
  // Buatlah sebuah function yang menerima sebuah string
  // Outputnya sebuah array yang index pertama adalah semua 
  // huruf yg posisinya ganjil menjadi kapital, index kedua
  // semua huruf yg posisinya genap jadi kapital

  // Input: "abcdef"
  // Output: ["AbCdEf", "aBcDeF"]

  // write your code here
  let here = string.toLowerCase().split('')
  const mubajir = (ax) => {
    let output = []
    for (let i=0;i<here.length;i++){
    if (ax == 'ganjil'){
      if (i%2!=0){
        output += here[i]}
      else {output += here[i].toUpperCase()}
      console.log(output)
    }      
    else if (ax == 'genap'){
        if (i%2!=0){
          output += here[i].toUpperCase()}
        else {output += here[i]}
    }
    }
  return output
  }
console.log([mubajir('ganjil'), mubajir('genap')])
}
altCaps('abcdef')


//destruct
// diatas bila butuh properti
// dibawah bila ingin balikin satu var
// dibawah
// arrCart.forEach(val, index => {
//   let {object, dalam, array} = val
// });

