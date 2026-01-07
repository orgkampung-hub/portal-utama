function pilihGame(jenis) {
    console.log("Butang ditekan: " + jenis); // Untuk semakan di Console (F12)

    if (jenis === 'cari-perkataan') {
        window.location.href = "https://orgkampung-hub.github.io/Cari-perkataan/";
    } 
    else if (jenis === 'bendera') {
        // Pastikan URL ini tepat (Huruf Besar/Kecil sangat penting di GitHub)
        window.location.href = "https://orgkampung-hub.github.io/Bendera-dunia/";
    }
}

console.log("Portal Projek Akulas: Tema Gelap Lembut diaktifkan.");
