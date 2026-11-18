// Deklarasi object produk
const produk = {
    nama: "Laptop",
    harga: 7500000,
    stok: 10,
    kategori: "Elektronik"
};

console.log("=== 1. NAMA DAN HARGA PRODUK ===");
console.log("Nama Produk : " + produk.nama);
console.log("Harga Produk: Rp " + produk.harga.toLocaleString('id-ID'));

// 2. Mengubah stok menjadi 5
produk.stok = 5;

// 3. Menambahkan properti merek dengan nilai "Lenovo"
produk.merek = "Lenovo";

// 4. Menampilkan seluruh properti object setelah diubah
console.log("\n=== 4. SELURUH PROPERTI OBJECT (TERBARU) ===");
console.log(produk);
// Alternatif untuk menampilkan dalam bentuk tabel yang rapi di console:
// console.table(produk);