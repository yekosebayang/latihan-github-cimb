function start () {
    return function () {
      return [1,2,[
        {
          nama: 'Doraemon',
          pekerjaan: 'Manjain orang'
        },
        {
          nama: 'Seto',
          kontak: {
            rumah: 'BSD',
            telfon: ["081234", "432108"]
          }
        }
      ],4,5]
    }
  }

  console.log(start()()[2][1].kontak.telfon[0])
  //start() manggil function start
  //() manggin function anonymous, dimana akan return array
  // kita akses array(index) ke [2]
  // lalu akses lalu akses array ke [1], yang isinya object
  // kita akses objek nya kontak.  lalu ke telfon
  // di telfon, isinya ada array lagi, kita akses [0] yang isinya nomor yang kita inginkan