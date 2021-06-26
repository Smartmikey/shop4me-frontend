import { useMutation } from "@apollo/client"
import { useEffect, useState } from "react"
import { HeroSection } from "../components/hero"
import { Button, SubmitButton } from "../components/styled"
import { CREATEORDER, UploadUserImage } from "../mutation"
import Files from "react-butterfiles";
import { useCookies } from "react-cookie";
import { PopUp } from "../components/popUp";

export const Order =()=> {
    const[name, setName] = useState("")
    const[url, setUrl] = useState("")
    const[desc, setDesc] = useState("")
    const[price, setPrice] = useState("")
    const[date, setDate] = useState("")
    const[imageUrl, setImageUrl] = useState("")
    const [imageName, setImageName] = useState("")
    const [popUp, setPopUp] = useState(false)
    const successIcon = <i className=" fs-1 far fa-check-circle"></i>

    const resetForm = () => {
        setName("")
        setUrl("")
        setDesc("")
        setPrice("")
        setImageUrl("")
    }
    useEffect(()=> {
        setDate(new Date(Date.now()).toUTCString())
    })

    const [createOrder, {error, loading, data}] = useMutation(CREATEORDER, {variables: {name, url,desc, price: parseFloat(price), date, imageUrl},
        onCompleted: ()=>{
            setPopUp(true)
            resetForm()
        }
    })
    // let handleImage =(e) =>{
    //     // e.preventDefault
    //     setImage(e.target.files[0])
    //     setImageName(e.target.value)
    //     console.log("image: ",image);
    //     console.log(error);
    //     console.log(loading);
        
         
    //  }

    const closeModal =()=>{
        setPopUp(false)
    }

    console.log(data);

    const handleSubmit =(e)=>{
        e.preventDefault()
        
    }
    return (
        <div>
            <HeroSection title="Order now" text="" bglink="/order now.jpg"/>
            <section className="my-5 container mx-auto" style={{
                maxWidth: 800 
            }}>
                <form method="POST" onSubmit={(e)=>{
                    e.preventDefault(); 
                    createOrder() 
                    
                    }} >
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
                            <input value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)} type="text" name="product image" required className="form-control" id="Price" />
                            </div>
                        </div>

                        {/* <Files
                            multiple={false} 
                            maxSize="5mb"
                            multipleMaxCount={3}
                            accept={["image/jpg","image/jpeg","image/png"]}
                            onSuccess={files => handleImage(files)}
                            onError={errors => console.log(errors)}
                        > */}
                            {/* {({ browseFiles, getDropZoneProps, getLabelProps }) => (
                                <>
                                    <label {...getLabelProps()}>Product image</label>
                                    <div {...getDropZoneProps({ className: "myDropZone" })}/>
                                    <button onClick={browseFiles}>Select files...</button>
                                    <ol>
                                        {/* {image.map(file => (
                                            <li key={file.name}>{file.name}</li>
                                        ))} */}
                                        {/* {this.state.errors.map(error => (
                                            <li key={error.file.name}>
                                                {error.file.name} - {error.type}
                                            </li>
                                        ))} 
                                    </ol>
                                </>
                            )} */}
                        {/* </Files> */}
                        <div className="text-center">

                            <SubmitButton text="place order" />
                        </div>
                        {/* {data ? data : ""} */}
                    </form>
            </section>
            {popUp ?<PopUp title="Successful" text="Your order was placed successfully" icon={successIcon} close={closeModal}/>: ""}
        </div>
    )
}


