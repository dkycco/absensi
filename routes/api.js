const express = require('express');
const router = express.Router();
const LogAbsensi = require('../app/models/LogAbsensi');
const DataSiswa = require('../app/models/DataSiswa');

router.get('/absensi/:nisn', async (req, res) => {
  const { nisn } = req.params;
  const latest = await LogAbsensi.findOne({
    where: { nisn },
    include: { model: DataSiswa, as: 'siswa' },
    order: [['created_at', 'DESC']]
  });

  if (!latest) {
    return res.status(404).json({ error: 'Data tidak ditemukan' });
  }

  res.json(latest);
});

module.exports = router;
