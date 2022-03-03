let mousetimeout; // VARIABLE UNTUK MENYIMPAN TIMEOUT
let timeout_active = true; // VARIABEL BOOLEAN BIAR TAU DIA ITU LAGI AKTIF ATAU ENGGA TIMEOUTNYA

// BUAT CEK APA ADA MOUSE YG GERAK
$(document).mousemove(function () {
  console.log("mousemove aman"); // BUAT DEBUG
  clearTimeout(mousetimeout);
  if (timeout_active) {
    stop_object(); // KALO DIA TERDETEKJSI ADA PERGERAKAN MAKA DI STOP DULU
  }
  mousetimeout = setTimeout(show_object, 2000); //NANTI TIMEOUTNYA 2000ms atau 2 detik
});

// BUAT NGESHOW OBJECT SCREENSAVER KITA
function show_object() {
  console.log("show object aman"); // DEBUG
  $("#screensaver").fadeIn(); // BIAR BISA MASUK TERUS DI KASIH FADE IN BIAR AGAK BAGUS DIKIT
  timeout_active = true; // UBAH KE STATE DIMANA OBJECT KITA LAGI AKTIF
}

// BUAT NGESTOP OBJECT SCREENSAVER KITA
function stop_object() {
  console.log("stop object aman"); //DEBUG
  $("#screensaver").fadeOut(0); // BIAR BISA KELUAR TRS AGAK BAGUS DIKIT KASIH FADE OUT
  timeout_active = false; // UBAH KE STATE DIMANA OBJECT KITA LAGI GA AKTIF
}
