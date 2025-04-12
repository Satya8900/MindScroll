import assets from "../assets/assets"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Alert from "./Alert";
import { useState } from "react";
import api from "../utils/api";

function LoginAuth() {

    const [email_number, setEmail_number] = useState("")
    const [password, setPassword] = useState("")
    const location = useLocation();
    const [loginissue, setLoginissue] = useState(location.state?.message);
    const [key, setKey] = useState(1);
    const navigate = useNavigate();

    async function submitHandler(e) {
        e.preventDefault();
        const data = { email_number, password };

        try {
            const res = await api.post("v1/user/login", data, { withCredentials: true });

            if (res.data.statusCode === 200 && res.data.success) {
                navigate("/", { state: { message: res.data.message } });
            } else if (res.data.statusCode === 400 && !res.data.success) {
                setLoginissue(res.data.message);
                setKey((prev) => prev + 1);
            }
        } catch (error) {
            console.error("Login error:", error);
            setLoginissue("Something went wrong. Try again!");
            setKey((prev) => prev + 1);
        }

        setEmail_number("");
        setPassword("");
    }


    return (
        <>
            {loginissue && <Alert key={key} type="primary" message={loginissue} />}

            <div className="LoginAuth-container poppins-regular d-flex justify-content-center align-items-center">
                <div className="row border rounded-3 p-3 bg-white shadow box-area">

                    {/* Left Box */}
                    <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                        <div className="featured-image mb-3">
                            <img
                                src={assets.Auth}
                                className="img-fluid"
                                alt="Featured"
                            />
                        </div>
                        <p className="text-white fs-2 featured-text">
                            Be Verified
                        </p>
                        <p className="small text-white text-wrap text-center featured-caption">
                            Join thousands who trust MindScroll to share ideas, creativity, and knowledge!
                        </p>
                    </div>

                    {/* Right Box */}
                    <div className="col-md-6 right-box">
                        <div className="row align-items-center">

                            <div className="header-text mb-4">
                                <h2>Hello, Again</h2>
                                <p>We are happy to have you back.</p>
                            </div>

                            <form onSubmit={submitHandler}>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg bg-light fs-6"
                                        placeholder="Email address or Phone number"
                                        required
                                        onChange={(e) => setEmail_number(e.target.value)}
                                        value={email_number}
                                    />
                                </div>

                                <div className="input-group mb-5">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg bg-light fs-6"
                                        placeholder="Password"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </div>

                                <div className="input-group mb-3">
                                    <button type="submit" className="btn btn-lg btn-primary w-100 fs-6 authBtn">Login</button>
                                </div>
                            </form>

                            <div className="row">
                                <p className="small">
                                    Don't have an account? <Link to="/signup">Sign Up</Link>
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default LoginAuth;
