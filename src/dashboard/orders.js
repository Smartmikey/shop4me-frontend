import { useLazyQuery, useQuery } from "@apollo/client"
import { GET_ORDERS } from "../query"
import { Button } from "react-bootstrap";

export const Orders =()=>{

    const {called, error, data} = useQuery(GET_ORDERS)
    let numbers = 0

    return (
        <>
            <section>
            <div className="row p-2 my-3">
            <h2 className="mx-auto my-2">Orders</h2>

                    <div className="card col-sm-12 p-4">
                    <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">User</th>
                    <th scope="col">Status</th>
                    <th scope="col">Payment</th>
                    <th scope="col">
                        Actions
                    </th>
                    </tr>
                </thead>
                <tbody>
                {/* {loading ? <span>loading</span> : ""} */}
            
                {data && data.getOrders && data.getOrders.map(e =>{
                        numbers+=1
                        return(
                            <tr key={e.id}>
                                <th scope="row">{numbers}</th> 
                                <td className="text-wrap">{e.name}</td>  
                                <td>{e.price}</td>
                                <td>{e.userId.username}</td>
                                <td>{e.status}</td>
                                <td>{e.payment || "Not paid"}</td>
                                <td>
                                <Button variant="outline-secondary"  href={`/dashboard/order/${e.id}`}>View </Button>
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

    )
}