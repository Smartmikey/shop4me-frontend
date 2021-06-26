import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ORDER } from "../query";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { UpdateOrderPopUp } from "../components/popUp";
import { DELETE_ORDER, UPDATE_ORDER } from "../mutation";

const OrderDetails = () => {
    const {order} = useParams()

    const {error, data, refetch} = useQuery(GET_ORDER, {variables: {id: order},
        onError: (err)=> {
            return <p>something wen't wrong {err}</p>
        },
        onCompleted: (data) => {
            //  {id, name, desc, price, imageUrl, payment, weight, status,  userId: {email, username}} = data && data.getOrder
        }
    })


const [popUp, setPopUp ]= useState(false)
const [weightCh, setWeightCh ]= useState(0.0)
const [statusCh, setStatusCh ]= useState("")
const [shippingCh, setShippingCh ]= useState("")

const [updateOrderDetails] = useMutation(UPDATE_ORDER, {variables: {orderId: order, status: statusCh, weight: Number(weightCh), shippingFee: Number(shippingCh)},
    onCompleted: ()=> {
        refetch()
        console.log("updated successfully");
    }
})

const [deleteOrder] = useMutation(DELETE_ORDER, {variables: {id: order},
    onCompleted: ()=> {
        window.location.href = "/dashboard/orders"
    }
})

const handleWeightChange= (e)=>{
    setWeightCh(e.target.value)
}
const handleStatusChange= (e)=>{
    setStatusCh(e.target.value)
}
const handleShippingChange= (e)=>{
    setShippingCh(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    updateOrderDetails()

}

const close =()=> {
    setPopUp(false)
}
 
    return ( 
        <>
         
            <section className="card p-md-4">
                <div className="row">

                <Button className="w-50 d-inline m-3 col-md-2 col-sm-6" variant={"success"} onClick={()=> setPopUp(true)} >Update Order</Button>
                <Button className="w-50 d-inline m-3 col-md-2 col-sm-6" variant={"danger"} onClick={()=> deleteOrder()}>Delete Order</Button>
                </div>
                    <h2 className="mx-auto my-2">Order details</h2>
                <div className="row">
                    <h3 className="my-2">Name: {data && data.getOrder.name}</h3>
                    <div className="col-md-8">
                        <p className="my-2"><span className="fw-bolder">Description: </span>{data && data.getOrder.desc}</p>
                        <p ></p>
                    </div>
                    <div className="col-md-4">
                        <img src={data && data.getOrder.imageUrl} className="w-75 border" />
                    </div>
                </div>

                <div className="row container"> 
                <hr className="w-90 text-center my-4" />
                    <div className="col-md-3 col-sm-6">
                        <p><span className="fw-bolder">Price: $</span>{data && data.getOrder.price}</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <p><span className="fw-bolder">Payment: </span>{data && data.getOrder.payment || "Not paid"}</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <p><span className="fw-bolder">Status: </span>{data && data.getOrder.status}</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <p><span className="fw-bolder">Weight: </span>{data && data.getOrder.weight || "Not Set"} kg</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <p><span className="fw-bolder">Shipping Fee: $</span>{data && data.getOrder.shippingFee || "Not Set"}</p>
                    </div>
                    <hr className="w-90 text-center my-4" />

                </div>
                <div className="row">
                    <h4>User details</h4>
                    <div className="col-md-6">
                        <p> <span className="fw-bolder">Email: </span>{data && data.getOrder.userId.email}</p>
                    </div>
                    <div className="col-md-6">
                        <p> <span className="fw-bolder">Username: </span>{data && data.getOrder.userId.username}</p>
                    </div>
                    <div className="col-md-4">
                        <p > <span className="fw-bolder">First Name: </span>{data && data.getOrder.userId.userDetails.firstName  || ""}</p>
                    </div>
                    <div className="col-md-4">
                        <p ><span className="fw-bolder"> Last Name: </span>{data && data.getOrder.userId.userDetails.lastName  || ""}</p>
                    </div>
                    <div className="col-md-4">
                        <p > <span className="fw-bolder">Address: </span>{data && data.getOrder.userId.userDetails.address  || ""}</p>
                    </div>
                    <div className="col-md-4">
                        <p ><span className="fw-bolder"> Nearest bus stop: </span>{data && data.getOrder.userId.userDetails.nearestBusStop || ""}</p>
                    </div>
                    <div className="col-md-4">
                        <p ><span className="fw-bolder"> City: </span>{data && data.getOrder.userId.userDetails.city  || ""}</p>
                    </div>
                    <div className="col-md-4">
                        <p ><span className="fw-bolder"> State: </span>{data && data.getOrder.userId.userDetails.state || ""}</p>
                    </div>
                    <div className="col-md-4">
                        <p ><span className="fw-bolder"> Country: </span>{data && data.getOrder.userId.userDetails.country || ""}</p>
                    </div>
                </div>
                {popUp ?<UpdateOrderPopUp title="Update Order Details" text="Your order was placed successfully" data={{
                    value: data && data.getOrder,
                    weightCh,
                    handleWeightChange,
                    statusCh,
                    handleStatusChange,
                    shippingCh,
                    handleShippingChange
                    }} 
                    close={close}
                    submit={handleSubmit}
                    />: ""}

            </section>
        </>
     );
}
 
export default OrderDetails;