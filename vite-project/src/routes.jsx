import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/HomeLP/Home";
import Sobre from "./Components/Pages/Sobre/Sobre";
import Contatos from "./Components/Pages/Contato/Contato";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/sobre" element={ <Sobre /> }></Route>
                <Route path="/contato" element={ <Contatos /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes