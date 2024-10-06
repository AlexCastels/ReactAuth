import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Navbar } from "./components/navbar/Navbar";
import { Homepage } from "./components/homepage/Homepage";
import { Explore } from "./components/explore/Explore";
import { Signin } from "./components/auth/signin/Signin";
import { Login } from "./components/auth/login/Login";
import {Admin } from "./components/admin/Admin"
import { NotFound } from "./components/not found/NotFound";
import { Footer } from "./components/footer/Footer";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import { AdminPrivateRoute } from "./components/privateRoute/AdminPrivateRoute";

function App() {
    return (
        <Provider store={store}>
            <Navbar/>
                <Routes>
                    <Route path={'/'} element={<Homepage/>}/>
                    <Route path={'/explore'} element={<PrivateRoute><Explore/></PrivateRoute>}/>
                    <Route path={'/signin'} element={<Signin/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/admin'} element={<AdminPrivateRoute><Admin/></AdminPrivateRoute>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            <Footer/>
        </Provider>
    )
}

export default App;
