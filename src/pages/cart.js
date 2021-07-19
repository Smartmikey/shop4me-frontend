import { useCookies } from "react-cookie";
import { CartItem } from "../components/CartItem";

const CartPage = () => {

    let [cookie, setCookie] = useCookies('')
    let cart  = cookie['cart']

    const remove =(id)=> {
       cart = cart.filter(e => e.id != id)

       setCookie('cart', cart)
    }

    const increment = () => {
        console.log("increment");
    }
    const decrement = () => {
        console.log("descrement");
    }
    return ( 


        <>
            <div className="container-fluid container my-4 text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Name of Product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Total</p>
                </div>
            </div>

            <div className="container-fluid">
                {cart?.map(item=>{
                   return <CartItem key={item.id} item={item} value={{remove, increment, decrement}}  />

                })}
           </div>
        </div>
        </>
     );
}
 
export default CartPage;