const angka = (besar) => {
    let arr = []
    let angka = 1 // kenapa kalo di dalem for dia ga jadi segitiga?
    for (let i = 0; i <= besar; i++) {
        let arr2 = []
        for (let j = 0; j <= i; j++) { 
            arr2.push(angka)
            angka ++}
    arr.push(arr2)
    }
console.log(arr)
}

const angkaGanjil = (besar) => {
    let arr = []
    let angka = 1
    for (let i = 0; i <= besar; i++) {
        let arr2 = []
        for (let j = 0; j <= i; j++) {
            arr2.push(angka)
            angka+= 2
        }
    arr.push(arr2)
    }
console.log(arr)
}

const fibonacci = (besar) => {
    let arr = []
    let x = 1 //1 1 untuk mulai dari 2
    let y = 1 // 0 1 untuk mulai dari 1,1
        for (let i = 0; i <= besar; i++) {
            let arr2 = []
            if (i==0){
                arr2 = [0]
            }
            else if (i==1){
                arr2 = [1,1]
            }
            else{
                for (let j = 0; j <= i; j++) {
                    let a = x+y
                    arr2.push(a)
                    x = y
                    y = a
                }
            }
        arr.push(arr2)
        }
    console.log(arr)
}

const segitigaPascal = (besar) => {
  let arr = []
  for (let i = 0; i < besar; i++) {
    let arr2 = []
      if (i == 0) {
          arr2 = [1]
        } 
      else if (i == 1) {
          arr2 = [1, 1]
        } 
      else {
          let tengah = [...arr[i - 1]]
          for (let j = 0; j < i + 1; j++) {
            if (j == 0 || j == i) {
              arr2[j] = 1
            } 
            else {
              arr2[j] = tengah[j-1] + tengah[j]
            }
          }
      }
      arr.push(arr2) 
  }
      console.log(arr)
}



angka(4)
angkaGanjil(4)
fibonacci(4)
segitigaPascal(4)
