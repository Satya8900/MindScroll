import assets from "../assets/assets.jsx";
import { NavLink } from "react-router-dom";


function NavigationBar() {
    return (
        <>
            {/* <!-- Image and text --> */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand kalam-regular" to="/">
                        <img src={assets.logo_removebg} alt="MindScroll" height="35px" width="35px" />
                        MindScroll
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MindScroll</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/signup">Sign Up</NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink className="nav-link py-0" to="/login">
                                        <button type="button" className="btn btn-outline-primary login-btn">Log In</button>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <!-- navbar end --> */}
        </>
    )
}

export default NavigationBar