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

function pertambahan (angka1:number,angka2:number) : number {
    return angka1 + angka2;
}

interface kelas {
    nama:string,
    jumlahSiswa:number,
}

function buatKelas (kelas :kelas) : void {
    console.log(kelas);
}

buatKelas({
    nama:"2",
    jumlahSiswa:32
});


