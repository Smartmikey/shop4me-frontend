// import logo from "/shop4me.png"
import { useQuery } from "@apollo/client";
import React from "react"
import styled from "styled-components"
import { VERIFYUSER } from "../query";
import { NotLoggedIn } from "./nav-log-out";
import { LoggedIn } from "./nav-logged-in";


function Nav() {
    // let token = window.localStorage.getItem("token")
    // const {error, loading, data} = useQuery(VERIFYUSER, {variables: {token: token}})
    // let userLoggedIn = false
    // if(data == "undefined"){
    //     userLoggedIn = true
    // }else {
    //     userLoggedIn = false

    // }
    // console.log(data);
    // const {verifyUser: {email}}= data
    return (
        <React.Fragment>
             <NotLoggedIn />
            
        </React.Fragment>
    )
}
const StyledNav = styled.header `
    padding: 16px;
    .nav {
        display: flex;
        
    }
    .nav>ul {
        list-style-type: none;
        display: flex;
        width: 60%;
        justify-content: flex-end;
        margin-right: 200px;
        li {
            margin: auto 15px;
            a {
                color: #99A6B8;
                text-decoration: none;
                &:hover {
                    color: #00214C;
                    weight: 600;
                }
            }
        }
    }

    .nav>div {
        width: 40%
    }
`
export default Nav