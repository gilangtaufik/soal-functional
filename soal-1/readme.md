# Soal 1 - Konversi Angka ke Huruf

## Deskripsi

## Instalasi dan Penggunaan

1. **Jalankan Program**:
   - Untuk menjalankan program, buka terminal dan jalankan perintah:
     ```bash
     node index.js
     ```
   - Program akan mengonversi angka yang Anda inputkan sesuai format yang sudah ditentukan.

2. **Contoh Penggunaan**:
   - Misalkan Anda ingin mengonversi angka 12345, jalankan di file `index.js`:
     ```js
     const NumberToWords = require('./converter');
     const converter = new NumberToWords();
     
     console.log(converter.toWords(12345));   // Output: DUA BELAS RIBU TIGA RATUS EMPAT PULUH LIMA
     ```

