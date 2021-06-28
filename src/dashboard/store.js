import { useMutation, useQuery, useLazyQuery } from "@apollo/client"
import { GET_STORE, GET_SINGLE_STORE } from "../query"
import { Button } from "react-bootstrap";
import { CreateStorePopUp, UpdateStorePopUp } from "../components/popUp";
import { CREATE_STORE, DELETE_STORE, UPDATE_STORE } from "../mutation";
import { useState } from "react";


export const Store =()=>{
    const { error, data, refetch} = useQuery(GET_STORE)
    const [popUp, setPopUp]= useState(false)
    const [popUpdate, setPopUpdate]= useState(false)
    const [name, setName]= useState('')
    const [SingleStore, setSingleStore]= useState('')
    const [url, setUrl]= useState('')
    const [logoUrl, setLogoUrl]= useState('')
    const [categoryIds, setCategoryIds]= useState([])
    

    let values = []
    const reset = ()=> {
        setUrl("")
        setName("")
        setLogoUrl("")
        setCategoryIds([])
        values = []
    }
    const [single_store] = useLazyQuery(GET_SINGLE_STORE, {
        onCompleted: (d)=> {
            setSingleStore(d)
        }
    })
    const [createStore] = useMutation(CREATE_STORE, {variables: {name: name.toLowerCase(), url, logoUrl,categoryIds: values},
        onCompleted: ()=> {
            refetch()
            reset()
        }
    })
    const [updateStore] = useMutation(UPDATE_STORE, {variables: {name: name.toLowerCase(), url, logoUrl,categoryIds: values},
        onCompleted: ()=> {
            refetch()
            reset()
        }
    })
    const [deleteStore] = useMutation(DELETE_STORE, {onCompleted: () => {refetch()}})


    let numbers = 0
    error && console.log(error);

    const close =()=> {
        setPopUp(false)
    }
    
    const closeUpdate =()=> {
        setPopUpdate(false)
    }

    const handleNameChange =(e)=> {
        setName(e.target.value)
    } 
    const handleUrlChange =(e)=> {
        setUrl(e.target.value)
    } 
    const handleLogoUrlChange =(e)=> {
        setLogoUrl(e.target.value)
    } 
    const handleCategoryIdsChange =(e)=> {
        setCategoryIds(e.target.value)
        values = Array.prototype.slice.call(document.querySelectorAll('#select-cat-type option:checked'),0).map(function(v,i,a) { 
            return v.value; 
        });
        
    } 

    const handleSubmit = (e)=>{
        e.preventDefault()
        createStore()
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
                        <>
                            <tr key={e.id}>
                                <th scope="row">{numbers}</th> 
                                <td className="text-wrap">{e.name}</td>  
                               
                                <td className="text-justify">
                                    <Button className="mx-3" variant="outline-secondary" href={`http://www.${e.url}`} target="_blank" >Visit store</Button>
                                    <Button className="mx-3" variant="outline-danger" onClick={()=>{
                                        deleteStore({variables: {id:e.id}})
                                        refetch()
                                    }} >Delete</Button>
                                    <Button className="mx-3" variant="outline-primary" onClick={()=> {
                                        single_store({variables: {id: e.id}})
                                        setPopUpdate(true)
                                        
                                        }} >Update</Button>

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
                    categoryIds

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
                        SingleStore
                        }} 
                        close={closeUpdate}
                        submit={handleSubmit}
                        

                /> : ""}

            </section>
        </>

    )
}