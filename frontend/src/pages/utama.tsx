import { useContext, useState } from "react"
import DataContext from "../variabels/Context"

export default function Utama() {
    const [text, setText] = useState<string>("Hello Word")
    const { user} = useContext(DataContext);

    return <div>
        <h1>{text}</h1>
        <button onClick={() => setText("Tombol dipencet")} >pencet {user.nama}</button>
    </div>
}