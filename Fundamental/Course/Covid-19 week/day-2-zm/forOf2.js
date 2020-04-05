let saya = {
    nama : 'Yeko',
    job : 'World saviour',
    stat : 'healthy'
}

for (let key in saya){
    console.log(key +': '+ saya[key])
    // perhatikan, kita pake key sebagai variable untuk mengisi bracket
    // karena dia ambil isinya dari var saya.
}