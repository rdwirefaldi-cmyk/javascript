console.log("=== 1. MENAMPILKAN ANGKA GENAP (1 - 100) ===");
let deretGenap = "";
let totalJumlahGenap = 0;

for (let i = 1; i <= 100; i++) {
    // Cek apakah angka genap (habis dibagi 2)
    if (i % 2 === 0) {
        deretGenap += i + " ";
        totalJumlahGenap += i; // Menambahkan angka genap ke variabel total
    }
}
console.log(deretGenap);
console.log("Jumlah (Total) seluruh angka genap di atas adalah: " + totalJumlahGenap);

console.log("\n=== 2. MENAMPILKAN ANGKA GANJIL (1 - 100) ===");
let deretGanjil = "";

for (let i = 1; i <= 100; i++) {
    // Cek apakah angka ganjil (tidak habis dibagi 2)
    if (i % 2 !== 0) {
        deretGanjil += i + " ";
    }
}
console.log(deretGanjil);