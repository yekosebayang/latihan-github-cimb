let themeat4 = [1,"2",3,"a",4,'12']
let hasil = themeat4.filter(function(item) {
    return (parseInt(item) == item);
  });
console.log(hasil)