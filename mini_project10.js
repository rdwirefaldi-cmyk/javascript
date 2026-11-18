// 1. Data produk menggunakan array of objects
const daftarProduk = [
    { nama: "Mouse", harga: 50000 },
    { nama: "Keyboard", harga: 100000 },
    { nama: "Monitor", harga: 1500000 },
    { nama: "Headset", harga: 200000 }
];

// 2. Simulasi keranjang belanja pilihan pengguna (sesuai contoh di soal)
const keranjangBelanja = [
    { nama: "Mouse", jumlah: 2 },
    { nama: "Keyboard", jumlah: 1 },
    { nama: "Headset", jumlah: 1 }
];

let subtotalKeseluruhan = 0;
let itemStruk = [];

// 3. Menghitung subtotal untuk setiap produk di keranjang
keranjangBelanja.forEach(itemBeli => {
    // Mencari data produk berdasarkan nama
    const produkDitemukan = daftarProduk.find(p => p.nama === itemBeli.nama);
    
    if (produkDitemukan) {
        const subtotalItem = produkDitemukan.harga * itemBeli.jumlah;
        subtotalKeseluruhan += subtotalItem;
        
        itemStruk.push({
            nama: itemBeli.nama,
            jumlah: itemBeli.jumlah,
            subtotal: subtotalItem
        });
    }
});

// 4. Cek diskon: Jika total belanja > Rp500.000, berikan diskon 10%
let persentaseDiskon = 0;
let nominalDiskon = 0;

if (subtotalKeseluruhan > 500000) {
    persentaseDiskon = 0.10; // 10%
    nominalDiskon = subtotalKeseluruhan * persentaseDiskon;
}

// 5. Hitung total pembayaran setelah diskon
const totalPembayaran = subtotalKeseluruhan - nominalDiskon;

// 6. Menampilkan Struk Pembelian sesuai format
console.log("========= STRUK PEMBELIAN =========");
itemStruk.forEach(item => {
    // Menyesuaikan format cetak nama, jumlah, dan subtotal
    console.log(`${item.nama} \t\t x${item.jumlah} \t Rp${item.subtotal.toLocaleString('id-ID')}`);
});
console.log("----------------------------------");
console.log(`Subtotal \t\t\t Rp${subtotalKeseluruhan.toLocaleString('id-ID')}`);
console.log(`Diskon \t\t\t\t Rp${nominalDiskon.toLocaleString('id-ID')}`);
console.log(`Total \t\t\t\t Rp${totalPembayaran.toLocaleString('id-ID')}`);
console.log("==================================");
console.log("Terima kasih!");