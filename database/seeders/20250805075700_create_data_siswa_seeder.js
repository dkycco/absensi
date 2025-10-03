'use strict';

const dayjs = require('dayjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataSiswa = [
      {
        id_sidik_jari: '0',
        nisn: '0074082454',
        nama_lengkap: 'Sarif Saripudin',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Nurhayati',
        no_hp: '+62 813-9556-4815',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '1',
        nisn: '0087061007',
        nama_lengkap: 'Atep Sopiyan',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Titin',
        no_hp: '+62 813-9556-4815',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '2',
        nisn: '0089299797',
        nama_lengkap: 'Dwi Marsya Rhamadani',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Samsudin',
        no_hp: '+62 813-9556-4815',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '3',
        nisn: '0095130919',
        nama_lengkap: 'Dede Firmansyah',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Mamat',
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '4',
        nisn: '0099410066',
        nama_lengkap: 'Reisya Hikmatun Rhamadhanti',
        kelas: 'xi_rpl',
        nama_orangtua_wali: 'Nurul Hikmatun',
        no_hp: '+62 812-2258-7088',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '5',
        nisn: '3102308385',
        nama_lengkap: 'Cakra Saputra',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Lilis',
        no_hp: '+62 822-4892-5466',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '6',
        nisn: '0081656019',
        nama_lengkap: 'Nita',
        kelas: 'xi_rpl',
        nama_orangtua_wali: 'Rohana',
        no_hp: '+62 877-2270-3296',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '7',
        nisn: '0087269401',
        nama_lengkap: 'Ririn Dwi Aryani',
        kelas: 'xi_rpl',
        nama_orangtua_wali: 'Ani Suparni',
        no_hp: '+62 831-3718-5986',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '8',
        nisn: '0093791754',
        nama_lengkap: 'Deden Lukman Permana',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Novi',
        no_hp: '+62 831-3718-5986',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '9',
        nisn: '0096667654',
        nama_lengkap: 'Adriadi',
        kelas: 'x_rpl',
        nama_orangtua_wali: 'Nuryani',
        no_hp: '+62 823-2073-4175',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '10',
        nisn: '0096959315',
        nama_lengkap: 'Reno Nurrohiem T',
        kelas: 'x_titl',
        nama_orangtua_wali: 'Yuliet',
        no_hp: '+62 813-9434-3076',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '11',
        nisn: '0098159913',
        nama_lengkap: 'Zia Ahsani Azmi',
        kelas: 'xi_rpl',
        nama_orangtua_wali: 'Robiah',
        no_hp: '+62 853-2105-3110',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '12',
        nisn: '0108944109',
        nama_lengkap: 'Sandy Nurcahya',
        kelas: 'x_titl',
        nama_orangtua_wali: 'Ai Mulyani',
        no_hp: '+62 878-5955-0688',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '13',
        nisn: '0093388468',
        nama_lengkap: 'Dilal Rizik',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Siti Hodijah',
        no_hp: '+62 813-2448-1216',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '14',
        nisn: '0095438909',
        nama_lengkap: 'Hilman Firmansyah',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Nurhayati',
        no_hp: '+62 831-5226-6200',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '15',
        nisn: '0095673334',
        nama_lengkap: 'Ginanjar Junaedi',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Yani',
        no_hp: '+62 859-2404-2505',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '16',
        nisn: '2367556473',
        nama_lengkap: 'Fakhira Intan G',
        kelas: 'x_rpl',
        nama_orangtua_wali: 'Heni Rohaeni',
        no_hp: '+62 857-5937-2746',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '17',
        nisn: '0094976956',
        nama_lengkap: 'Naira Putri Lestari',
        kelas: 'x_rpl',
        nama_orangtua_wali: 'Lina Nurhayati',
        no_hp: '+62 838-7440-5709',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '18',
        nisn: '0093524168',
        nama_lengkap: 'Zaenal',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Atin',
        no_hp: '+62 877-7800-5128',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '19',
        nisn: '0099351808',
        nama_lengkap: 'Asep Ramdani Firmansah',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Asih',
        no_hp: '+62 838-9405-0017',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '20',
        nisn: '0102058014',
        nama_lengkap: 'Muhamad Amar',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Koko',
        no_hp: '+62 821-1689-7002',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '21',
        nisn: '0098977621',
        nama_lengkap: 'Yudha Aditia Pratama',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Imas Masitoh',
        no_hp: '+62 859-3298-1047',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '23',
        nisn: '0097721531',
        nama_lengkap: 'Jio Ramadyyana',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Dede',
        no_hp: '+62 821-1548-4458',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '24',
        nisn: '0106903903',
        nama_lengkap: 'Nadzwa Amelya',
        kelas: 'x_rpl',
        nama_orangtua_wali: 'Neni Puspita',
        no_hp: '+62 877-8143-4390',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '25',
        nisn: '0107963756',
        nama_lengkap: 'Shanaya Naima Putri',
        kelas: 'x_rpl',
        nama_orangtua_wali: 'Asty',
        no_hp: '+62 838-5485-7327',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '26',
        nisn: '0095763849',
        nama_lengkap: 'Allita Susilawati',
        kelas: 'x_rpl',
        nama_orangtua_wali: 'Ratnasari',
        no_hp: '+62 812-9756-6848',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '27',
        nisn: '0092346569',
        nama_lengkap: 'Ari Saputra R',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Wiwin Sulastri',
        no_hp: '+62 878-1698-4710',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '28',
        nisn: '0101684458',
        nama_lengkap: 'Cahya Mardiansyah',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'May',
        no_hp: '+62 895-4112-15544',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '29',
        nisn: '0093656150',
        nama_lengkap: 'Dede Dika',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Ela',
        no_hp: '+62 821-1583-4455',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '30',
        nisn: '0093027570',
        nama_lengkap: 'Muhamad Jalaludin',
        kelas: 'x_rpl',
        nama_orangtua_wali: 'Dede',
        no_hp: '+62 889-1187-201',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '31',
        nisn: '0096695914',
        nama_lengkap: 'Gilang Ginanjar',
        kelas: 'x_rpl',
        nama_orangtua_wali: 'Nesih',
        no_hp: '+62 813-9528-6193',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '32',
        nisn: '7087587723',
        nama_lengkap: 'Muhamad Ramdhani',
        kelas: 'x_rpl',
        nama_orangtua_wali: 'Entin',
        no_hp: '+62 823-2393-113',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '33',
        nisn: '0109548735',
        nama_lengkap: 'Iqbal Sofandi',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Yayah',
        no_hp: '+62 853-5380-7924',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '34',
        nisn: '0103726522',
        nama_lengkap: 'Febriansyah Khalifaris A',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Ai Sumiati',
        no_hp: '+62 877-5736-3677',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '35',
        nisn: '0094192886',
        nama_lengkap: 'Rangga Adriansyah',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Teti Nurhayati',
        no_hp: '+62 877-5654-1879',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '36',
        nisn: '0102309259',
        nama_lengkap: 'Erwin Mulyana',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Eni',
        no_hp: '+62 822-4638-3578',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '37',
        nisn: '0099685762',
        nama_lengkap: 'Rakha Aditama Putra',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Zahra',
        no_hp: '+62 878-9281-4947',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '38',
        nisn: '0091758192',
        nama_lengkap: 'Fadli Rifaldi',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Dede Rosita',
        no_hp: '+62 821-1338-6012',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '39',
        nisn: '0103864397',
        nama_lengkap: 'Reifa Maulana',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Titin Kartini',
        no_hp: '+62 812-2405-5276',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '40',
        nisn: '0105042224',
        nama_lengkap: 'Mahrum Zam-zami',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Siti Hamidah',
        no_hp: '+62 882-0008-88190',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '41',
        nisn: '0096448842',
        nama_lengkap: 'Rifa Surya Ilahi',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Wawat',
        no_hp: '+62 813-1837-5903',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '42',
        nisn: '0081647360',
        nama_lengkap: 'Satrio Atif Latifah',
        kelas: 'x_otomotif',
        nama_orangtua_wali: 'Rosmawati',
        no_hp: '+62 858-8058-1301',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '43',
        nisn: '3105561597',
        nama_lengkap: 'Raya Dewi Anjani',
        kelas: 'x_titl',
        nama_orangtua_wali: 'Seli Nur Intan',
        no_hp: '',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '44',
        nisn: '0098298878',
        nama_lengkap: 'Serina Camelia',
        kelas: 'xi_rpl',
        nama_orangtua_wali: 'Ujang Suhendar',
        no_hp: '+62 857-2323-2751',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '45',
        nisn: '0095007318',
        nama_lengkap: 'Nabila Apriliani',
        kelas: 'xi_rpl',
        nama_orangtua_wali: 'Roni Cahyadi',
        no_hp: '+62 877-8143-4390',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '46',
        nisn: '0082916223',
        nama_lengkap: 'Angga Lesmana',
        kelas: 'xi_rpl',
        nama_orangtua_wali: 'Agus Jaenudin',
        no_hp: '+62 823-1502-9016',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '47',
        nisn: '0093459354',
        nama_lengkap: 'Tina Herlina',
        kelas: 'xi_rpl',
        nama_orangtua_wali: 'Ai Sariningsih',
        no_hp: '+62 831-4939-4687',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '48',
        nisn: '0097653549',
        nama_lengkap: 'Vennika Lestari',
        kelas: 'xi_rpl',
        nama_orangtua_wali: 'Heri Yuliana',
        no_hp: '+62 838-2356-4948',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '49',
        nisn: '0086743337',
        nama_lengkap: 'Nugraha Syahputra',
        kelas: 'xi_rpl',
        nama_orangtua_wali: 'Ana Supriatna',
        no_hp: '+62 821-1618-8762',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '50',
        nisn: '0089622551',
        nama_lengkap: 'Wilda Satria Gunawan',
        kelas: 'xi_rpl',
        nama_orangtua_wali: 'Yunita',
        no_hp: '+62 859-3016-7111',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '51',
        nisn: '0076048438',
        nama_lengkap: 'Rendi',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Enju',
        no_hp: '+62 852-2773-101',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '52',
        nisn: '0082366540',
        nama_lengkap: 'Rizki Akhbar Febriyan',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Gustini Amanah',
        no_hp: '+62 859-5993-4648',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '53',
        nisn: '0087849608',
        nama_lengkap: 'Dimas Danu R F S',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Tini Rustini',
        no_hp: '+62 852-1943-9901',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '54',
        nisn: '0088718092',
        nama_lengkap: 'Selvi Amelia',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Kurniasih',
        no_hp: '+62 858-6019-2589',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '55',
        nisn: '0082638037',
        nama_lengkap: 'Wisnu Ardiansyah',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Rohaeti',
        no_hp: '+62 821-2008-6451',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '56',
        nisn: '0088478426',
        nama_lengkap: 'Marsel Elewarin',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Rahmat',
        no_hp: '+62 815-7261-4721',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '57',
        nisn: '0073092185',
        nama_lengkap: 'Sandi Choerul Ramdan',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Erika Widiastuti',
        no_hp: '+62 818-0710-3575',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '58',
        nisn: '0078073957',
        nama_lengkap: 'Rendy Sopyan Hidayat',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Mayah Nurhayati',
        no_hp: '+62 895-3217-67546',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '59',
        nisn: '0065296663',
        nama_lengkap: 'Apin Solihin Rohendi',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Dedi',
        no_hp: '+62 831-1001-3640',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '60',
        nisn: '0083123643',
        nama_lengkap: 'Gugun Gunawan',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Siti Mariah',
        no_hp: '+62 851-8207-9116',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '61',
        nisn: '0072181797',
        nama_lengkap: 'Saepul',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Titin',
        no_hp: '+62 812-1372-7858',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '62',
        nisn: '0065686513',
        nama_lengkap: 'Muhamad Yandi A',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Avri Yanti',
        no_hp: '+62 831-9676-5100',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '63',
        nisn: '0077758963',
        nama_lengkap: 'Muhamad Ripki',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Siti Sariah',
        no_hp: '+62 859-3838-4514',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '64',
        nisn: '0078050851',
        nama_lengkap: 'Gilang Nurdiansyah',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Teti',
        no_hp: '+62 821-1965-4893',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '65',
        nisn: '0071226982',
        nama_lengkap: 'Asep Yanyan H',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Lilis',
        no_hp: '+62 831-5352-5850',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '66',
        nisn: '0082617289',
        nama_lengkap: 'Hepni Fauzan',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Rohaya',
        no_hp: '+62 859-7420-1113',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '67',
        nisn: '0087921304',
        nama_lengkap: 'Fauzi Nugraha',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Novi',
        no_hp: '+62 821-1901-6631',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '68',
        nisn: '0082692017',
        nama_lengkap: 'Muhamad Alpi',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Ade Neni',
        no_hp: '+62 823-1328-2177',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '69',
        nisn: '0079556453',
        nama_lengkap: 'Suryana',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Nana Supriatna',
        no_hp: '+62 815-7447-4967',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '70',
        nisn: '0083311174',
        nama_lengkap: 'Rizki Maulana Kurniawan',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Warsih Wartini',
        no_hp: '+62 821-2620-9834',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '71',
        nisn: '0077128470',
        nama_lengkap: 'Mochamad Rangga Sanjaya',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Sukma',
        no_hp: '+62 896-9904-4476',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '72',
        nisn: '0081475268',
        nama_lengkap: 'Rizky Agung Gumelar',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Yeni Susilawati',
        no_hp: '+966566996715',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '73',
        nisn: '0086434505',
        nama_lengkap: 'Bara Gustian',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Siti Rokayah',
        no_hp: '+62 831-5953-9919',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '74',
        nisn: '0067506605',
        nama_lengkap: 'Rafi Muhamad Surya',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Wawat',
        no_hp: '+62 831-4745-3015',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '75',
        nisn: '0078759681',
        nama_lengkap: 'Sopian Muhamad Rizki',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Yani Suliawati',
        no_hp: '+62 813-2424-173',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '76',
        nisn: '0087868231',
        nama_lengkap: 'Rifaldi Ilham Saputra',
        kelas: 'xii_otomotif',
        nama_orangtua_wali: 'Musti',
        no_hp: '+62 821-1819-4493',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '77',
        nisn: '0076802648',
        nama_lengkap: 'Puput Herliana',
        kelas: 'xii_titl',
        nama_orangtua_wali: 'Yanti Herliani',
        no_hp: '+62 852-9435-3273',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '78',
        nisn: '0088966293',
        nama_lengkap: 'Tiara Khoirul Nissa',
        kelas: 'xii_titl',
        nama_orangtua_wali: 'Ratnasari',
        no_hp: '+62 859-3046-7310',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '79',
        nisn: '0075233990',
        nama_lengkap: 'Reni',
        kelas: 'xii_titl',
        nama_orangtua_wali: 'Dedi',
        no_hp: '+62 895-4142-92852',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '80',
        nisn: '0085324786',
        nama_lengkap: 'Chandra Irawan',
        kelas: 'xii_titl',
        nama_orangtua_wali: 'Yayah',
        no_hp: '+62 838-2187-6488',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '81',
        nisn: '0081468806',
        nama_lengkap: 'Sendy Ripaldy',
        kelas: 'xii_titl',
        nama_orangtua_wali: 'Rosita',
        no_hp: '+62 856-5984-8335',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '82',
        nisn: '0098040841',
        nama_lengkap: 'Rizki Akbar Maulana Hidayat',
        kelas: 'xii_titl',
        nama_orangtua_wali: 'Ajang',
        no_hp: '+62 851-4218-9827',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '83',
        nisn: '0097690018',
        nama_lengkap: 'Rizki Aditia Nugraha',
        kelas: 'xii_titl',
        nama_orangtua_wali: 'Mamah Juariah',
        no_hp: '+62 896-7807-0040',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '84',
        nisn: '0096497970',
        nama_lengkap: 'Feisya',
        kelas: 'xii_titl',
        nama_orangtua_wali: 'Kusmana',
        no_hp: '+62 813-9510-8858',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '85',
        nisn: '0083936907',
        nama_lengkap: 'Dani Ramdani',
        kelas: 'xii_titl',
        nama_orangtua_wali: 'Atin',
        no_hp: '+62 852-8258-9781',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '86',
        nisn: '0072577459',
        nama_lengkap: 'Depgan Ramadan',
        kelas: 'xii_titl',
        nama_orangtua_wali: 'Cucu Sudrajat',
        no_hp: '+62 888-1497-807',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '87',
        nisn: '0095150651',
        nama_lengkap: 'Bangbang Nurhidayat',
        kelas: 'xii_titl',
        nama_orangtua_wali: 'Cucu Sudrajat',
        no_hp: '+62 813-1331-0877',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '88',
        nisn: '0098465867',
        nama_lengkap: 'Muhamad Paisal',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Adis',
        no_hp: '+62 838-9178-7689',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '90',
        nisn: '0093363137',
        nama_lengkap: 'Rayhan Nugraha',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Megasari',
        no_hp: '+62 851-3351-0387',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '91',
        nisn: '0082332227',
        nama_lengkap: 'Muhamad Romi Alfadillah',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Emi Suhaemi',
        no_hp: '+62 822-1531-2904',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '92',
        nisn: '0097925731',
        nama_lengkap: 'Nurdin Ramadan',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Olih Solihin',
        no_hp: '+62 898-3869-352',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '93',
        nisn: '0084165412',
        nama_lengkap: 'Gio Romansyah',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Selamat Solihat',
        no_hp: '+62 831-6602-4619',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '94',
        nisn: '0093030334',
        nama_lengkap: 'Dafidz Albi Ali Zardari',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Novi Indrianti',
        no_hp: '+62 878-1804-0039',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '95',
        nisn: '0094506568',
        nama_lengkap: 'Muhamad Azhar Aufa',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Teti Nurhayati',
        no_hp: '+62 877-3844-8050',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '96',
        nisn: '3095289993',
        nama_lengkap: 'Aprilian Permana',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Lina Marlina',
        no_hp: '+62 813-1249-7365',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '97',
        nisn: '0098814674',
        nama_lengkap: 'Aditya Rohman Hakim',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Eli Rosmiati',
        no_hp: '+62 812-2455-4685',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '98',
        nisn: '0089714391',
        nama_lengkap: 'Deni Setiawan',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Neneng Rosmanah',
        no_hp: '+62 821-2609-4523',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '99',
        nisn: '0089364976',
        nama_lengkap: 'Chandra Ripaldi',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Cicih Komariah',
        no_hp: '+62 838-2187-5082',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '100',
        nisn: '0082370527',
        nama_lengkap: 'Angga Trio Nugraha',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Ence Karmawan',
        no_hp: '+62 877-1926-0369',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '101',
        nisn: '0096733640',
        nama_lengkap: 'Isal Fauzi',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Titin Supriatin',
        no_hp: '+62 852-1700-4886',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '102',
        nisn: '0099918332',
        nama_lengkap: 'Faisyal Ramdani',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Sodikin',
        no_hp: '+62 838-6900-6055',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '103',
        nisn: '0081311482',
        nama_lengkap: 'Saepul Nurdin',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Uju',
        no_hp: '+62 819-3127-3680',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '104',
        nisn: '0085068654',
        nama_lengkap: 'Gugun Gunawan',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Jujun Suhanda',
        no_hp: '+62 851-8207-9116',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '105',
        nisn: '0087362839',
        nama_lengkap: 'Nazar Ariasah',
        kelas: 'xi_otomotif',
        nama_orangtua_wali: 'Oom Darliah',
        no_hp: '+62 853-2091-9580',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '106',
        nisn: '0088283363',
        nama_lengkap: 'Ajeng Putri Rahayu',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Encih Wawat',
        no_hp: '+62 852-1591-4059',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '107',
        nisn: '0087424913',
        nama_lengkap: 'Salsa Soraya',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Ipah Maryati',
        no_hp: '+62 813-2298-0612',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '108',
        nisn: '0098672908',
        nama_lengkap: 'Lasmini',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Ade Nursantika',
        no_hp: '+62 812-2313-0784',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '109',
        nisn: '0078153308',
        nama_lengkap: 'Siti Patimah',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Suryana',
        no_hp: '+62 823-1977-8303',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '110',
        nisn: '0083281995',
        nama_lengkap: 'Putri Klarissa Maharani',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Agus',
        no_hp: '+62 822-9597-6874',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '111',
        nisn: '0076368960',
        nama_lengkap: 'Ai Wina Oktaviani',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Tayati',
        no_hp: '+62 821-1422-9950',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '112',
        nisn: '0088103894',
        nama_lengkap: 'Siti Nur latifah',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Ali Kiki',
        no_hp: '+62 831-6058-2718',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '113',
        nisn: '0084634326',
        nama_lengkap: 'Riki Aditia Purnama',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Arum',
        no_hp: '+62 838-2904-4805',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '114',
        nisn: '0085448103',
        nama_lengkap: 'Rivan Aditia',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Uun Hayati',
        no_hp: '+62 831-5480-6318',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '115',
        nisn: '0072076563',
        nama_lengkap: 'Muhamad Sodikin',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Siti Hapsoh',
        no_hp: '+62 857-5913-8669',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '116',
        nisn: '0066884559',
        nama_lengkap: 'Wiranata Sudrajat',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Siti Sodiah',
        no_hp: '+62 856-2489-6235',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '117',
        nisn: '0085283457',
        nama_lengkap: 'Ali Nurdiansyah',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Imas Susiawati',
        no_hp: '+62 821-2849-1341',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '118',
        nisn: '0078816791',
        nama_lengkap: 'Dani Setiawan',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Yayat Sutaryat',
        no_hp: '+62 821-2620-9834',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '119',
        nisn: '0072482939',
        nama_lengkap: 'Akbar Rizki',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Ahmed',
        no_hp: '+62 813-1754-9192',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '120',
        nisn: '0075014325',
        nama_lengkap: 'Aldi Rifki Firmasyah',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Yeni Yuliani',
        no_hp: '+62 852-2156-4069',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id_sidik_jari: '121',
        nisn: '0083366090',
        nama_lengkap: 'Raihan Alpa rijky',
        kelas: 'xii_rpl',
        nama_orangtua_wali: 'Ela',
        no_hp: '+62 878-9906-4890',
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
