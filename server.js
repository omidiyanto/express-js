const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000; // Ganti port sesuai kebutuhan

// Middleware untuk parse body dari request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint untuk menerima POST request dari servera
app.post('/save', (req, res) => {
  // Lakukan sesuatu dengan data yang diterima, seperti menyimpan ke database
  const { name, email, rhnid } = req.body;

  // Simpan data ke dalam objek
  const dataToSave = {
    name,
    email,
    rhnid,
    timestamp: new Date().toISOString()
  };

  // Convert objek menjadi JSON
  const jsonData = JSON.stringify(dataToSave, null, 2);

  // Tulis data ke file output.json, dengan menggunakan flag 'a' untuk menambahkan (append)
  fs.appendFile('output/result.json', jsonData + '\n', (err) => {
    if (err) {
      console.error('Gagal menyimpan data ke file:', err);
    } else {
      console.log('Data berhasil disimpan ke file output.json');
    }
  });

  // Kirim respons ke servera
  res.json({ message: 'Data diterima dengan sukses' });
});

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

