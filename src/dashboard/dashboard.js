import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import {VERIFYUSER} from "../query"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Orders } from "./orders";
import { Users } from "./Users";
import { Dash } from "./dash";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { Categories } from "./Categories";



export const Dashboard =()=> {
    const [cookie, setCookie, removeCookie] = useCookies("token")

    const [user, setUser] = useState('')

    const {error, data} = useQuery(VERIFYUSER, {variables: {token: cookie.token}, onCompleted: ()=> setUser(data.verifyUser)})
   

        if(user.role !== "admin"){
            return (
                <h4>You are not permitted to view this page</h4>
            )
         }
    const logout = ()=> {
        // alert("clicked")
        removeCookie("token")
        window.location.href = "/"
    }
        return(
        <>
            <StyledDash>
            <Router >
                <main className="row">
                <aside className="col-md-2 bg-primary 
                p-3 text-uppercase text-white sticky-top"
                    style={{
                        height: "100vh"
                    }}
                >
                    <div className="container">
                        <ul className="list-style">
                            <li className="">
                            <a className="text-white" href="/">Home</a>
                            </li>
                            <li className="">
                            <Link className="text-white" to="/dashboard/">Dashboard</Link>
                            </li>
                            <li className="">
                            <Link className="text-white" to="/dashboard/orders">Orders</Link>
                            </li>
                            <li className="">
                            <Link className="text-white" to="/dashboard/users">users</Link>
                            </li>
                            <li className="">
                            <Link className="text-white" to="/dashboard/categories">Categories</Link>
                            </li>
                        </ul>
                        
                    </div>
                </aside>
                <div className="col-md-10 m-0 p-0">
                    
                    <header className="p-3 d-flex bg-gray"
                        style={{
                            background: "#e5e5e5"
                        }}
                    >
                        hello from header
                        <div className="ml-auto mr-4">
                        <Link className=" mr-auto text-secondary" to="#" onClick={()=>logout()}> Logout</Link>
                        </div>
                    </header>
                    <section className="p-5"> 
                        <Switch>
                            
                            <Route path="/dashboard/orders" component={Orders} />
                            <Route path="/dashboard/categories" component={Categories} />
                            <Route path="/dashboard/users" component={Users}/>
                            <Route path="/dashboard/" component={Dash} />
                            
                        </Switch>
                    </section>
                </div>
                
            </main>
            
            </Router>
            </StyledDash>
        </>
    )
}


const StyledDash = styled.section`
    // background: red;
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