import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/homepage/Homepage";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Homepage/>}/>
            </Routes>
            <Footer/>
        </>

    )
}

export default App;
