import { useLazyQuery, useQuery } from "@apollo/client"
import { GET_TRANSACTIONS } from "../query"
import { Button } from "react-bootstrap";

export const Transaction =()=>{

    const {called, error, data} = useQuery(GET_TRANSACTIONS)
    let numbers = 0
    console.log("Transaction data: ",data);
    return (
        <>
            <section>
            <div className="row p-2 my-3">
            <h2 className="mx-auto my-2">Transactions</h2>

                    <div className="card col-sm-12 p-4">
                    <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id</th>
                    <th scope="col">Amount</th>
                    <th scope="col">User</th>
                    <th scope="col">User Email</th>
                    <th scope="col">Order</th>
                    <th scope="col">Date</th>

                    </tr>
                </thead>
                <tbody>
                {/* {loading ? <span>loading</span> : ""} */}
            
                {data?.getTransactions?.map(e =>{
                        numbers+=1
                        return(
                            <tr key={e.id}>
                                <th scope="row">{numbers}</th> 
                                <td className="text-wrap">{e.trans_id}</td>  
                                <td>{e.amount}</td>
                                <td>{e.userId.username}</td>
                                <td>{e.userEmail}</td>
                                <td className="text-wrap"><a href={`/dashboard/order/${e.orderId.id}`} >{e.orderId.name}</a></td>
                                <td>{e.date}</td>
                               
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