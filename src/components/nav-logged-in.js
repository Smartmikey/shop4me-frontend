import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";

export const LoggedIn =(props)=> {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <img src="/shop4me.png" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="order">Order now</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="category">Category</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="login">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="register">Register</Link>
                        </li>
                        
                        
                    </ul>
                    {/* <li className="nav-item ml-auto"> */}
                        <span className="nav-link" >hello you</span>
                        {/* </li> */}
                    </div>
                </div>
            </nav>
    )
}