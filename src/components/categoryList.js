import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom"
import styled from "styled-components"
import { CATEGORY_QUERY } from "../query";

export const CategoryList = (props) =>{
    const {loading, error, data} = useQuery(CATEGORY_QUERY);
    console.log(data);
    // console.log(data, "from list");
        
    
    return (
        <>
            
            <CatListStyle className="category p-4 my-4 rounded">
                <h3>Categories</h3>
                    <ul>
  
                {
                    data && data.getCategories && data.getCategories.map(item =>{ 
                        // console.log(item.name);
                        return (<li key={item.id}  ><Link to={"./category/",item.slug} >{ item.name}</Link></li>)
                    })
                }
                 </ul>
                        </CatListStyle>
        </>
    )
}

const CatListStyle = styled.div`
    background: #F4F8FD;
    h3 {
        text-transform: uppercase;

    }
    ul {
        padding: 0;
        li {
            list-style-type: none;
            a{
                color: #737373;
                text-transform: capitalize;
            }
        }
    }
`