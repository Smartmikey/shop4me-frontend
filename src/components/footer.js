import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Footer = () => {
    return (
        <FooterStyle> 
            <div className="social mx-auto">
                <Link to="#">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                <Link to="#"><i className="fab fa-instagram"></i></Link>
            </div>
            <div className="d-inline-flex">

            <ul className="d-block mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/order">Order now</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/category">Category</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        
            </ul>
            </div>

            <div className="clearfix"></div>
            <div className="divider mx-auto"></div>
            <small>copyright (C) 2021 . All right reserved, Profile developement outcomes</small>
            
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`
    background: #00214D;
    margin: auto;
    text-align: center;
    padding: 5rem;
    .social a i {
        font-size: 20px;
        color: #fff;
        margin: 10px 20px;
        &:hover {
            scale: 0.7;
        }
    }
    .divider {
        width: 60vw;
        border-top: 1px solid #fff;
        margin: 20px 0;
    }
    small {
        color: #fff;
    }

    ul {
        justify-content: center;
        li a {
            color: #fff;
        }
    }
    ul {
        li {
            float: left;
            list-style-type: none;
            text-align: center;
            margin: 0 auto;
        }
    }
    @media (max-width: 500px){
        padding: 1rem;
    }
`