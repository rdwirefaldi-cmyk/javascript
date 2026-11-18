// Data awal string dengan spasi berlebih di awal dan akhir
const nama = " muhammad rizki ";

console.log("=== MANIPULASI STRING ===");
console.log("String Asli ('" + nama + "')");

// 1. Menghilangkan spasi di awal dan akhir menggunakan .trim()
const namaBersih = nama.trim();
console.log("1. Setelah trim(): '" + namaBersih + "'");

// 2. Mengubah menjadi huruf besar (Uppercase) dan huruf kecil (Lowercase)
const namaBesar = namaBersih.toUpperCase();
const namaKecil = namaBersih.toLowerCase();

console.log("2. Huruf Besar (Uppercase) : " + namaBesar);
    console.log("   Huruf Kecil (Lowercase) : " + namaKecil);

// 3. Menghitung jumlah karakter setelah spasi awal dan akhir dihilangkan
const jumlahKarakter = namaBersih.length;
console.log("3. Jumlah Karakter (setelah dibersihkan): " + jumlahKarakter);