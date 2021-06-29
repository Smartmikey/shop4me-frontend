import { useMutation } from "@apollo/client"
import { useEffect, useState } from "react"
import { HeroSection } from "../components/hero"
import { SubmitButton } from "../components/styled"
import { CREATEORDER, UploadUserImage } from "../mutation"
import Files from "react-butterfiles";
import { useCookies } from "react-cookie";
import { PopUp } from "../components/popUp";
import { Button, Spinner } from "react-bootstrap";

export const Order =()=> {
    const[name, setName] = useState("")
    const[url, setUrl] = useState("")
    const[desc, setDesc] = useState("")
    const[price, setPrice] = useState("")
    const[loading, setLoading] = useState(null)
    const[date, setDate] = useState("")
    const[imageUrl, setImageUrl] = useState("")
    const[image, setImage] = useState("")
    const [imageName, setImageName] = useState("")
    const [popUp, setPopUp] = useState(false)
    const successIcon = <i className=" fs-1 far fa-check-circle"></i>

    const resetForm = () => {
        setName("")
        setImageName("")
        setUrl("")
        setDesc("")
        setPrice("")
        setImageUrl("")
    }
    useEffect(()=> {
        setDate(new Date(Date.now()).toUTCString())
    })

    const [createOrder, {error, data}] = useMutation(CREATEORDER, {variables: {name, url,desc, price: parseFloat(price), date, imageUrl},
        onCompleted: ()=>{
            setLoading(false)
            setPopUp(true)
            resetForm()
        }
    })

    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "xmawfybc")
        data.append("cloud_name","smartmikey")
        fetch("https://api.cloudinary.com/v1_1/smartmikey/image/upload",{
        method:"post",
        body: data
        })
        .then(resp => resp.json())
        .then(data => {
        setImageUrl(data.url)

        createOrder()
        })

        .catch(err => console.log(err))
        }
        
    let handleImage =(e) =>{
        // e.preventDefault
        setImage(e.target.files[0])
        setImageName(e.target.value)
        
        
         
     }

    const closeModal =()=>{
        setPopUp(false)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        
    }
    console.log(imageUrl);
    return (
        <div>
            <HeroSection title="Order now" text="" bglink="/order now.jpg"/>
            <section className="my-5 container mx-auto" style={{
                maxWidth: 800 
            }}>
                <form method="POST" 
                onSubmit={(e)=>{
                    e.preventDefault(); 
                    setLoading(true)
                    uploadImage()
                    
                    
                    }} 
                    >
                        <div className="form-group row">
                            <label htmlFor="website" className="col-sm-4 col-form-label">Website link</label>
                            <div className="col-sm-8">
                            <input  value={url} onChange={(e)=> setUrl(e.target.value)} type="url" className="form-control" id="website" required />
                            </div> 
                        </div>
                        <div className="form-group row">
                            <label htmlFor="prodName" className="col-sm-4 col-form-label">Product Name</label>
                            <div className="col-sm-8">
                            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" required className="form-control" id="prodName" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="prodDesc" className="col-sm-4 col-form-label">Product description</label>
                            <div className="col-sm-8">
                            <input required value={desc} onChange={(e)=> setDesc(e.target.value)} type="text" className="form-control" id="prodDesc" />
                            </div>
                        </div>
                      
                        <div className="form-group row">
                            <label htmlFor="Price" className="col-sm-4 col-form-label">Price($)</label>
                            <div className="col-sm-8">
                            <input value={price} onChange={(e)=> setPrice(e.target.value)} type="number" required className="form-control" id="Price" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="Image" className="col-sm-4 col-form-label">Product image</label>
                            <div className="col-sm-8">
                            <input value={imageName} onChange={(e)=> handleImage(e)} type="file" name="product image" required className="form-control" id="image" />
                            {/* <button onClick={uploadImage}>Upload</button> */}
                            </div>
                        </div>

                        
                        <div className="text-center">

                        {loading == true ? (<Button variant="primary" disabled>
    <Spinner as="span" animation="border" size="sm" role="status"  aria-hidden="true"/> </Button>) :  <SubmitButton text= "place order" />}
                        </div>
                        {/* {data ? data : ""} */}
                    </form>
            </section>
            {popUp ?<PopUp title="Successful" text="Your order was placed successfully" icon={successIcon} close={closeModal}/>: ""}
        </div>
    )
}


