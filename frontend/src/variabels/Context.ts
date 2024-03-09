import { createContext } from "react";

export interface User {
    nama?: string,
    email?: string,
}

export interface globalVariabel {
    user: User,
    sapa: (pesan: string) => void,

}

export const globalVariabel: globalVariabel = {
    user: {
        nama: "aiman",
        email: "man@gmail.com"
    },
    sapa: function (pesan) {
        alert(pesan);
    }
}

const DataContext = createContext<globalVariabel>(globalVariabel);

export default DataContext;