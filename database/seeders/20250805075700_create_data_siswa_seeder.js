'use strict';

const dayjs = require('dayjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataSiswa = [
      {
        id_sidik_jari: '0',
        nisn: '3788562507',
        nama_lengkap: "Sarif Saripudin",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Nurhayati",
        no_hp: '+6281395564815',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '1',
        nisn: '9291764682',
        nama_lengkap: "Atep Sopiyan",
        kelas: 'xii_tkr',
        nama_orangtua_wali: "Titin",
        no_hp: '+62812235907950',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '2',
        nisn: '9906511565',
        nama_lengkap: "Dwi Marsya Rhamadani",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Samsudin",
        no_hp: '+62852940162990',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '3',
        nisn: '2373263876',
        nama_lengkap: "Dede Firmansyah",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Mamat",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '4',
        nisn: '1111681081',
        nama_lengkap: "Reisya Hikmatun Rhamadhanti",
        kelas: 'xi_rpl',
        nama_orangtua_wali: "Nurul Hikmatun",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '5',
        nisn: '4056941648',
        nama_lengkap: "Cakra Saputra",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Lilis",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '6',
        nisn: '7181148745',
        nama_lengkap: "Nita",
        kelas: 'xi_rpl',
        nama_orangtua_wali: "Rohana",
        no_hp: '+62877227032960',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '7',
        nisn: '3080787449',
        nama_lengkap: "Ririn Dwi A",
        kelas: 'xi_rpl',
        nama_orangtua_wali: "Ani Suparni",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '8',
        nisn: '4236522054',
        nama_lengkap: "Dede Lukman",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Novi",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '9',
        nisn: '5748978134',
        nama_lengkap: "Adriadi",
        kelas: 'x_rpl',
        nama_orangtua_wali: "Nuryani",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '10',
        nisn: '3071946092',
        nama_lengkap: "Reno Nurrohiem T",
        kelas: 'x_titl',
        nama_orangtua_wali: "Yuliet",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '11',
        nisn: '8961175922',
        nama_lengkap: "Zia Ahsani Azmi",
        kelas: 'xi_rpl',
        nama_orangtua_wali: "Robiah",
        no_hp: '+62853210531100',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '12',
        nisn: '4999144924',
        nama_lengkap: "Sandy Nurcahya",
        kelas: 'x_titl',
        nama_orangtua_wali: "Ai Mulyani",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '13',
        nisn: '5419655928',
        nama_lengkap: "Dilal Rizik",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Siti Hodijah",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '14',
        nisn: '9601344637',
        nama_lengkap: "Hilman Firmansyah",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Nurhayati",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '15',
        nisn: '6966174662',
        nama_lengkap: "Ginanjar Junaedi",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Yani",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '16',
        nisn: '2367556473',
        nama_lengkap: "Fakhira Intan G",
        kelas: 'x_rpl',
        nama_orangtua_wali: "Heni Rohaeni",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '17',
        nisn: '2094953442',
        nama_lengkap: "Naira Putri Lestari",
        kelas: 'x_rpl',
        nama_orangtua_wali: "Lina Nurhayati",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '18',
        nisn: '2099590800',
        nama_lengkap: "Zaenal",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Atin",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '19',
        nisn: '1212975903',
        nama_lengkap: "Asep Ramdani Firmansah",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Asih",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '20',
        nisn: '7704159590',
        nama_lengkap: "Muhamad Amar",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Koko",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '21',
        nisn: '1937151188',
        nama_lengkap: "Yudha Aditia Pratama",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Imas Masitoh",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '22',
        nisn: '5669223033',
        nama_lengkap: "Muhamad Raka Irawan",
        kelas: 'x_rpl',
        nama_orangtua_wali: "Sumiati",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '23',
        nisn: '7406005122',
        nama_lengkap: "Jio Ramadyyana",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Dede",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '24',
        nisn: '7663486868',
        nama_lengkap: "Nadzwa Amelya",
        kelas: 'x_rpl',
        nama_orangtua_wali: "Neni Puspita",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '25',
        nisn: '9168187914',
        nama_lengkap: "Shanaya Naima Putri",
        kelas: 'x_rpl',
        nama_orangtua_wali: "Asty",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '26',
        nisn: '7563314831',
        nama_lengkap: "Allita Susilawati",
        kelas: 'x_rpl',
        nama_orangtua_wali: "Ratnasari",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '27',
        nisn: '4820850083',
        nama_lengkap: "Ari Saputra R",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Wiwin Sulastri",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '28',
        nisn: '1468518604',
        nama_lengkap: "Cahya Mardiansyah",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "May",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '29',
        nisn: '6654962806',
        nama_lengkap: "Dede Dika",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Ela",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '30',
        nisn: '1963991919',
        nama_lengkap: "Muhammad Jalaludin",
        kelas: 'x_rpl',
        nama_orangtua_wali: "Dede",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '31',
        nisn: '3982769221',
        nama_lengkap: "Gilang Ginanjar",
        kelas: 'x_rpl',
        nama_orangtua_wali: "Nesih",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '32',
        nisn: '7087587723',
        nama_lengkap: "Muhamad Ramdani",
        kelas: 'x_rpl',
        nama_orangtua_wali: "Entin",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '33',
        nisn: '2468024472',
        nama_lengkap: "Iqbal Sofandi",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Yayah",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '34',
        nisn: '7779336392',
        nama_lengkap: "Febriansyah Khalifaris A",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Ai Sumiati",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '35',
        nisn: '6949775809',
        nama_lengkap: "Rangga Adriansyah",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Teti Nurhayati",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '36',
        nisn: '4959314225',
        nama_lengkap: "Erwin Mulyana",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Eni",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '37',
        nisn: '9626950009',
        nama_lengkap: "Raka Aditama Putra",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Zahra",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '38',
        nisn: '1627585830',
        nama_lengkap: "Fadli Rifaldi",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Dede Rosita",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '39',
        nisn: '2239815392',
        nama_lengkap: "Reifa Maulana",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Titin Kartini",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '40',
        nisn: '3919940817',
        nama_lengkap: "Mahrum Zamzami",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Siti Hamidah",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '41',
        nisn: '7224845175',
        nama_lengkap: "Rifa Surya Ilahi",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Wawat",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '42',
        nisn: '5143875652',
        nama_lengkap: "Satrio Atif Latifah",
        kelas: 'x_otomotif',
        nama_orangtua_wali: "Rosmawati",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '43',
        nisn: '6178422341',
        nama_lengkap: "Raya Dewi Anjani",
        kelas: 'x_titl',
        nama_orangtua_wali: "Seli Nur Intan",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '44',
        nisn: '5862029071',
        nama_lengkap: "Serina Camelia",
        kelas: 'xi_rpl',
        nama_orangtua_wali: "Ujang Suhendar",
        no_hp: '+62857232327510',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '45',
        nisn: '8698463172',
        nama_lengkap: "Nabila Apriliani",
        kelas: 'xi_rpl',
        nama_orangtua_wali: "Roni Cahyadi",
        no_hp: '+62877814343900',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '46',
        nisn: '5469821045',
        nama_lengkap: "Angga Lesmana",
        kelas: 'xi_rpl',
        nama_orangtua_wali: "Agus Jaenudin",
        no_hp: '+62823150290160',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '47',
        nisn: '6356277866',
        nama_lengkap: "Tina Herlina",
        kelas: 'xi_rpl',
        nama_orangtua_wali: "Ai Sariningsih",
        no_hp: '+62831493946870',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '48',
        nisn: '8220857442',
        nama_lengkap: "Vennika Lestari",
        kelas: 'xi_rpl',
        nama_orangtua_wali: "Heri Yuliana",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '49',
        nisn: '8161308514',
        nama_lengkap: "Nugraha Saputra",
        kelas: 'xi_rpl',
        nama_orangtua_wali: "Ana Supriatna",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '50',
        nisn: '1680205640',
        nama_lengkap: "Wilda Satria Gunawan",
        kelas: 'xi_rpl',
        nama_orangtua_wali: "Yunita",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '51',
        nisn: '7950853662',
        nama_lengkap: "Rendi",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Enju",
        no_hp: '+6285227731010',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '52',
        nisn: '7257247328',
        nama_lengkap: "Rizki Akhbar",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Gustini Amanah",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '53',
        nisn: '3530325535',
        nama_lengkap: "Dimas Danu",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Tini Rustini",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '54',
        nisn: '8538923937',
        nama_lengkap: "Selvi Amelia",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Kurniasih",
        no_hp: '+62858601925890',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '55',
        nisn: '9155983146',
        nama_lengkap: "Wisnu Ardiansyah",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Rohaeti",
        no_hp: '+62821200864510',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '56',
        nisn: '6490758372',
        nama_lengkap: "Marsel Elewarin",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Rahmat",
        no_hp: '+62815726147210',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '57',
        nisn: '7663753296',
        nama_lengkap: "Sandi Choerul Ramdan",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Erika Widiastuti",
        no_hp: '+62818071035750',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '58',
        nisn: '3124065032',
        nama_lengkap: "Rendy Sopyan",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Mayah Nurhayati",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '59',
        nisn: '1587497222',
        nama_lengkap: "Apin Solihin",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Dedi",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '60',
        nisn: '1632267214',
        nama_lengkap: "Gugun Gunawan",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Siti Mariah",
        no_hp: '+62851820791160',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '61',
        nisn: '3351239185',
        nama_lengkap: "Saepul",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Titin",
        no_hp: '+62812137278580',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '62',
        nisn: '8851174177',
        nama_lengkap: "Muhamad Yandi A",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Avri Yanti",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '63',
        nisn: '7633757417',
        nama_lengkap: "Muhamad Ripki",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Siti Sariah",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '64',
        nisn: '6420161853',
        nama_lengkap: "Gilang Nurdiansyah",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Teti",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '65',
        nisn: '6413669440',
        nama_lengkap: "Asep Yanyan H",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Lilis",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '66',
        nisn: '3049097061',
        nama_lengkap: "Hepni Fauzan",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Rohaya",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '67',
        nisn: '2285887910',
        nama_lengkap: "Fauzi Nugraha",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Novi",
        no_hp: '+62821190166310',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '68',
        nisn: '4681496365',
        nama_lengkap: "Muhamad Alpi",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Ade Neni",
        no_hp: '+62823132821770',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '69',
        nisn: '7897451419',
        nama_lengkap: "Suryana",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Nana Supriatna",
        no_hp: '+62815744749670',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '70',
        nisn: '1490757469',
        nama_lengkap: "Rizki Maulana Kurniawan",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Warsih Wartini",
        no_hp: '+62821262098340',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '71',
        nisn: '1177534689',
        nama_lengkap: "Mochamad Rangga",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Sukma",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '72',
        nisn: '6432298377',
        nama_lengkap: "Rizky Agung Gumelar",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Yeni Susilawati",
        no_hp: '+9665669967150',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '73',
        nisn: '7220218010',
        nama_lengkap: "Bara Gustian",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Siti Rokayah",
        no_hp: '+62831595399190',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '74',
        nisn: '5310931007',
        nama_lengkap: "Rafi Muhamad Surya",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Wawat",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '75',
        nisn: '6613136050',
        nama_lengkap: "Sopian Muhamad Rizki",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Yani Suliawati",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '76',
        nisn: '1492421024',
        nama_lengkap: "Rifaldi Ilham Saputra",
        kelas: 'xii_otomotif',
        nama_orangtua_wali: "Musti",
        no_hp: '+62821181944930',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '77',
        nisn: '8756619115',
        nama_lengkap: "Puput Herliana",
        kelas: 'xii_titl',
        nama_orangtua_wali: "Yanti Herliani",
        no_hp: '+62852943532730',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '78',
        nisn: '5335568670',
        nama_lengkap: "Tiara Khoirulnisa",
        kelas: 'xii_titl',
        nama_orangtua_wali: "Ratnasari",
        no_hp: '+62859304673100',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '79',
        nisn: '5165772921',
        nama_lengkap: "Reni",
        kelas: 'xii_titl',
        nama_orangtua_wali: "Dedi",
        no_hp: '+628954142928520',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '80',
        nisn: '1512278260',
        nama_lengkap: "Chandra Irawan",
        kelas: 'xii_titl',
        nama_orangtua_wali: "Yayah",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '81',
        nisn: '8822912835',
        nama_lengkap: "Sendy Ripaldy",
        kelas: 'xii_titl',
        nama_orangtua_wali: "Rosita",
        no_hp: '+62856598483350',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '82',
        nisn: '1332844766',
        nama_lengkap: "Rizki Akbar Hidayat",
        kelas: 'xii_titil',
        nama_orangtua_wali: "Ajang",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '83',
        nisn: '6783956752',
        nama_lengkap: "Rizki Aditiya Nugraha",
        kelas: 'xii_titl',
        nama_orangtua_wali: "Mamah Juariah",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '84',
        nisn: '8462678143',
        nama_lengkap: "Feisya",
        kelas: 'xii_titl',
        nama_orangtua_wali: "Kusmana",
        no_hp: '+62813951088580',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '85',
        nisn: '7747231588',
        nama_lengkap: "Dani Ramdani",
        kelas: 'xii_titl',
        nama_orangtua_wali: "Atin",
        no_hp: '+62852825897810',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '86',
        nisn: '1973562598',
        nama_lengkap: "Depgan Ramadan",
        kelas: 'xii_titl',
        nama_orangtua_wali: "Cucu Sudrajat",
        no_hp: '+6288814978070',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '87',
        nisn: '6610952642',
        nama_lengkap: "Bangbang Nurhidayat",
        kelas: 'xii_titl',
        nama_orangtua_wali: "Cucu Sudrajat",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '88',
        nisn: '4905506836',
        nama_lengkap: "Muhamad Paisal",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Adis",
        no_hp: '+62838917876890',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '89',
        nisn: '2950252847',
        nama_lengkap: "M Ramdhani",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Odi",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '90',
        nisn: '1634754006',
        nama_lengkap: "Rayhan Nugraha",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Megasari",
        no_hp: '+62851335103870',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '91',
        nisn: '7567423301',
        nama_lengkap: "M Romi",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Emi Suhaemi",
        no_hp: '+62822153129040',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '92',
        nisn: '9500988281',
        nama_lengkap: "Nurdin Ramadan",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Olih Solihin",
        no_hp: '+6289838693520',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '93',
        nisn: '1674272440',
        nama_lengkap: "Gio Romansyah",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Selamat Solihat",
        no_hp: '+62831660246190',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '94',
        nisn: '2471112864',
        nama_lengkap: "Dafidz Albi",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Novi Indrianti",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '95',
        nisn: '6758985018',
        nama_lengkap: "M Azhar Aufa",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Teti Nurhayati",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '96',
        nisn: '6604668114',
        nama_lengkap: "Aprilian Permana",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Lina Marlina",
        no_hp: '+62813124973650',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '97',
        nisn: '8402010311',
        nama_lengkap: "Aditya Rohman H",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Eli Rosmiati",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '98',
        nisn: '7783748551',
        nama_lengkap: "Deni Setiawan",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Neneng Rosmanah",
        no_hp: '+62821260945230',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '99',
        nisn: '5910630816',
        nama_lengkap: "Chandra Ripaldi",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Cicih Komariah",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '100',
        nisn: '1390100860',
        nama_lengkap: "Angga Trio Nugraha",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Ence Karmawan",
        no_hp: '+62877192603690',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '101',
        nisn: '9610980828',
        nama_lengkap: "Isal Fauzi",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Titin Supriatin",
        no_hp: '+62852170048860',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '102',
        nisn: '2890335263',
        nama_lengkap: "Faysal Ramdani",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Sodikin",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '103',
        nisn: '6620486687',
        nama_lengkap: "Saipul Nurdin",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Uju",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '104',
        nisn: '6764717524',
        nama_lengkap: "Gugun Gunawan",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Jujun Suhana",
        no_hp: '+62851820791160',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '105',
        nisn: '6018640963',
        nama_lengkap: "Nazar Ariasah",
        kelas: 'xi_otomotif',
        nama_orangtua_wali: "Oom Darliah",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '106',
        nisn: '4697908774',
        nama_lengkap: "Ajeng Putri Rahayu",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Encih Wawat",
        no_hp: '+62852159140590',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '107',
        nisn: '6298072151',
        nama_lengkap: "Salsa Soraya",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Ipah Maryati",
        no_hp: '+62813229806120',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '108',
        nisn: '4541703699',
        nama_lengkap: "Lasmini",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Ade Nursantika",
        no_hp: '+62812231307840',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '109',
        nisn: '9091663892',
        nama_lengkap: "Siti Patimah",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Suryana",
        no_hp: '+62823197783030',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '110',
        nisn: '2575018809',
        nama_lengkap: "Putri Klarissa Maharani",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Agus",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '111',
        nisn: '9001265318',
        nama_lengkap: "Ai Wina Oktaviani",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Tayati",
        no_hp: '+62821142299500',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '112',
        nisn: '1530839295',
        nama_lengkap: "Siti Nur latifah",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Ali Kiki",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '113',
        nisn: '5187545461',
        nama_lengkap: "Riki Aditia",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Arum",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '114',
        nisn: '2888064956',
        nama_lengkap: "Rivan Aditia",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Uun Hayati",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '115',
        nisn: '3977114633',
        nama_lengkap: "Muhamad Sodikin",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Siti Hapsoh",
        no_hp: '+62857591386690',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '116',
        nisn: '6699698516',
        nama_lengkap: "Wiratana Sudrajat",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Siti Sodiah",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '117',
        nisn: '2051122772',
        nama_lengkap: "Ali Nurdiansyah",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Imas Susiawati",
        no_hp: '+62821284913410',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '118',
        nisn: '7036544740',
        nama_lengkap: "Dani Setiawan",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Yayat Sutaryat",
        no_hp: '+62821262098340',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '119',
        nisn: '3902577625',
        nama_lengkap: "Akbar Rizki",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Ahmed",
        no_hp: '+62813175491920',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '120',
        nisn: '6328978468',
        nama_lengkap: "Aldi Rifki Firmasyah",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Yeni Yuliani",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '121',
        nisn: '5894610939',
        nama_lengkap: "Raihan Alparijky",
        kelas: 'xii_rpl',
        nama_orangtua_wali: "Ela",
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      }
    ];

    await queryInterface.bulkInsert('data_siswa', dataSiswa);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('data_siswa', null, {});
  }
};
