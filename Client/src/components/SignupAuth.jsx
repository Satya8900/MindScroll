import assets from "../assets/assets"
import { Link } from "react-router-dom";

function SignupAuth() {
    return (
        <div className="LoginAuth-container poppins-regular d-flex justify-content-center align-items-center min-vh-100">
            <div className="row border rounded-5 p-3 bg-white shadow box-area">

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
                            <h2>Hello, Writer</h2>
                            <p>We are excited to have your thoughts!.</p>
                        </div>

                        <form>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Email address"
                                    required
                                />
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="tel"
                                    pattern="[0-9]{10}"
                                    inputMode="numeric"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Phone number"
                                    required
                                />
                            </div>

                            <div className="input-group mb-5">
                                <input
                                    type="password"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Password"
                                    required
                                />
                            </div>

                            <div className="input-group mb-3">
                                <button type="submit" className="btn btn-lg btn-primary w-100 fs-6">Sign-up</button>
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
    );
}

export default SignupAuth;
