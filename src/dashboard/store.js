import { useQuery } from "@apollo/client"
import { GET_CATEGORIES, GET_STORE } from "../query"
import { Button } from "react-bootstrap";
import {  } from "../components/popUp";


export const Store =()=>{
    const {called, error, data} = useQuery(GET_STORE)
    let numbers = 0
    console.log(error);
    return (
        <>
            <section>
                <div className="row">
                <h2 className="mx-auto my-2">Stores</h2>

                    <div className="col-4">
                        <Button variant="success" size="md"> <i class="fas fa-plus mx-2"></i>Add</Button>

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
                                    <Button className="mx-3" variant="outline-danger"  >Delete</Button>
                                    <Button className="mx-3" variant="outline-primary"  >Update</Button>
                                {/* <Button  href={`account/order/${e.id}`}>View </Button> */}
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
                {/* {popUp ?<CreateCategoryPopUp title="Update Order Details" text="Your order was placed successfully" data={{
                    value: data && data.getStores,
                    weightCh,
                    handleWeightChange,
                    statusCh,
                    handleStatusChange,
                    shippingCh,
                    handleShippingChange
                    }} 
                    close={close}
                    submit={handleSubmit}
                    }}
                    />: ""} */}

            </section>
        </>

    )
}