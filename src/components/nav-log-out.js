import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { VERIFYUSER } from "../query";
import { useEffect } from "react";

export const NotLoggedIn =()=> {

    const [cookie, removeCookie] = useCookies("token")
    const [user, setUser] = useState('')

    const [verify, {called, data}] = useLazyQuery(VERIFYUSER, {variables: {token: cookie.token}, onCompleted: (data)=> setUser(data.verifyUser), onError: (err)=> console.log(err)})

    let rememberUser =()=>{
        if(cookie.length !=0){
            verify()
        }
    }
   
    const cookieCount = cookie["cart"]
    const logout = ()=> {
        removeCookie("token")
        window.location.href = "/"
    }

    useEffect(()=> rememberUser(), [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* {        setUser(data.verifyUser)} */}
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <img className="w-75" src="/shop4me.png" />
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
                                <Link className="nav-link" to="/order">Order now</Link>
                                </li>
                            ) : ("")
                        }

                        
                        <li className="nav-item">
                        <Link className="nav-link" to="/category">Category</Link>
                        </li>
                        {
                            data && data.verifyUser && user ? (
                               "" 
                            ) : (
                                <>
                                <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                </>
                            )
                        }
                        
                        
                    </ul>
                    
                    </div>
                        <div className="position-relative mr-3 ">
                        <Link className="nav-link fs-3 p-0" to="/cart"><i class="fas fa-shopping-cart"></i></Link>
                        {cookieCount.length > 0 ? ( <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            { cookieCount.length}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                        ): "" }
                        </div>
                    {
                            data && data.verifyUser && user ? 

                            user.role == "admin" ? (
                                (
                                    <div> 
                                        
                                        <Link to="/dashboard"> {"Hello " + user.username || "Hello Admin"}</Link>
                                        <Link className="mx-4 text-secondary" to="#" onClick={()=>logout()}> Logout</Link>
                                    </div>
                                ) 
                            ) : (
                                (
                                    <div> 
                                        
                                        <Link to="/account"> {"Hello " + user.username || "Hello User"}</Link>
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