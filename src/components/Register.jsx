import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let Register = () => {

    let [username, setUsername] = useState()
    let [email, setemail] = useState()
    let [password, setpassword] = useState()
    let [confirmpassword, setconfirmpassword] = useState()

    //Navigation
    let navigate = useNavigate()

    //HandleSubmit
    let handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/crud/register', {
            username,
            email,
            password,
            confirmpassword
        })
            .then(res => alert(res.data)).catch((err) => console.log(err.message))
        navigate('/login')
    }


    return (
        <>
            <center>
                <form onSubmit={handleSubmit}>
                    <h3>Register</h3>
                    <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)}></input><br></br>
                    <input type="email" placeholder="email" onChange={e => setemail(e.target.value)}></input><br></br>
                    <input type="password" placeholder="password" onChange={e => setpassword(e.target.value)}></input><br></br>
                    <input type="password" placeholder="confirmpassword" onChange={e => setconfirmpassword(e.target.value)}></input><br></br>
                    <button type="submit">Register</button>
                </form>
            </center>
        </>
    )
};


export default Register;