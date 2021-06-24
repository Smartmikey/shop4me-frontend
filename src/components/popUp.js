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