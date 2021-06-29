import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ORDER, VERIFYUSER } from "../query";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { UpdateOrderPopUp } from "../components/popUp";
import { DELETE_ORDER, UPDATE_ORDER } from "../mutation";
import { useCookies } from "react-cookie";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

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
const [User, setUser ]= useState(null)
const [shippingCh, setShippingCh ]= useState("")
const [cookie, setCookie] = useCookies("token")


const [verify] = useLazyQuery (VERIFYUSER, {variables: {token: cookie.token}, onError: (err)=> console.log(err), onCompleted: (d)=> {
    setUser(d.verifyUser)
}})

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


const config = {
    public_key: process.env.REACT_APP_FLUTTER_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'Shope for me order payment',
      description: 'Payment for items in cart',
      logo: 'https://smartmikey.com/wp-content/uploads/2020/10/cropped-Smartmikey-letter-head-Recovered.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);


const close =()=> {
    setPopUp(false)
}
 
useEffect(()=> {
    verify()
},[])

console.log(User);
    return ( 
        <>
        
         {
             User && User.role ? (

             
            <section className="card p-md-4">
                <div className="row">
                {
                    User && User.role && User.role == "admin" ? (
                        <>
                        <Button className="w-50 d-inline m-3 col-md-2 col-sm-6" variant={"success"} onClick={()=> setPopUp(true)} >Update Order</Button>
                    <Button className="w-50 d-inline m-3 col-md-2 col-sm-6" variant={"danger"} onClick={()=> deleteOrder()}>Delete Order</Button> </>
                    ) : (
                        ""
                    )
                }
                
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
                        <p > <span className="fw-bolder">Phone: </span>{data && data.getOrder.userId.userDetails.phone  || ""}</p>
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

                <Button className="w-25 mx-auto btn-primary"
                        onClick={() => {
                        handleFlutterPayment({
                            callback: (response) => {
                            console.log(response);
                                closePaymentModal() // this will close the modal programmatically
                            },
                            onClose: () => {},
                        });
                        }}
                    >
                        Pay Now
                    </Button>
                
            </section>
            ) : (
                <h3 className="mx-auto"> Unauthorized</h3>
            )
        }
        </>
     );
}
 
export default OrderDetails;