import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ORDER, VERIFYUSER } from "../query";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { UpdateOrderPopUp } from "../components/popUp";
import { CREATE_TRANSACTION, DELETE_ORDER, UPDATE_ORDER, UPDATE_ORDER_PAYMENT } from "../mutation";
import { useCookies } from "react-cookie";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const OrderDetails = () => {
    const {order} = useParams()

    const {error, data, refetch} = useQuery(GET_ORDER, {variables: {id: order},
        onError: (err)=> {
            return <p>something wen't wrong {err}</p>
        },
        onCompleted: (data) => {
            //  {id, name, desc, price, imageUrl, payment, weight, status,  userId: {email, username}} = data?.getOrder
        },
        fetchPolicy: 'no-cache'
    })


const [popUp, setPopUp ]= useState(false)
const [weightCh, setWeightCh ]= useState(0.0)
const [statusCh, setStatusCh ]= useState("")
const [User, setUser ]= useState(null)
const [paid, setPaid ]= useState(null)
const [paymentCh, setPaymentCh ]= useState(null)
const [shippingCh, setShippingCh ]= useState("")
const [cookie, setCookie] = useCookies("token")


useQuery (VERIFYUSER, {variables: {token: cookie.token}, onError: (err)=> console.log(err), onCompleted: (d)=> {
    setUser(d.verifyUser)
}})

const [updateOrderPayment] = useMutation(UPDATE_ORDER_PAYMENT)
const [updateOrderDetails] = useMutation(UPDATE_ORDER, {variables: {orderId: order, status: statusCh, payment:paymentCh, weight: Number(weightCh), shippingFee: Number(shippingCh)},
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

const [createTransaction] = useMutation(CREATE_TRANSACTION)

const handleWeightChange= (e)=>{
    setWeightCh(e.target.value)
}
const handleStatusChange= (e)=>{
    setStatusCh(e.target.value)
}
const handleShippingChange= (e)=>{
    setShippingCh(e.target.value)
}
const handlePaymentChange= (e)=>{
    setPaymentCh(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    updateOrderDetails()

}

const checkPayable = ()=> {
    if(data && data.getOrder && data.getOrder.payment != "paid"  && data.getOrder.weight != null 
     && data.getOrder.shippingFee != null){
        return true
     }
     return false
}

const checkUserDetails = ()=> {
    if(
        data &&
        data.getOrder &&
        data.getOrder.userId.userDetails.nearestBusStop !="" &&
        data.getOrder.userId.userDetails.firstName !="" &&
        data.getOrder.userId.userDetails.lastName !="" &&
        data.getOrder.userId.userDetails.phone !="" &&
        data.getOrder.userId.userDetails.city !="" &&
        data.getOrder.userId.userDetails.state !="" 
    ){
        return true
    }
    return false
}
let amountToPay =(Number(data?.getOrder?.price) + Number(data?.getOrder?.shippingFee)) * 500
console.log(data && data.getOrder.shippingFee);
const config = {
    public_key: process.env.REACT_APP_FLUTTER_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: amountToPay,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      userId: User?.id,
      email: User?.email,
      phonenumber: User?.phone,
      name: `${User?.userDetails.firstName} ${User?.userDetails?.lastName}`,
      orderId: order,
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
 
// useEffect(()=> {
//     console.log("called");
//     verify()
// },[])

    return ( 
        <>
        
         {
             User && User.role? (

             
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
                    <h3 className="my-2">Name: {data?.getOrder.name}</h3>
                    <div className="col-md-8">
                        <p className="my-2"><span className="fw-bolder">Description: </span>{data?.getOrder.desc}</p>
                        <p ></p>
                    </div>
                    <div className="col-md-4">
                        <img src={data?.getOrder.imageUrl} className="w-75 border" />
                    </div>
                </div>

                <div className="row container"> 
                <hr className="w-90 text-center my-4" />
                    <div className="col-md-3 col-sm-6">
                        <p><span className="fw-bolder">Price: $</span>{data?.getOrder.price}</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <p><span className="fw-bolder">Payment: </span>{data?.getOrder.payment || "Not paid"}</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <p><span className="fw-bolder">Status: </span>{data?.getOrder.status}</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <p><span className="fw-bolder">Weight: </span>{data?.getOrder.weight || "Not Set"} kg</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <p><span className="fw-bolder">Shipping Fee: $</span>{data?.getOrder.shippingFee || "Not Set"}</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <p><span className="fw-bolder">Date</span>{data?.getOrder.date}</p>
                    </div>
                    <hr className="w-90 text-center my-4" />

                </div>
                <div className="row">
                    <h4>User details</h4>
                    <div className="col-md-6">
                        <p> <span className="fw-bolder">Email: </span>{data?.getOrder.userId.email}</p>
                    </div>
                    <div className="col-md-6">
                        <p> <span className="fw-bolder">Username: </span>{data?.getOrder.userId.username}</p>
                    </div>
                    <div className="col-md-4">
                        <p > <span className="fw-bolder">First Name: </span>{data?.getOrder.userId.userDetails.firstName  || ""}</p>
                    </div>
                    <div className="col-md-4">
                        <p ><span className="fw-bolder"> Last Name: </span>{data?.getOrder.userId.userDetails.lastName  || ""}</p>
                    </div>
                    <div className="col-md-4">
                        <p > <span className="fw-bolder">Address: </span>{data?.getOrder.userId.userDetails.address  || ""}</p>
                    </div>
                    <div className="col-md-4">
                        <p > <span className="fw-bolder">Phone: </span>{data?.getOrder.userId.userDetails.phone  || ""}</p>
                    </div>
                    <div className="col-md-4">
                        <p ><span className="fw-bolder"> Nearest bus stop: </span>{data?.getOrder.userId.userDetails.nearestBusStop || ""}</p>
                    </div>
                    <div className="col-md-4">
                        <p ><span className="fw-bolder"> City: </span>{data?.getOrder.userId.userDetails.city  || ""}</p>
                    </div>
                    <div className="col-md-4">
                        <p ><span className="fw-bolder"> State: </span>{data?.getOrder.userId.userDetails.state || ""}</p>
                    </div>
                    <div className="col-md-4">
                        <p ><span className="fw-bolder"> Country: </span>{data?.getOrder.userId.userDetails.country || ""}</p>
                    </div>
                </div>
                {popUp ?<UpdateOrderPopUp title="Update Order Details" text="Your order was placed successfully" data={{
                    value: data?.getOrder,
                    weightCh,
                    handleWeightChange,
                    statusCh,
                    handleStatusChange,
                    shippingCh,
                    handleShippingChange,
                    paymentCh,
                    handlePaymentChange
                    }} 
                    close={close}
                    submit={handleSubmit}
                    />: ""}

                {checkPayable() && checkUserDetails() ? (<Button className="w-25 mx-auto btn-primary"
                        onClick={() => {
                        handleFlutterPayment({
                            callback: (response) => {
                                setPaid(response)
                                console.log(response);
                                if(response && response.status === "successful") {
                                updateOrderPayment({varaible: {orderId: order, payment: "processing"}})
                                createTransaction({variables: {amount: String(response.amount), flw_ref: response.flw_ref,
                                    trans_ref: String(response.tx_ref), trans_id: String(response.transaction_id), orderId: order, userEmail: response.customer.email,
                                    userId: User && User.id
                                }})} else {
                                    setPaid(null)
                                }
                                closePaymentModal() // this will close the modal programmatically
                                refetch()
                            },
                            onClose: () => {},
                        });
                        }}
                    >
                        Pay Now
                    </Button>) : checkUserDetails() ? <p className="text-danger">Awaiting admin approval to pay</p> : <p className="text-danger">Kindly complete your profile to pay</p> }
                
            </section>
            ) : (
                <h3 className="mx-auto"> Unauthorized</h3>
            )
        }
        </>
     );
}
 
export default OrderDetails;