// Data nilai mahasiswa
const nilai = [80, 75, 90, 65, 85, 95, 70];

// 1. Menampilkan seluruh nilai
console.log("=== ANALISIS NILAI MAHASISWA ===");
console.log("Daftar Nilai: " + nilai.join(", "));

// 2. Mencari nilai tertinggi dan terendah menggunakan Math.max dan Math.min
const nilaiTertinggi = Math.max(...nilai);
const nilaiTerendah = Math.min(...nilai);

console.log("Nilai Tertinggi : " + nilaiTertinggi);
console.log("Nilai Terendah  : " + nilaiTerendah);

// 3. Menghitung rata-rata
let totalNilai = 0;
for (let i = 0; i < nilai.length; i++) {
    totalNilai += nilai[i];
}
const rataRata = totalNilai / nilai.length;
console.log("Rata-rata Nilai : " + rataRata.toFixed(2));

// 4. Menghitung jumlah mahasiswa yang lulus (nilai >= 75)
let jumlahLulus = 0;
for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] >= 75) {
        jumlahLulus++;
    }
}
console.log("Jumlah Mahasiswa yang Lulus (>= 75): " + jumlahLulus);