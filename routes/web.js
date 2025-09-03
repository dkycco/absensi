const express = require('express');
const router = express.Router();

const LoginController = require('../app/controllers/LoginController');
const DashboardController = require('../app/controllers/DashboardController');
const UsersController = require('../app/controllers/UsersController');
const DataSiswaController = require('../app/controllers/DataSiswaController');
const RekapAbsensiController = require('../app/controllers/RekapAbsensiController');
const AbsensiSekolahController = require('../app/controllers/AbsensiSekolahController');
const APIKeyController = require('../app/controllers/APIKeyController');
const APILogAbsensiController = require('../app/controllers/APILogAbsensiController');

const { ensureAuthenticated, authorizeRoles } = require('../middleware/authMiddleware');

router.get('/', (req, res) => {
   res.redirect('/login');
});

router.get('/login', LoginController.index);
router.post('/login', LoginController.login);
router.get('/logout', LoginController.logout);

router.get('/dashboard', ensureAuthenticated, authorizeRoles('webmaster', 'admin', 'guru'), DashboardController.index);

router.get('/pengguna', ensureAuthenticated, authorizeRoles('webmaster'), UsersController.index);
router.get('/pengguna/create', ensureAuthenticated, authorizeRoles('webmaster'), UsersController.create);
router.post('/pengguna/', ensureAuthenticated, authorizeRoles('webmaster'), UsersController.store);
router.get('/pengguna/edit/:id', ensureAuthenticated, authorizeRoles('webmaster'), UsersController.edit);
router.post('/pengguna/update/:id', ensureAuthenticated, authorizeRoles('webmaster'), UsersController.update);

router.get('/data-siswa', ensureAuthenticated, authorizeRoles('webmaster', 'admin'), DataSiswaController.index);
router.get('/data-siswa/create', ensureAuthenticated, authorizeRoles('webmaster', 'admin'), DataSiswaController.create);
router.post('/data-siswa/', ensureAuthenticated, authorizeRoles('webmaster', 'admin'), DataSiswaController.store);
router.get('/data-siswa/edit/:id', ensureAuthenticated, authorizeRoles('webmaster', 'admin'), DataSiswaController.edit);
router.post('/data-siswa/update/:id', ensureAuthenticated, authorizeRoles('webmaster', 'admin'), DataSiswaController.update);
router.delete('/data-siswa/:id', ensureAuthenticated, authorizeRoles('webmaster', 'admin'), DataSiswaController.destroy);

router.get('/rekap-absensi', ensureAuthenticated, authorizeRoles('webmaster', 'admin', 'guru'), RekapAbsensiController.index);

router.get('/absensi-sekolah', ensureAuthenticated, authorizeRoles('webmaster', 'admin', 'guru'), AbsensiSekolahController.index);
router.get('/absensi-sekolah/create', ensureAuthenticated, authorizeRoles('webmaster', 'admin', 'guru'), AbsensiSekolahController.create);
router.post('/absensi-sekolah/', ensureAuthenticated, authorizeRoles('webmaster', 'admin', 'guru'), AbsensiSekolahController.store);
router.get('/absensi-sekolah/cari-nisn/:nisn', ensureAuthenticated, authorizeRoles('webmaster', 'admin', 'guru'), AbsensiSekolahController.findNISN);
router.get('/absensi-sekolah/lihat-data/:id', ensureAuthenticated, authorizeRoles('webmaster', 'admin', 'guru'), AbsensiSekolahController.viewData);

router.get('/api-key', ensureAuthenticated, authorizeRoles('webmaster'), APIKeyController.index);
router.get('/api-key/create', ensureAuthenticated, authorizeRoles('webmaster'), APIKeyController.create);
router.post('/api-key', ensureAuthenticated, authorizeRoles('webmaster'), APIKeyController.store);
router.get('/api-key/edit/:id', ensureAuthenticated, authorizeRoles('webmaster'), APIKeyController.edit);
router.post('/api-key/update/:id', ensureAuthenticated, authorizeRoles('webmaster'), APIKeyController.update);
router.delete('/api-key/:id', ensureAuthenticated, authorizeRoles('webmaster'), APIKeyController.destroy);

router.post('/api/log-absensi', APILogAbsensiController.store);

module.exports = router;