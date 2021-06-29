import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { HeroSection } from '../components/hero'
import { SubmitButton } from "../components/styled";
import { REGISTER } from '../mutation';
import { useCookies } from "react-cookie";




export const Register =()=> {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cookie, setCookie, removeCookie] = useCookies('')


    const [createUser, {loading, error, data}] = useMutation(REGISTER, {variables: {username, email, password},
        onCompleted: (d)=> {
            if(d ){
                if(cookie == "token"){
                    removeCookie("token")
                };
                console.log(d);
                setCookie("token", d.createUser.token, {expires: new Date(Date.now() + 900000000)})
                window.location.href= "/account"          
            }
        }
    })
    if (error) console.error(error)
    if (data) console.log(data)
    if (loading) console.log(loading)
    const onSubmits  = (e) => {
        e.preventDefault()
        createUser()
        

    }
    const resetState =()=> {
        setEmail("")
        setUsername("")
        setPassword("")
    }
    return (
        <div>
            <HeroSection title="Register" text="" bglink="/clay-banks-E2HgkL3LaFE-unsplash.jpeg"/>
            <section className="my-5 container mx-auto" style={{
                maxWidth: 800 
            }}>
                <form onSubmit={(e) => {
                    onSubmits(e)
                    resetState()
                    }}>
                    <fieldset className="form-group fieldset border p-3 rounded">
                        <legend className="w-auto px-2">Personal details</legend>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-4 col-form-label">Email Address</label>
                            <div className="col-sm-8">
                            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="email" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="Username" className="col-sm-4 col-form-label">Username</label>
                            <div className="col-sm-8">
                            <input value={username} onChange={(e)=> setUsername(e.target.value)} type="text" className="form-control" id="cPassword" />
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label htmlFor="password" className="col-sm-4 col-form-label">Password</label>
                            <div className="col-sm-8">
                            <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" id="password" />
                            </div>
                        </div>
                        
                    </fieldset>
                    
                        <div className="text-center">

                            <SubmitButton text="Register" />
                        </div>
                </form>
            </section>
        </div>
    )
}

           