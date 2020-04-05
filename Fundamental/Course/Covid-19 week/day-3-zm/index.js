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
    // let arr = [[0],[1,1]]
    let arr = []
    if (besar >= 3){
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
                    // let key = 1
                    // while (arr2.length <2 && key == 1){
                    //     let a = x+y
                    //     arr2.push(a)
                    //     x = y
                    //     y = a                
                    // }
                    let a = x+y
                    arr2.push(a)
                    x = y
                    y = a
                    // key = 0
                }
            }
        arr.push(arr2)
        }
    console.log(arr)
    }

    else if (besar < 3){
        if (besar == 2){console.log(arr)}
        else{console.log(arr[besar-1])}
    }
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
            let tengah = [...arr[i - 1]] //1st isinya 1,1
            for (let j = 0; j < i + 1; j++) { //disini ngisi tengahnya
              if (j == 0 || j == i) { // i panjang array baru di arr
                arr2[j] = 1
              } else {
                arr2[j] = tengah[j-1] + tengah[j]// nambahin angka yg di spread
                // console.log(arr2[j] + ' isi ke arr2 index ke ' +i)
                // console.log(arr2)
              }
            }
        }
        console.log(arr2)
        arr.push(arr2) //arr nambah disini, dimana disini sebelumnya arr sudah ada isinya,
        // saat arr2[j] dipush, dia masuk kesebelah isi arr yng sebelumnya.
        // jadi arr2[j] cuman angka aja, karena di atas juga kan udah di declare kalo arr2 itu array
    }
        // console.log(arr)
      }

  
// angka(4)
// angkaGanjil(4)
// fibonacci(4)
segitigaPascal(5)
