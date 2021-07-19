import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { VERIFYUSER } from "../query";
import { SubmitButton } from "../components/styled";
import { useEffect } from "react";
import { UPDATE_USER_DETAILS } from "../mutation";
import { PopUp } from "../components/popUp";
const UserProfile = () => {

    const [cookie] = useCookies("token")

    const [user, setUser] = useState('')
    const [userD, setUserD] = useState('')
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [dob, setDob] = useState('')
    const [RState, setRState] = useState('')
    const [nearestBusStop, setNearestBusStop] = useState('')
    const [popUp, setPopUp] = useState(false)

    const successIcon = <i className=" fs-1 far fa-check-circle"></i>


    const { data} = useQuery(VERIFYUSER, {variables: {token: cookie.token}, onCompleted: ()=> {setUser(data.verifyUser)},
        onError: (e) =>{
            return(<p>Sorry, something wen't wrong </p>)
        }
        })

        const [updateDetails, {error}] = useMutation(UPDATE_USER_DETAILS, {variables: {userId: user.id, fName, lName, address, dob, city, state:RState, phone, nearestBusStop},
        onError: (err)=> console.log(err),
        onCompleted: ()=>{
            setPopUp(true)
        }
        })

        const closeModal =()=>{
            setPopUp(false)
        }
        
        return ( 
            <>
            
            
            <section className="container">
                <h2 className="m-md-5">Personal information</h2>
            <form class="row g-3" 
                onSubmit={(e)=> {
                    e.preventDefault();
                    updateDetails()
                    }} 
            >
                
                        <>
                            <div class="col-md-6">
                    <label htmlFor="fName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="fName" onChange={(e)=> setFName(e.target.value)}  value={fName !== ""? fName : data && data.verifyUser.userDetails.firstName} />
                </div>
                 <div class="col-md-6">
                    <label htmlFor="lName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lName" onChange={(e)=> setLName(e.target.value)} value={lName !== ""? lName :  data?.verifyUser?.userDetails?.lastName}/>
                </div>
                
                <div class="col-12">
                    <label htmlFor="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St Apartment, studio, or floor" onChange={(e)=> setAddress(e.target.value)} value={address !== ""? address :  data?.verifyUser?.userDetails?.address} />
                </div>
                <div class="col-12">
                    <label htmlFor="busStop" class="form-label">Nearest Bus stop</label>
                    <input type="text" class="form-control" id="busStop" placeholder="bus stop name" onChange={(e)=> setNearestBusStop(e.target.value)} value={nearestBusStop !== ""? nearestBusStop :  data?.verifyUser?.userDetails?.nearestBusStop} />
                </div>
                
                <div class=" col-md-4">
                <label htmlFor="inputdob" class="form-label">Date of Birth</label>
                <div class="input-group input-group-text">
                    <input id="inputdob" class="form-group-text mt-0 border-0" style={{background: "#0000"}} type="date" onChange={(e)=> setDob(e.target.value)} value={dob !== ""? dob :  data?.verifyUser?.userDetails?.dob}  />

                </div>
                </div>
                <div class="col-md-4">
                    <label htmlFor="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" onChange={(e)=> setCity(e.target.value)} value={city !== ""? city :  data?.verifyUser?.userDetails?.city}/>
                </div>
                <div class="col-md-4">
                    <label htmlFor="tel" class="form-label">Phone Number</label>
                    <input type="tel" class="form-control" id="tel"  onChange={(e)=> setPhone(e.target.value)} value={phone !== ""? phone :  data?.verifyUser?.userDetails?.phone} />
                </div>
                <div class="col-md-4">
                    <label htmlFor="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select" onChange={(e)=> setRState(e.target.value)} value={RState !== ""? RState :  data?.verifyUser?.userDetails?.state}>
                        <option >--Select State--</option>
                        <option value="abia">Abia</option>
                        <option value="adamawa">Adamawa</option>
                        <option value="akwa Ibom">Akwa Ibom</option>
                        <option value="anambra">Anambra</option>
                        <option value="bauchi">Bauchi</option>
                        <option value="bayelsa">Bayelsa</option>
                        <option value="benue">Benue</option>
                        <option value="borno">Borno</option>
                        <option value="cross Rive">Cross River</option>
                        <option value="delta">Delta</option>
                        <option value="ebonyi">Ebonyi</option>
                        <option value="edo">Edo</option>
                        <option value="ekiti">Ekiti</option>
                        <option value="enugu">Enugu</option>
                        <option value="fCT">Federal Capital Territory</option>
                        <option value="gombe">Gombe</option>
                        <option value="imo">Imo</option>
                        <option value="jigawa">Jigawa</option>
                        <option value="kaduna">Kaduna</option>
                        <option value="kano">Kano</option>
                        <option value="katsina">Katsina</option>
                        <option value="kebbi">Kebbi</option>
                        <option value="kogi">Kogi</option>
                        <option value="kwara">Kwara</option>
                        <option value="lagos">Lagos</option>
                        <option value="nasarawa">Nasarawa</option>
                        <option value="niger">Niger</option>
                        <option value="ogun">Ogun</option>
                        <option value="ondo">Ondo</option>
                        <option value="osun">Osun</option>
                        <option value="oyo">Oyo</option>
                        <option value="plateau">Plateau</option>
                        <option value="rivers">Rivers</option>
                        <option value="sokoto">Sokoto</option>
                        <option value="taraba">Taraba</option>
                        <option value="yobe">Yobe</option>
                        <option value="zamfara">Zamfara</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <label htmlFor="country" class="form-label">Country</label>
                    <input type="text" class="form-control" id="country" disabled value={ data?.verifyUser?.userDetails?.country}/>

                </div> 
                
                {/* <span>{error && error.message}</span> */}
                <div class="col-12">
                    <SubmitButton  text="Update Info" />
                </div>
                        </>
                    
                
                </form>

            </section>
                {popUp ?<PopUp title="Profile Update" text="Your profile has been updated successfully" icon={successIcon} close={closeModal}/>: ""}
        </>
     );
}
 
export default UserProfile;