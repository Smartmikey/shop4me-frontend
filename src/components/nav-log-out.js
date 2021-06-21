import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { VERIFYUSER } from "../query";
import { useEffect } from "react";

export const NotLoggedIn =()=> {

    const [cookie, setCookie, removeCookie] = useCookies("token")
    const [user, setUser] = useState('')

    const [verify, {called, error, data}] = useLazyQuery(VERIFYUSER, {variables: {token: cookie.token}, onCompleted: ()=> setUser(data.verifyUser)})

    
    // if(called){
        console.log("called value: ",called);
    // }

    let rememberUser =()=>{
        if(cookie.length !=0){
            verify()
        }
    }
    // if(data){
    // }
    // cookie && cookie.token ? setUser(data): setUser('') 
    // console.log(cookie)
    let verifiedUser=()=> {
        console.log(data);
    }

    const logout = ()=> {
        // alert("clicked")
        removeCookie("token")
        window.location.href = "/"
    }

    useEffect(()=> rememberUser(), [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* {        setUser(data.verifyUser)} */}
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <img src="/shop4me.png" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        {
                            data && data.verifyUser && user ? (
                                <li className="nav-item">
                                <Link className="nav-link" to="order">Order now</Link>
                                </li>
                            ) : ("")
                        }

                        
                        <li className="nav-item">
                        <Link className="nav-link" to="category">Category</Link>
                        </li>
                        {
                            data && data.verifyUser && user ? (
                               "" 
                            ) : (
                                <>
                                <li className="nav-item">
                                <Link className="nav-link" to="login">Login</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="register">Register</Link>
                                </li>
                                </>
                            )
                        }
                        
                        
                    </ul>
                    
                    </div>
                    {
                            data && data.verifyUser && user ? 

                            user.role == "admin" ? (
                                (
                                    <div> 
                                        
                                        <Link to="/dashboard"> Hello Mike</Link>
                                        <Link className="mx-4 text-secondary" to="#" onClick={()=>logout()}> Logout</Link>
                                    </div>
                                ) 
                            ) : (
                                (
                                    <div> 
                                        
                                        <Link to="/account"> Hello User</Link>
                                        <Link className="mx-4 text-secondary" to="#" onClick={()=>logout()}> Logout</Link>
                                    </div>
                                ) 
                            )
                            
                            : ("")
                        }
                    
                </div>
            </nav>
    )
}