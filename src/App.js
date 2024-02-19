import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import MyProfile from "./components/MyProfile";
import { createContext, useState } from "react";
import Navbar from "./components/Navbar";

export let store = createContext();

function App() {

    let [token, setToken] = useState(null)

    return (
        <div>
            <store.Provider value={[token, setToken]}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route path="/myprofile" element={<MyProfile />}></Route>
                    </Routes>
                </BrowserRouter>
            </store.Provider>
        </div>
    );
}

export default App;
