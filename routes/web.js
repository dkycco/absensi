const express = require('express');
const router = express.Router();
const UserController = require('../app/controllers/UserController');
const AbsensiController = require('../app/controllers/AbsensiController');

router.get('/users', UserController.index);

router.get('/absensi', AbsensiController.index);

module.exports = router;