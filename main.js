document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("myAudio");

    // Pilihan 1: Putar audio setelah dokumen selesai dimuat
    audio.play();

    // Pilihan 2: Putar audio setelah pengguna berinteraksi dengan halaman
    // document.addEventListener("click", function() {
    //     audio.play();
    // });
});
