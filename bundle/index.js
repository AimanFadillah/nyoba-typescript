"use strict";
let nama = "aiman";
let umur = 18;
let siswa = true;
let buah = ["apel", "anggur", "banana"];
let kelas = [12, "RPL", 2];
const orang1 = {
    nama: "Budi",
    agama: "Islam",
    umur: 12
};
function pertambahan(angka1, angka2) {
    return angka1 + angka2;
}
function buatKelas(kelas) {
    console.log({ kelas });
}
function buatLab(lab) {
    console.log({ lab });
}
buatKelas({
    nama: "2",
    jumlahSiswa: 32,
    jumlahMeja: 16,
});
buatLab({
    nama: "RPL",
    jumlahSiswa: 32,
    jumlahMeja: 16,
    jumlahKomputer: 16,
});
