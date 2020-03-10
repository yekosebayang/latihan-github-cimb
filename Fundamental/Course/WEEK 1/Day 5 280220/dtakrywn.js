let namaKaryawan = ['Ceb','Jesse','Topson','Ana','Notail']
let umurKaryawan = [19,20,21,22,23]
let pekerjaanKaryawan = ['Offlane','Supp','Core','Carry','HardSupp']
let notlpKaryawan = ['0811' , '0812' , ['0813','0814'] , '0815' , ['0816','0817']]
let ding =''

for (let i=0; i<namaKaryawan.length; i++)
{ding +=`${i+1}. ${namaKaryawan[i]} ${umurKaryawan[i]} ${pekerjaanKaryawan[i]} ${notlpKaryawan[i]} ${'\n'}`}



console.log(ding)