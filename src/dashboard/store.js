import { useMutation, useQuery, useLazyQuery } from "@apollo/client"
import { GET_STORE, GET_SINGLE_STORE } from "../query"
import { CreateStorePopUp, UpdateStorePopUp } from "../components/popUp";
import { CREATE_STORE, DELETE_STORE, UPDATE_STORE } from "../mutation";
import { useState } from "react";
import { Button } from "react-bootstrap";


export const Store =()=>{
    const { error, data, refetch} = useQuery(GET_STORE)
    const [popUp, setPopUp]= useState(false)
    const [popUpdate, setPopUpdate]= useState(false)
    const [name, setName]= useState('')
    const [loading, setLoading]= useState(null)
    const [SingleStore, setSingleStore]= useState('')
    const [url, setUrl]= useState('')
    const [logo, setLogo]= useState('')
    const [logoUrl, setLogoUrl]= useState('')
    const [categoryIds, setCategoryIds]= useState([])
    const [StoreId, setStoreId]= useState("")
    let [values, setValues] = useState([])
    
    let selected;


    const reset = ()=> {
        setUrl("")
        setName("")
        setLogoUrl("")
        setStoreId("")
        setCategoryIds([])
        setValues([])
    }
    const [single_store, ] = useLazyQuery(GET_SINGLE_STORE, {
        onCompleted: (d)=> {
            setSingleStore(d)
        }, 
        fetchPolicy: 'no-cache'
    })
    const [createStore] = useMutation(CREATE_STORE, {variables: {name: name.toLowerCase(), url, logoUrl,categoryIds: values},
        onCompleted: ()=> {
            refetch()
            setLoading(false)
            close()
            reset()
        }
    })
    const [updateStore] = useMutation(UPDATE_STORE, {variables: {id: StoreId, name: name.toLowerCase(), url, logoUrl, categoryIds: values},
    onCompleted: ()=> {
        refetch()
        setLoading(false)
        reset()
    }
})
const [deleteStore] = useMutation(DELETE_STORE, {onCompleted: () => refetch()})

const uploadImage = () => {
    const data = new FormData()
    data.append("file", logo)
    data.append("upload_preset", "xmawfybc")
    data.append("cloud_name","smartmikey")
    data.append("folder","logo")
    fetch("https://api.cloudinary.com/v1_1/smartmikey/image/upload",{
    method:"post",
    // headers: "no-cors",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
    setLogoUrl(data.url)
    createStore()
    })

    .catch(err => console.log(err))
    }

let numbers = 0
error && console.log(error);

const close =()=> {
    setPopUp(false)
    reset()
}

const closeUpdate =()=> {
    setPopUpdate(false)
    reset()
}

const handleNameChange =(e)=> {
    setName(e.target.value)
} 
const handleUrlChange =(e)=> {
    setUrl(e.target.value)
} 
const handleLogoUrlChange =(e)=> {
    setLogo(e.target.files[0])
} 
const handleCategoryIdsChange =(e)=> {
  
    selected = document.querySelectorAll('#select-cat-type option:checked');
    setValues(Array.from(selected).map(el => el.value));

    
} 

const handleSubmit = (e)=>{
    e.preventDefault()
    setLoading(true)
    uploadImage()

}

const handleUpdateSubmit = (e)=>{
    e.preventDefault()
    setLoading(true)
    uploadImage()
}
return (
    <>
            <section>
                <div className="row">
                <h2 className="mx-auto my-2">Stores</h2>

                    <div className="col-4">
                        <Button variant="success" size="md" onClick={()=> setPopUp(true)}> <i class="fas fa-plus mx-2"></i>Add</Button>

                    </div>
                </div>
            <div className="row p-2 my-3">
                    <div className="card col-sm-12 p-4">
                <table className="table table-responsive-sm">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                    <th scope="col">
                        Action
                    </th>
                    </tr>
                </thead>
                <tbody>
               

                {data && data.getStores && data.getStores.map(e =>{
                    numbers+=1
                    return(
                            <tr key={e.id}>
                                <th scope="row">{numbers}</th> 
                                <td className="text-wrap">{e.name}</td>  
                               
                                <td className="text-justify">
                                    <Button className="mx-3" variant="outline-secondary" href={`http://www.${e.url}`} target="_blank" >Visit store</Button>
                                    <Button className="mx-3" variant="outline-danger" onClick={()=>{
                                        deleteStore({variables: {id:e.id}})
                                        refetch()
                                    }} >Delete</Button>
                                    <Button className="mx-3" disabled={loading} variant="outline-primary" onClick={()=> {
                                        single_store({variables: {id: e.id}})
                                        setStoreId(e.id)
                                        setPopUpdate(true)
                                        
                                        }} > Update</Button>

                                </td>
                            </tr>
                        )
                    })}  
                   
                    
                </tbody>
                </table>
                    {error ? <p>Something wen't wrong :(</p>: ""}
                    </div>
                </div>
                {popUp ?<CreateStorePopUp title="Create Store" data={{
                    value: data && data.getStores,
                    cat: data && data.getCategories,
                    handleCategoryIdsChange,
                    handleNameChange,
                    handleUrlChange,
                    handleLogoUrlChange,
                    name,
                    url,
                    logoUrl,
                    categoryIds,
                    loading

                    }} 
                    close={close}
                    submit={handleSubmit}
                    
                
                    />: ""}

                {popUpdate ? <UpdateStorePopUp title="Update Store Details" data={{
                        value: data && data.getStores,
                        cat: data && data.getCategories,
                        handleCategoryIdsChange,
                        handleNameChange,
                        handleUrlChange,
                        handleLogoUrlChange,
                        name,
                        url,
                        logoUrl,
                        categoryIds,
                        SingleStore,
                        loading
                        }} 
                        close={closeUpdate}
                        submit={handleUpdateSubmit}
                        

                /> : ""}

            </section>
        </>

    )
}