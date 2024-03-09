import { BrowserRouter, Route, Routes } from "react-router-dom";
import Utama from "./pages/utama";
import DataContext, {globalVariabel } from "./variabels/Context";

export default function App() {
  return <DataContext.Provider value={globalVariabel} >
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Utama} />
      </Routes>
    </BrowserRouter>
  </DataContext.Provider>
}