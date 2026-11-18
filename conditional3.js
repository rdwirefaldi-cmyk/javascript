// Contoh nilai mahasiswa yang akan diuji
let nilaiMahasiswa = 80; // Anda bisa mengubah nilai ini untuk mencoba pengujian lain

console.log("=== PENENTUAN PREDIKAT NILAI ===");
console.log("Nilai Mahasiswa: " + nilaiMahasiswa);

// Validasi apakah nilai berada dalam rentang 0 - 100
if (nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    console.log("Predikat: Nilai tidak valid! Harap masukkan nilai antara 0 sampai 100.");
} else if (nilaiMahasiswa >= 85 && nilaiMahasiswa <= 100) {
    console.log("Predikat: A");
} else if (nilaiMahasiswa >= 75 && nilaiMahasiswa <= 84) {
    console.log("Predikat: B");
} else if (nilaiMahasiswa >= 65 && nilaiMahasiswa <= 74) {
    console.log("Predikat: C");
} else if (nilaiMahasiswa >= 50 && nilaiMahasiswa <= 64) {
    console.log("Predikat: D");
} else {
    console.log("Predikat: E"); // Untuk nilai di bawah 50 (0 - 49)
}