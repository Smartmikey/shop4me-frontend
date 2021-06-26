import { useMutation, useQuery } from "@apollo/client"
import { GET_CATEGORIES } from "../query"
import { Button } from "react-bootstrap";
import { CREATE_CATEGORY, DELETE_CATEGORY } from "../mutation";
import { useState } from "react";
import { CreateCategoryPopUp, PopUp } from "../components/popUp";

export const Categories =()=>{
    const { error, data, refetch} = useQuery(GET_CATEGORIES)
    let numbers = 0

    const [categoryName, setCategoryName] = useState("")
    const [popUp, setPopUp] = useState(false)
    const [SuccessPopUp, setSuccessPopUp] = useState(false)

    const [createCategory] = useMutation(CREATE_CATEGORY, {variables: {name: categoryName}, 
        onCompleted: () =>{
            refetch()
            setSuccessPopUp(true)
        }
    })

    const [deleteCategory] = useMutation(DELETE_CATEGORY, {
        onCompleted: ()=> refetch()
    })

    console.log(error);
    const handleCategoryChange =(e)=> {
        setCategoryName(e.target.value)
    }

    const successIcon = <i className=" fs-1 far fa-check-circle"></i>

    const handleSubmit=(e)=>{
        e.preventDefault()
        createCategory()
    }

    const close =()=>{
        setPopUp(false)
    }
    const closeModal =()=>{
        setSuccessPopUp(false)
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
                    <th scope="col">Number of stores</th>
                    
                    <th scope="col">
                        Actions
                    </th>
                    </tr>
                </thead>
                <tbody>
               

                {data && data.getCategories && data.getCategories.map(e =>{
                    numbers+=1
                    return(
                        <>
                            <span>{error? <p>Something wen't wrong :(</p>: ""}</span>
                            <tr key={e.id}>
                                <th scope="row">{numbers}</th> 
                                <td className="text-wrap">{e.name}</td>  
                                <td>{e.stores.length}</td>
                               
                                <td>
                                <Button variant="outline-secondary"  href={`account/order/${e.id}`}>View </Button>
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
                {popUp ?<CreateCategoryPopUp title="Add Category"  data={{
                    value: data && data.getStores,
                    // weightCh,
                    handleCategoryChange,
                    categoryName
                    // handleStatusChange,
                    // shippingCh,
                    // handleShippingChange
                    }} 
                    close={close}
                    submit={handleSubmit}
            
                    />: ""}
                    {SuccessPopUp ?<PopUp title="Successful" text="Your order was placed successfully" icon={successIcon} close={closeModal}/>: ""}

            </section>
        </>

    )
}