import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../App";
import axios from "axios";

let MyProfile = () =>{

    let navigate = useNavigate()
    let[token, settoken] = useContext(store)
    let[data,setData] = useState()

    if(!token){
        navigate('/login')
    }

    useEffect(()=>{
        axios.get('http://localhost:8080/crud/myprofile',{
            headers : {
                'x-token' : token
            }
        }).then(res=>setData(res.data)).catch((err)=>console.log(err.message))
    },[])

    return(
        <>
        {
            data ? <center>Welcome {data.username}
            <button type="button" onClick={e=>settoken(null)}>LogOut</button></center> 
            : null
        }
        </>
    )
};


export default MyProfile;