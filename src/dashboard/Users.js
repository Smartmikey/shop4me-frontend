import { useQuery } from "@apollo/client"
import { useState } from "react"
import { Button } from "react-bootstrap"
import { GETUSERS } from "../query"

export const Users =()=>{
    const [fetchedData, setFetchedData] = useState("hello")
    const [count, setCount] = useState(0)
    const {error, loading, data} = useQuery(GETUSERS, {
        onCompleted: ()=> setFetchedData(data)
    })

    let numbers  =0


    
    return (
        <div className="container">
            <h2 className="mx-auto my-2">Users</h2>

            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    
                    </tr>
                </thead>
                <tbody>
                {loading ? <span>loading</span> : ""}

                    {data && data.getUsers && data.getUsers.map(e=>{
                        numbers+=1
                        return(
                            <tr key={e.id}>
                                <th scope="row">{numbers}</th> 
                                <td>{e.username}</td>  
                                <td>{e.email}</td>
                                <td>{e.role}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
                </table>
        </div>
    )
}