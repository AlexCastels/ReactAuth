import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/homepage/Homepage";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Explore } from "./components/explore/Explore";
import { Signin } from "./components/auth/signin/Signin";
import { Login } from "./components/auth/login/Login";
import { NotFound } from "./components/not found/NotFound";

function App() {
    return (
        <>
            <Navbar/>
                <Routes>
                    <Route path={'/'} element={<Homepage/>}/>
                    <Route path={'/explore'} element={<Explore/>}/>
                    <Route path={'/signin'} element={<Signin/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            <Footer/>
        </>
    )
}

export default App;
