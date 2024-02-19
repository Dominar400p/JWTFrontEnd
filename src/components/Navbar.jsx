import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { store } from "../App"

let Navbar = () =>{

    let[token,settoken] = useContext(store)
    return(
        <>
        {
            !token?<div style={{paddingLeft : "1250px"}}>
                <Link to ='/register'><h>Register</h></Link>
                <Link to ='/login' style={{paddingLeft : '10px'}}><h>Login</h></Link>
            </div>:null
        }
        </>
    )
}


export default Navbar;