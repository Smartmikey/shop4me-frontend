import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { VERIFYUSER } from "../query";
import { Button } from "react-bootstrap";

const UserAccount = () => {
    
    const [cookie, setCookie] = useCookies ("token")
    const [user, setUser] = useState('')
    let [processing, setProcessing] = useState(0)
    let [completed, setCompleted] = useState(0)
    let [cancelled, setCancelled] = useState(0)

    const [verify, {called, error, data}] = useLazyQuery(VERIFYUSER, {variables: {token: cookie.token}, onCompleted: ()=> setUser(data.verifyUser)})

    let rememberUser =()=>{
        if(cookie.length !=0){
            verify()
        }
    }
    let numbers = 0

    useEffect(()=> rememberUser(), [])
    return ( 
        <>
            <section className="container">
                {
                    
                    data && data.verifyUser && data.verifyUser.orders.map(order =>{
                        
                        
                        if(order.status == "processing"){
                            processing += 1
                        }else if (order.status == "completed"){
                            completed += 1
                        }else if (order.status == "cancelled"){
                            cancelled += 1
                        }
                    })
                }
                <div className="row">
                    <div className="col-md-4 px-2 ">
                        <div className="card p-4 text-center">
                            <h3 className="card-title">Orders in progress</h3>
                            <p className="card-details fs-2">{processing}</p>
                        </div>
                    </div>
                    <div className="col-md-4 px-2">
                        <div className="card p-4 text-center">
                            <h3 className="card-title">Orders completed</h3>
                            <p className="card-details fs-2">{completed}</p>

                        </div>
                    </div>
                    <div className="col-md-4 px-2">
                        <div className="card p-4 text-center">
                            <h3 className="card-title">Cancelled Orders</h3>
                            <p className="card-details fs-2">{cancelled}</p>

                        </div>
                    </div>
                </div>
                <div className="row p-2 my-3">
                    <div className="card col-sm-12 p-4">
                    <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Payment</th>
                    <th scope="col">
                        Actions
                    </th>
                    </tr>
                </thead>
                <tbody>
                {/* {loading ? <span>loading</span> : ""} */}

                {data && data.verifyUser && data.verifyUser.orders.map(e =>{
                        numbers+=1
                        return(
                            <tr key={e.id}>
                                <th scope="row">{numbers}</th> 
                                <td className="text-wrap">{e.name}</td>  
                                <td>{e.price}</td>
                                <td>{e.status}</td>
                                <td>{e.payment || "Not paid"}</td>
                                <td>
                                <Button variant="outline-secondary"  href={`account/order/${e.id}`}>View </Button>
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
                </table>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default UserAccount;