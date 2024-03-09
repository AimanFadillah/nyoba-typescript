let nama: string = "aiman";
let umur: number = 18;
let siswa: boolean = true;

let buah: string[] = ["apel", "anggur", "banana"];

let kelas: [number, string, number] = [12, "RPL", 2]

type orangType = {
    nama: string,
    umur: number,
    agama?: string,  // ? = opsional
}

const orang1: orangType = {
    nama: "Budi",
    agama: "Islam",
    umur: 12
}

function pertambahan(angka1: number, angka2: number): number {
    return angka1 + angka2;
}

interface kelas {
    nama: string,
    jumlahSiswa: 16 | 32, // ini hanya diisi 16 atau 32
}

interface kelas { // bisa nambah type
    jumlahMeja: number,
}

interface lab extends kelas { // inherinten interface
    jumlahKomputer: number,
}

function buatKelas(kelas: kelas): void {
    console.log({ kelas });
}

function buatLab(lab: lab): void {
    console.log({ lab })
}

const ruang2: kelas = {
    nama: "Ruang2",
    jumlahSiswa: 32,
    jumlahMeja: 16,
}

buatKelas(ruang2);

const labRpl: lab = {
    nama: "RPL",
    jumlahSiswa: 32,
    jumlahMeja: 16,
    jumlahKomputer: 32,
}

buatLab(labRpl);