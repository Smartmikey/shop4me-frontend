import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import {VERIFYUSER} from "../query"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import styled from "styled-components";
import { useCookies } from "react-cookie";
import UserAccount from "./User";
import UserProfile from "./profile";
import Support  from "../pages/support";



export const Account =()=> {
    const [cookie, setCookie, removeCookie] = useCookies("token")

    const [user, setUser] = useState('')

    const {error, data} = useQuery(VERIFYUSER, {variables: {token: cookie.token}, onCompleted: ()=> setUser(data.verifyUser)})
   

        // if(user.role !== "admin"){
        //     return (
        //         <h4>You are not permitted to view this page</h4>
        //     )
        //  }
    const logout = ()=> {
        // alert("clicked")
        removeCookie("token")
        window.location.href = "/"
    }
        return(
        <>
            <StyledAcc>
            <Router >
                <main className="row">
                <aside className="col-md-2 bg-secondary 
                p-3 text-uppercase text-white sticky-top"
                    style={{
                        height: "100vh"
                    }}
                >
                    <div className="container">
                        <ul className="list-style">
                            
                            <li className="">
                            <Link className="text-white" to="/account/">Account</Link>
                            </li>
                            <li className="">
                            <Link className="text-white" to="/account/profile">Update Profile</Link>
                            </li>
                            <li className="">
                            <Link className="text-white" to="./support">Support</Link>
                            </li>
                            
                        </ul>
                        
                    </div>
                </aside>
                <div className="col-md-10 m-0 p-0">
                    
                    
                    <section className="p-5"> 
                        <Switch>
                            
                            <Route path="/account/profile" component={UserProfile} />
                            <Route path="/profile" component={Support} />
                            <Route path="/account/" component={UserAccount} />
                            
                            
                        </Switch>
                    </section>
                </div>
                
            </main>
            
            </Router>
            </StyledAcc>
        </>
    )
}


const StyledAcc = styled.section`
    ul {
        margin:0;
        padding: 0;
        line-height: 2.3rem;
        li {
            list-style-type: none;
            padding: 0.7rem 0;

            // &:hover {
            //     background: #fff;
            //     color: blue;
            // }
        }
    }
`