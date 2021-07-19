import { useLazyQuery, useMutation, useQuery } from "@apollo/client"
import { GET_CATEGORIES, GET_CATEGORY_BY_ID } from "../query"
import { Button } from "react-bootstrap";
import { CREATE_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY_STORE } from "../mutation";
import { useState } from "react";
import { CreateCategoryPopUp, PopUp, UpdateCatStorePopUp } from "../components/popUp";

export const Categories =()=>{
    const { error, data, refetch} = useQuery(GET_CATEGORIES)
    let numbers = 0

    const [categoryName, setCategoryName] = useState("")
    const [popUp, setPopUp] = useState(false)
    const [storePopUp, setStorePopUp] = useState(false)
    const [SuccessPopUp, setSuccessPopUp] = useState(false)
    const [singleCategory, setSingleCategory] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [image, setImage] = useState("")
    const [desc, setDesc] = useState("")
    const [storeValues, setStoreValues] = useState([])



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

        createCategory()
        })

        .catch(err => console.log(err))
    }

    const [createCategory] = useMutation(CREATE_CATEGORY, {variables: {name: categoryName, desc, imageUrl,  storeId: storeValues}, 
        onCompleted: () =>{
            refetch()
            setSuccessPopUp(true)
            reset()
        }
    })

    const [singleCategoryQuery ] = useLazyQuery (GET_CATEGORY_BY_ID, {
        onCompleted: (d)=> {
            setSingleCategory(d)
        }, 
        fetchPolicy: 'no-cache'
    })

    const [updateCategoryStore] = useMutation(UPDATE_CATEGORY_STORE, {variables: {id: categoryId, storeId: storeValues},
        onCompleted: ()=> {
            refetch()
            alert("completed")
        }
    })

    const [deleteCategory] = useMutation(DELETE_CATEGORY, {
        
        onCompleted: ()=> refetch()
    })

    const handleCategoryChange =(e)=> {
        setCategoryName(e.target.value)
    }

    const handleImageChange =(e)=> {
        setImage(e.target.files[0])
    }

    const handleDescChange =(e)=> {
        setDesc(e.target.value)
    }

    const reset = () => {
        setSingleCategory("")
        setCategoryId("")
        setStoreValues("")
        setCategoryName("")
    }
    const successIcon = <i className=" fs-1 far fa-check-circle"></i>

    const handleSubmit=(e)=>{
        e.preventDefault()
        uploadImage()
    }
    const handleUpdateSubmit=(e)=>{
        e.preventDefault()
        updateCategoryStore()
    }

    const close =()=>{
        setPopUp(false)
        setStorePopUp(false)
    }
    const closeModal =()=>{
        setSuccessPopUp(false)
    }


    const handleStoreIdsChange = (e)=> {
        let selected = document.querySelectorAll('#select-store-type option:checked');
        setStoreValues(Array.from(selected).map(el => el.value));

    }
    return (
        <>
            <section>
                <div className="row">
                <h2 className="mx-auto my-2">Categories </h2>

                    <div className="col-4">
                        <Button variant="success" size="md" onClick={()=> setPopUp(true)}> <i class="fas fa-plus mx-2"></i>Add</Button>

                    </div>
                </div>
            <div className="row p-2 my-3">
                    <div className="card col-sm-12 p-4">
                    <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Stores</th>
                    
                    <th scope="col">
                        Actions
                    </th>
                    </tr>
                </thead>
                <tbody>
               

                {data?.getCategories?.map(e =>{
                    numbers+=1
                    return(
                        <>
                            <span>{error? <p>Something wen't wrong :(</p>: ""}</span>
                            <tr key={e.id}>
                                <th scope="row">{numbers}</th> 
                                <td className="text-wrap text-capitalize">{e.name}</td>  
                                <td className="text-wrap text-capitalize">{e.stores.length}</td>  
                               
                                <td>
                                <Button variant="outline-secondary" onClick={()=> {
                                    singleCategoryQuery({variables: {id: e.id}})
                                    setCategoryId(e.id)
                                    setStorePopUp(true)
                                }} >Add/remove store </Button>
                                <Button variant="outline-danger" className="mx-2" onClick={()=>{
                                    window.confirm(`Are you sure you want to delete ${e.name} category?`)
                                    deleteCategory({variables: {id: e.id}})
                                }} >Delete </Button>
                                </td>
                            </tr>
                        </>
                        )
                    })}
                    
                </tbody>
                </table>
                    {error ? <p>Something wen't wrong :(</p>: ""}
                    </div>
                </div>
                {popUp ? <CreateCategoryPopUp title="Add Category"  data={{
                    value: data && data.getStores,
                    handleCategoryChange,
                    categoryName,
                    handleStoreIdsChange,
                    handleDescChange,
                    handleImageChange,
                    desc,
                    
                    }} 
                    close={close}
                    submit={handleSubmit}
            
                    />: ""}
                    {SuccessPopUp ?<PopUp title="Successful" text="Your order was placed successfully" icon={successIcon} close={closeModal}/>: ""}
                    
                    {/* update category store popUp */}
                    {storePopUp ? <UpdateCatStorePopUp data={{
                        stores: data?.getStores, 
                        singleCategory,
                        handleStoreIdsChange
                    }
                    }
                    close={close} 
                    title="Category Store Update"
                    
                    submit={handleUpdateSubmit}
                    />: ""}
            </section>
        </>

    )
}