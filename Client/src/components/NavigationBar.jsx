import { useEffect, useState } from "react";
import assets from "../assets/assets.jsx";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import api from "../utils/api.js";


function NavigationBar() {
    const [logged, setLogged] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCurrentUser() {
            try {
                const res = await api.get("v1/user/current");
                if (res.data.success && res.data?.data[1] == 1) {
                    setLogged(true);
                } else {
                    setLogged(false);
                }

                // console.log(res.data)
            } catch (error) {
                console.log("Error:", error);
                setLogged(false);
            }
        }
        fetchCurrentUser();
    })

    async function logoutHandler() {
        try {
            const res = await api.post("v1/user/logout");
            // console.log(res.data)
            if (res.data.success && res.data.statusCode == 200) {
                navigate("/")
            } else {
                setLogged(true);
            }
        } catch (error) {
            console.log("Error:", error);
            setLogged(true);
        }
    }

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
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                {logged ?
                                    (
                                        <>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <NavLink className="nav-link active" aria-current="page" to="/my-blogs">My Blogs</NavLink>
                                            </li>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <NavLink className="nav-link active" aria-current="page" to="/write-blogs">Post New</NavLink>
                                            </li>
                                            <li className="nav-item active" data-bs-dismiss="offcanvas">
                                                <NavLink className="nav-link py-0">
                                                    <button type="button"
                                                        onClick={logoutHandler}
                                                        className="btn btn-outline-primary login-btn">
                                                        Logout
                                                    </button>
                                                </NavLink>
                                            </li>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <NavLink className="nav-link active" aria-current="page" to="/signup">Sign Up</NavLink>
                                            </li>
                                            <li className="nav-item active" data-bs-dismiss="offcanvas">
                                                <NavLink className="nav-link py-0" to="/login">
                                                    <button type="button" className="btn btn-outline-primary login-btn">Log In</button>
                                                </NavLink>
                                            </li>
                                        </>
                                    )
                                }
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