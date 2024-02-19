import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../App";

let Login = () => {

    let [email, setemail] = useState('')
    let [password, setpassword] = useState('')
    let navigate = useNavigate()
    let [token, setToken] = useContext(store)


    let handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/crud/login', {
            email,
            password
        }).then(res => setToken(res.data.token)).catch((err) => console.log(err.message))
    }

    if (token) {
        navigate('/myprofile')
    }

    return (
        <>
            <center>
                <form onSubmit={handleSubmit}>
                    <h3>Login</h3>
                    <input type="email" placeholder="email" onChange={e => setemail(e.target.value)}></input><br></br>
                    <input type="password" placeholder="password" onChange={e => setpassword(e.target.value)}></input><br></br>
                    <button type="submit">Login</button>
                </form>
            </center>
        </>
    )
};


export default Login;