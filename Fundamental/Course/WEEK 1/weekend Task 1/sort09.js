let themeat2 = [0,1,2,3,4,5,6,7,8,9,21,32,42,12,41,44]
themeat2.sort(function (a, b) {
    if (a > b) {
        return -1}
    if (b > a) {
        return 1}
    return 0;})
console.log(themeat2)


