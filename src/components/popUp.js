import { Button, Spinner } from "react-bootstrap"
import styled from "styled-components"

export const PopUp = (props)=>{
    return (
        <>
            <PopUpStyle>
                
                <div class="position-absolute top-50 start-50 top-div translate-middle rounded p-3">
                     <div className=" text-right w-100">
                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>props.close()}></button>
                    </div>
                    <span className="modal-icon w-100 mb-3 d-block mx-auto text-center ">{props.icon} </span>
                    <h3 className="text-center text-capitalize fw-bold">  {props.title || "Modal title"}</h3>
                    <p className="text-center">{props.text || "some random text"}</p>
                </div>

            </PopUpStyle>
        </>
    )
}
export const UpdateOrderPopUp = (props)=>{
    return (
        <>
            <UpdateOrderPopUpStyle>
                
                <div class="position-absolute top-50 start-30 top-div translate-middle rounded p-3">
                     <div className=" text-right w-100">
                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>props.close()}></button>
                    </div>
                    <h3 className="text-center text-capitalize fw-bold">  {props.title || "Modal title"}</h3>
                    <form class="row g-3 my-4 mx-2"
                        onSubmit={(e)=>{
                             props.submit(e)
                             props.close()
                            }}
                    >
                
                        
                    <div class="col-md-4">
                        <label for="weight" class="form-label">weight </label>
                        <input type="number" class="form-control" id="weight" onChange={(e)=> props.data.handleWeightChange(e)} value={props.data.weightCh != ""? props.data.weightCh : props.data.value.weight}  /> 
                        {/* onChange={(e)=> setFName(e.target.value)}  value={fName !== ""? fName : data && data.verifyUser.userDetails.firstName} */}
                    </div>
                    <div class="col-md-4">
                        <label for="status" class="form-label">Order Status</label>
                        <select id="status" class="form-select" onChange={(e)=> props.data.handleStatusChange(e)} value={props.data.statusCh != ""? props.data.stauseCh : props.data.value.status} >
                        <option >--Select Order Status--</option>
                        <option value="processing">Processing</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>  
                        </select>                  
                    </div>
                    <div class="col-md-4">
                        <label for="shipingFee" class="form-label">Shipping Fee</label>
                        <input type="number" class="form-control" id="shipingFee" onChange={(e)=> props.data.handleShippingChange(e)} value={props.data.shippingCh != ""? props.data.shippingCh : props.data.value.shippingFee}  />
                    </div>
                    <Button variant="success" type="submit" className="w-50 mx-auto mt-3 ">Update</Button>
                </form>
                </div>
                

            </UpdateOrderPopUpStyle>
        </>
    )
}
export const CreateCategoryPopUp = (props)=>{
    return (
        <>
            <UpdateOrderPopUpStyle>
                
                <div class="position-absolute top-50 start-30 top-div translate-middle rounded p-3">
                     <div className=" text-right w-100">
                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>props.close()}></button>
                    </div>
                    <h3 className="text-center text-capitalize fw-bold">  {props.title || "Modal title"}</h3>
                    <form class="row g-3 my-4 mx-2"
                        onSubmit={(e)=>{
                             props.submit(e)
                             props.close()
                            }}
                    >
                
                        
                    <div class="col-md-12">
                        <label for="catName" class="form-label">Category Name </label>
                        <input type="text" class="form-control" id="catName" onChange={(e)=> props.data.handleCategoryChange(e)} value={props.data.categoryName }  /> 
                    </div>
                    
                    <Button variant="success" type="submit" className="w-50 mx-auto mt-3 ">Update</Button>
                </form>
                </div>
                

            </UpdateOrderPopUpStyle>
        </>
    )
}
export const CreateStorePopUp = (props)=>{

    
    return (
        <>
            <UpdateOrderPopUpStyle>
                
                <div class="position-absolute top-50 start-30 top-div translate-middle rounded p-3">
                     <div className=" text-right w-100">
                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>props.close()}></button>
                    </div>
                    <h3 className="text-center text-capitalize fw-bold">  {props.title || "Modal title"}</h3>
                    <form class="row g-3 my-4 mx-2"
                        onSubmit={(e)=>{
                             props.submit(e)
                            }}
                    >
                
                        
                    <div class="col-md-6">
                        <label for="storeName" class="form-label">Store Name </label>
                        <input type="text" class="form-control" id="storeName" onChange={(e)=> props.data.handleNameChange(e)} value={props.data.name }  /> 
                    </div>
                    <div class="col-md-6">
                        <label for="storeLink" class="form-label">Store Link </label>
                        <input type="text" class="form-control" id="storeLink" onChange={(e)=> props.data.handleUrlChange(e)} value={props.data.url}  /> 
                    </div>
                    <div class="col-md-6">
                        <label for="storeLink" class="form-label">Categories </label>
                        <select class="form-select" multiple aria-label="multiple select " id="select-cat-type"  onChange={(e)=> props.data.handleCategoryIdsChange(e)}>
                            {props && props.data && props.data.cat.map(e =>{
                                return (
                                    <option key={e.id} value={e.id}>{e.name}</option>

                                )
                            })}
                        </select>
                        <small className="m-2">cmd/ctr + click to select multiple</small>
                    </div>
                    <div class="col-md-6">
                        <label for="storeLogo" class="form-label">Store Logo </label>
                        <input type="file" class="form-control" id="storeLogo" onChange={(e)=> props.data.handleLogoUrlChange(e)}  /> 
                    </div>
                    
                    {props.data.loading == true ? (
                                     <Button className="w-25 mx-auto"variant="primary" disabled>   <Spinner as="span" animation="border" size="sm" role="status"  aria-hidden="true"/> </Button>) :<Button variant="success" type="submit" className="w-50 mx-auto mt-3 ">Create Store</Button>}
                </form>
                </div>
                

            </UpdateOrderPopUpStyle>
        </>
    )
}


