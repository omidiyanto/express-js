const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000; // Ganti port sesuai kebutuhan

// Middleware untuk parse body dari request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Menentukan nama file output
const outputFile = 'output/result.json';

// Mengecek apakah file JSON sudah ada, jika tidak, maka membuat file baru dengan array kosong
if (!fs.existsSync(outputFile)) {
  fs.writeFileSync(outputFile, '[]');
}

// Endpoint untuk menerima POST request dari servera
app.post('/save', (req, res) => {
  // Lakukan sesuatu dengan data yang diterima, seperti menyimpan ke database
  const { name, email, Status, total, timestart, timefinish, duration, no1, no2, no3, no4, no5, no6, no7, no8, no9, no10, no11, no12, no13, no14, no15, no16, no17, no18, no19, no20} = req.body;

  // Simpan data ke dalam objek
  const dataToSave = {
    name,
    email,
    Status,
    total,
    timestart,
    timefinish,
    duration,
    no1,
    no2,
    no3,
    no4,
    no5,
    no6,
    no7,
    no8,
    no9,
    no10,
    no11,
    no12,
    no13,
    no14,
    no15,
    no16,
    no17,
    no18,
    no19,
    no20,
    timestamp: new Date().toISOString()
  };

  // Baca data yang sudah ada
  const existingData = JSON.parse(fs.readFileSync(outputFile));

  // Tambahkan data baru ke array
  existingData.push(dataToSave);

  // Tulis data kembali ke file result.json
  fs.writeFileSync(outputFile, JSON.stringify(existingData, null, 2));

  // Kirim respons ke servera
  res.json({ message: 'Data diterima dengan sukses' });
});

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
