// Data array of objects mahasiswa
const mahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 60 },
  { nama: "Citra", nilai: 90 },
  { nama: "Doni", nilai: 70 },
  { nama: "Eka", nilai: 95 }
];

console.log("=== 1. MAHASISWA YANG LULUS (Nilai >= 75) ===");
const mahasiswaLulus = mahasiswa.filter(mhs => mhs.nilai >= 75);
mahasiswaLulus.forEach(mhs => {
    console.log(`- ${mhs.nama} (Nilai: ${mhs.nilai})`);
});

console.log("\n=== 2. MAHASISWA YANG TIDAK LULUS (Nilai < 75) ===");
const mahasiswaTidakLulus = mahasiswa.filter(mhs => mhs.nilai < 75);
mahasiswaTidakLulus.forEach(mhs => {
    console.log(`- ${mhs.nama} (Nilai: ${mhs.nilai})`);
});

console.log("\n=== 3. JUMLAH MAHASISWA YANG LULUS ===");
console.log(`Total: ${mahasiswaLulus.length} orang`);

console.log("\n=== 4. URUTAN MAHASISWA BERDASARKAN NILAI TERTINGGI ===");
// Menggunakan spread operator [...] agar array asli tidak berubah saat di-sort
const mahasiswaSorted = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);
mahasiswaSorted.forEach((mhs, index) => {
    console.log(`${index + 1}. ${mhs.nama} - Nilai: ${mhs.nilai}`);
});