import { Link } from "react-router-dom";
import styled from "styled-components";
export const Button =(props) => {
    return(
    <SiteButton  className="btn m-2">
        <Link className="link" to={props.href}> {props.text}</Link>
    </SiteButton>)
}
export const SubmitButton =(props) => {
    return(
    <SiteButton  className="btn m-2">
        <input className="link" type="submit" value={props.text}/>
    </SiteButton>)
}

const SiteButton = styled.button`
background: transparent;
border:none;
margin: 20px 10px;
color: #fff;
text-transform: capitalize;
.link {
        display: block;
        font-size: 1.2rem;
        text-decoration: none;
        background: #004AAD;
        border:0;
        text-transform: capitalize;

        border-radius: 4px;
        padding: 16px 32px;
        color: #fff;
        /* hover style */
        &:hover{
            transition: all 1s;
            box-shadow: 2px 2px 4px 0px #00000078;            
            background-image: linear-gradient(to right, #00214c, #004AAD );
            color: #fff !important;
        }
    }

`
const SiteSubmitButton = styled.button`
background: transparent;
border:none;
margin: 20px 10px;
color: #fff;
text-transform: capitalize;
.link {
        display: block;
        font-size: 1.2rem;
        text-decoration: none;
        background: #004AAD;
        border-radius: 4px;
        padding: 16px 32px;
        color: #fff;
        /* hover style */
        &:hover{
            transition: all 1s;
            box-shadow: 2px 2px 4px 0px #00000078;            
            background-image: linear-gradient(to right, #00214c, #004AAD );
            color: #fff !important;
        }
    }

`
