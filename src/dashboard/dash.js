import { useQuery } from "@apollo/client"
import { useState } from "react"
import { DASHBOARD_QUERY } from "../query"

export const Dash =()=>{
    const {error, data} = useQuery(DASHBOARD_QUERY)


    let [processing, setProcessing] = useState(0)
    let [completed, setCompleted] = useState(0)
    let [cancelled, setCancelled] = useState(0)
    let [transactions, settransactions] = useState(0)
    let [stores, setstores] = useState(0)
    let [category, setcategory] = useState(0)

    transactions = data?.getTransactions?.length
    stores = data?.getStores.length
    category = data?.getCategories.length

    console.log(data);
    return (
        
        <>

                {
                    
                    data?.getOrders?.map(order =>{
                        
                        console.log("order: ",order);
                        if(order.status == "processing"){  
                            processing += 1
                        }else if (order.status == "completed"){
                            completed += 1
                        }else if (order.status == "cancelled"){
                            cancelled += 1
                        }
                    })

                    // data.getTransactions.map(t => {

                    // })
                }
            <section className="container">
                <div className="row">
                    <div className="col-md-4 px-2 ">
                        <div className="card p-4 text-center">
                            <h3 className="card-title">Orders in Progress</h3>
                            <p className="card-details fs-2">{processing}</p>

                        </div>
                    </div>
                    <div className="col-md-4 px-2">
                        <div className="card p-4 text-center">
                            <h3 className="card-title">Orders Completed</h3>
                            <p className="card-details fs-2">{completed}</p>

                        </div>
                    </div>
                    <div className="col-md-4 px-2">
                        <div className="card p-4 text-center">
                            <h3 className="card-title">Cancelled Orders</h3>
                            <p className="card-details fs-2">{cancelled}</p>

                        </div>
                    </div>
                    <div className="mt-4" />
                    <div className="col-md-4 px-2">
                        <div className="card p-4 text-center">
                            <h3 className="card-title">Total Stores</h3>
                            <p className="card-details fs-2">{stores}</p>

                        </div>
                    </div>
                    <div className="col-md-4 px-2">
                        <div className="card p-4 text-center">
                            <h3 className="card-title">Total Categories</h3>
                            <p className="card-details fs-2">{category}</p>

                        </div>
                    </div>
                    <div className="col-md-4 px-2">
                        <div className="card p-4 text-center">
                            <h3 className="card-title">Total Transactions</h3>
                            <p className="card-details fs-2">{transactions}</p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}