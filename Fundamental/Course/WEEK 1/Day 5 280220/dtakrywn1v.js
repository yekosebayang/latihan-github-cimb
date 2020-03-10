let ding

let karyawan = [
    ["Ceb" , 23, "Offl"],
    ["Notail", 21, "Hsup"]
]
for (let i=0; i<karyawan.length; i++)
{   ding = ''
    for (let j=0; j<karyawan[i].length; j++)
    {
        ding += karyawan[i][j] + ' '
    }

    console.log(ding)
}