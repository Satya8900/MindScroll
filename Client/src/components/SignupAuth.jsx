import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";
import Alert from "./Alert";
import assets from "../assets/assets";

function SignupAuth() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [signupissue, setSignupissue] = useState("");
    const [key, setKey] = useState(1);

    const navigate = useNavigate();

    async function submitHandler(e) {
        e.preventDefault();

        const data = { name, email, number, password };

        try {
            const res = await api.post("v1/user/signup", data);

            if (res.data.statusCode === 201 && res.data.success) {
                navigate("/login", { state: { message: res.data.message } });
            } else if (res.data.statusCode === 400 && !res.data.success) {
                setSignupissue(res.data.message);
                setKey((prev) => prev + 1);
            }
        } catch (error) {
            console.error("Signup error:", error);
            setSignupissue("Something went wrong. Try again!");
            setKey((prev) => prev + 1);
        }

        setName("");
        setEmail("");
        setNumber("");
        setPassword("");
    }

    return (
        <>
            {signupissue && <Alert key={key} type="primary" message={signupissue} />}

            <div className="SignupAuth-container poppins-regular d-flex justify-content-center align-items-center">
                <div className="row border rounded-3 p-3 bg-white shadow box-area">
                    <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                        <div className="featured-image mb-3">
                            <img src={assets.Auth} className="img-fluid" alt="Featured" />
                        </div>
                        <p className="text-white fs-2 featured-text">Be Verified</p>
                        <p className="small text-white text-wrap text-center featured-caption">
                            Join thousands who trust MindScroll to share ideas, creativity, and knowledge!
                        </p>
                    </div>

                    <div className="col-md-6 right-box">
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <h2>Hello, Writer</h2>
                                <p>We are excited to have your thoughts!</p>
                            </div>

                            <form onSubmit={submitHandler}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className="input-group mb-3">
                                    <input type="tel" pattern="[0-9]{10}" inputMode="numeric" className="form-control form-control-lg bg-light fs-6" placeholder="Phone number" required value={number} onChange={(e) => setNumber(e.target.value)} />
                                </div>

                                <div className="input-group mb-3">
                                    <input type="email" className="form-control form-control-lg bg-light fs-6" placeholder="Email address" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="input-group mb-5">
                                    <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <div className="input-group mb-3">
                                    <button type="submit" className="btn btn-lg btn-primary w-100 fs-6 authBtn">Sign-up</button>
                                </div>
                            </form>

                            <div className="row">
                                <p className="small">
                                    Already have an account? <Link to="/login">Log In</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignupAuth;
