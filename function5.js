// Deklarasi function dengan parameter panjang dan lebar
function hitungLuasPersegiPanjang(panjang, lebar) {
    // Menghitung luas (panjang * lebar)
    const luas = panjang * lebar;
    
    // Mengembalikan hasil menggunakan return
    return luas;
}

// Memanggil function dengan contoh nilai (10 dan 5)
const hasilLuas = hitungLuasPersegiPanjang(10, 5);

// Menampilkan hasil ke console
console.log("=== HITUNG LUAS PERSEGI PANJANG ===");
console.log("Panjang : 10");
console.log("Lebar   : 5");
console.log("Output  : " + hasilLuas); // Output: 50