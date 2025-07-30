const express = require('express');
const router = express.Router();
const UserController = require('../app/controllers/UserController');
const LogAbsensiController = require('../app/controllers/LogAbsensiController');

router.get('/users', UserController.index);

router.get('/log-absensi', LogAbsensiController.index);
router.post('/log-absensi', LogAbsensiController.store);

module.exports = router;