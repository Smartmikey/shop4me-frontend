import styled from "styled-components"

export const CategoryImage = (props) => {

    return (
        <div>
        <GalleryStype className="row mx-auto">
        {
            props?.category?.map(item=>(

                <div className="col-md-3 col-lg-3 col-sm-6" key={item.id}>
                    <a href="#">
                    
                    <div className="module mid" style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${item.logoUrl}")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat" 
                        }}>
                    <h2>{item.name}</h2>
                    </div>
                    </a>
                </div>
            ))
        }
        </GalleryStype>
        </div>
    )
}

const GalleryStype = styled.section`
    /* display: flex;
    flex: 1 0 21%;
    justify-content: center;
    max-width: 1000px;
    flex-wrap: wrap;
    margin: auto; */
    .module {
        background-size: cover;
        background-position: center;
        height: 200px;
        margin: 10px 0 0 10px;
        position: relative;
        /* float: left; */
        /* display: flex; */
        @media (min-width: 400px){
            width: 270px;
        }
        
    }
    .mid h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        color: white;
        text-transform: uppercase;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 2rem;
        transform: translate(-50%, -50%);
    }
    
    &:after {
        content: "";
        clear: both;
        display: table;

    }
    
`