var express = require("express");
var router = express.Router();

// --- data dosen ---
const dataDosen = [
  {
    id: 1,
    nama: "Bapak Budi, S.Kom., M.Kom.",
    matkul: "Pengembangan Aplikasi Web 2",
    kontak: "budi@kampus.ac.id",
    foto: "/images/dosen-2.jpg",
  },
  {
    id: 2,
    nama: "Ibu Siti, S.T., M.T.",
    matkul: "Basis Data Lanjut",
    kontak: "siti@kampus.ac.id",
    foto: "/images/dosen-1.jpg",
  },
  {
    id: 3,
    nama: "Bapak Agus, S.Si., M.Sc.",
    matkul: "Kecerdasan Buatan",
    kontak: "agus@kampus.ac.id",
    foto: "/images/dosen-3.jpg",
  },
];

// Jadwal Kuliah
const dataJadwal = [
  { hari: "Senin", jam: "08:00 - 10:30", matkul: "Basis Data Lanjut", dosen: "Ibu Siti, S.T., M.T.", ruang: "Lab 1" },
  { hari: "Senin", jam: "13:00 - 15:30", matkul: "Analisis & Perancangan Sistem", dosen: "Ibu Siti, S.T., M.T.", ruang: "Ruang Teori 2" },
  { hari: "Selasa", jam: "13:00 - 15:30", matkul: "Pengembangan Aplikasi Web 2", dosen: "Bapak Budi, S.Kom., M.Kom.", ruang: "Lab 3" },
  { hari: "Rabu", jam: "10:00 - 12:30", matkul: "Kecerdasan Buatan", dosen: "Bapak Agus, S.Si., M.Sc.", ruang: "Ruang Teori 5" },
  { hari: "Kamis", jam: "08:00 - 10:30", matkul: "Struktur Data & Algoritma", dosen: "Bapak Agus, S.Si., M.Sc.", ruang: "Lab 2" },
  { hari: "Jumat", jam: "08:00 - 10:30", matkul: "Jaringan Komputer", dosen: "Bapak Budi, S.Kom., M.Kom.", ruang: "Lab Jaringan" },
  { hari: "Jumat", jam: "14:00 - 15:40", matkul: "Pendidikan Agama", dosen: "Dosen Umum", ruang: "Auditorium" },
];

/* Halaman Utama Daftar Dosen */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Daftar Dosen",
    dosen: dataDosen,
  });
});

/* Halaman Jadwal Kuliah */
router.get("/jadwal", function (req, res, next) {
  res.render("jadwal", {
    title: "Jadwal Kuliah",
    jadwal: dataJadwal,
  });
});

/* API Data Dosen */
router.get("/api/dosen", function (req, res, next) {
  res.json(dataDosen);
});

module.exports = router;