export const UpdateStorePopUp = (props)=>{
    const totalCat = props.data.cat

    let availableCat = props.data && props.data.SingleStore.getstore && props.data.SingleStore.getstore.categoryIds

    // console.log(" total  Cat: ",totalCat);
    // console.log(" available  Cat: ",availableCat);
    let x=0
    let ischecked;
    
    return (
        <>
            <UpdateOrderPopUpStyle>
                
                <div class="position-absolute top-50 start-30 top-div translate-middle rounded p-3">
                     <div className=" text-right w-100">
                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>props.close()}></button>
                    </div>
                    <h3 className="text-center text-capitalize fw-bold">  {props.title || "Modal title"}</h3>
                    <form class="row g-3 my-4 mx-2"
                        onSubmit={(e)=>{
                             props.submit(e)
                             props.close()
                            }}
                    >
                
                        
                    <div class="col-md-6">
                        <label for="storeName" class="form-label">Store Name </label>
                        <input type="text" class="form-control" id="storeName" onChange={(e)=> props.data.handleNameChange(e)} value={props.data.name != ""? props.data.name : props.data && props.data.SingleStore && props.data.SingleStore.getstore.name }  /> 
                    </div>
                    <div class="col-md-6">
                        <label for="storeLink" class="form-label">Store Link </label>
                        <input type="text" class="form-control" id="storeLink" onChange={(e)=> props.data.handleUrlChange(e)} value={props.data.url != ""? props.data.url : props.data && props.data.SingleStore && props.data.SingleStore.getstore.url }  /> 
                    </div>
                    <div class="col-md-12">
                        <label for="storeLink" class="form-label">Categories </label>
                        <select class="form-select" multiple aria-label="multiple select example" id="select-cat-type"  onChange={(e)=> props.data.handleCategoryIdsChange(e)} >

                            {/* collecting selected field and rendering them as selected */}
                            {props && props.data && props.data.cat.map(e =>{

                            ischecked = props.data && props.data.SingleStore.getstore && props.data.SingleStore.getstore.categoryIds
                            .find(g => {
                               return g.id == e.id
                            })
                                   
                                return (
                                    <option key={e.id} selected={ischecked} value={e.id}>{e.name}</option>

                                )
                            })}
                        </select>
                        <small className="m-2">cmd/ctr + click to select multiple</small>
                    </div>
                    {/* <div class="col-md-6">
                        <label for="storeLogo" class="form-label">Store Logo </label>
                        <input type="file" class="form-control" id="storeLogo" onChange={(e)=> props.data.handleLogoUrlChange(e)}  /> 
                    </div> */}
                    
                    <Button variant="success" type="submit" className="w-50 mx-auto mt-3 ">Update</Button>
                </form>
                </div>
                

            </UpdateOrderPopUpStyle>
        </>
    )
}

const PopUpStyle = styled.section`
    position: fixed;
    // background: #0009;
    height: 100vh;
    width: 100vw;
    top: 0;
    padding: auto ;
    h1 {
        color: green;
    }
    .top-div{
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.6)!important;
    }
    
    div {
        width: 40%;
        min-height: 35%;
        background: #fff;
        margin: auto auto;
        
    }
    body {
        overflow: hidden;
    }
    .modal-icon {
        color: green;
    }
`

const UpdateOrderPopUpStyle = styled.section`
    position: fixed;
    // background: #0009;
    height: 100vh;
    width: 100vw;
    top: 0;
    padding: auto ;
    h1 {
        color: green;
    }
    .top-div{
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.6)!important;
    }
    .start-30 {
        left: 35% !important;
    }
    div {
        width: 60%;
        min-height: 60%;
        background: #fff;
        margin: auto auto;
        
    }
    body {
        overflow: hidden;
    }
    .modal-icon {
        color: green;
    }
`