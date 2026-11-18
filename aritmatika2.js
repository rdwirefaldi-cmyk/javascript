// Deklarasi variabel sesuai ketentuan
const hargaBarang = 25000;
const jumlahBarang = 4;
const persentaseDiskon = 10; // dalam persen (%)

// 1. Hitung total harga sebelum diskon
const totalSebelumDiskon = hargaBarang * jumlahBarang;

// 2. Hitung besaran diskon
const besarDiskon = totalSebelumDiskon * (persentaseDiskon / 100);

// 3. Hitung total pembayaran setelah diskon
const totalSetelahDiskon = totalSebelumDiskon - besarDiskon;

// Menampilkan hasil menggunakan console.log()
console.log("=== STRUK PERHITUNGAN BELANJA ===");
console.log("Harga Satuan Barang : Rp " + hargaBarang.toLocaleString('id-ID'));
console.log("Jumlah Barang       : " + jumlahBarang + " pcs");
console.log("---------------------------------");
console.log("Total Sebelum Diskon: Rp " + totalSebelumDiskon.toLocaleString('id-ID'));
console.log("Besaran Diskon (10%): Rp " + besarDiskon.toLocaleString('id-ID'));
console.log("Total Pembayaran    : Rp " + totalSetelahDiskon.toLocaleString('id-ID'));