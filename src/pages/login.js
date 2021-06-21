import { useLazyQuery } from "@apollo/client"
import { useState } from "react"
import { LOGIN } from "../query"
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";
import { SubmitButton } from "../components/styled";

export const Login =()=> {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cookie, setCookie, removeCookie] = useCookies('')

    const options = {
        email,
        password
    }
    const [login, {called, loading, error,data}] = useLazyQuery(LOGIN, {
        variables: {email, password}, 
        onCompleted: (d) => {
            completedFunction(d)
        },
        onError: (err) => {
            console.log(err);
        }
    })

    console.log("email on state: ", email);

    if(loading) <h4>Loading...</h4>
    if(error) <h4>somtething went wrong</h4>
    const completedFunction = (data) =>{
        if(data) {
            setCookie("token", data.login.token, {expires: new Date(Date.now() + 900000000)})
            window.location.href = "/dashboard"
        }
    }
    const handleSubmit = e =>{
        e.preventDefault()
            // handleSubmit(e)
            completedFunction(data)
            // resetLogin()

    }

    const resetLogin = ()=>{
        setEmail('')
        setPassword('')
    }

    
    return (
        
        <>
        <section className="m-sm-5 text-center">
        <h1 >Welcome back.</h1>
        <p>kindly login to be able to place an order</p>
        <form onSubmit={(e)=>{
            handleSubmit(e);

            login()

        }} className="text-left container " style={{maxWidth: 500}}
            
        >
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input value={email} required onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp"  />
                
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input value={password} required onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" id="password"  />
            </div>
            <div className="text-center" >
            <SubmitButton text="login" className="ml-0 btn btn-outline-primary py-2 px-3" />

            </div>
        </form>
        </section>
            
        </>
    )
}