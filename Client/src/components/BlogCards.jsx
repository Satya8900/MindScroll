import { useEffect, useState } from "react";
import api from "../utils/api.js";
import Alert from "../components/Alert.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";


function BlogCards(props) {

    const limit = 3 * 4;
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    const [response, setResponse] = useState([]);
    const location = useLocation();
    const message = location.state?.message
    const [error_msg, setError_msg] = useState(message);
    const navigate = useNavigate();
    const [key, setKey] = useState(1);

    useEffect(() => {

        async function fetchTotal() {
            try {
                const res = await api.get(props.API, {
                    params: { page, limit }
                });

                if (!res.data.success) {
                    navigate("/", { state: { message: res.data.message } });
                }

                setTotal(Math.max(res.data.data[1][0]?.total_blogs, 1));
            } catch (error) {
                console.error("Login error:", error);
                setError_msg("Something went wrong. Try again!");
                setKey((prev) => prev + 1);
            }
        }

        fetchTotal();
    }, []);

    useEffect(() => {

        async function fetchData() {
            try {
                window.scrollTo({
                    top: 0,
                    behavior: "auto",
                });

                const res = await api.get(props.API, {
                    params: { page, limit }
                });

                setResponse(res.data.data[0]);
            } catch (error) {
                console.error("Login error:", error);
                setError_msg("Something went wrong. Try again!");
                setKey((prev) => prev + 1);
            }
        }

        fetchData();
    }, [page]);

    return (
        <>
            {error_msg && <Alert key={key} type="primary" message={error_msg} />}

            {
                props.isLogged ? (
                    <div className="intro-msg ms-2 mt-4">
                        <h2 className="mt-3 ms-3 mb-0">Hi,{response[0]?.author_name}</h2>
                        <h5 className="ms-3">Here’s a look at your posts:</h5>
                    </div>
                ) : null
            }

            <div className="BlogCards-container mx-4 mt-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {response.map((e) => (
                        <div key={e.blog_id} className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{e.title}</h5>
                                    <p className="card-text text-justify">{e.content.substring(0, 340)}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <small className="text-body-secondary">By {e.author_name}</small>
                                    <Link
                                        className="card-link text-decoration-none"
                                        to="/blog-expanded"
                                        state={{ props: e, isLogged: props.isLogged }}
                                    >
                                        Read More..
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div >
                <nav className="mt-5" aria-label="...">
                    <ul className="pagination d-flex justify-content-between">
                        <li className={`page-item ${page === 1 ? "disabled" : "active"}`}>
                            <button className="page-link" onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>&laquo; Previous</button>
                        </li>
                        <li className={`page-item ${page === Math.ceil(total / limit) ? "disabled" : "active"}`}>
                            <button className="page-link" onClick={() => setPage((prev) => Math.min(prev + 1, Math.ceil(total / limit)))} disabled={page === Math.ceil(total / limit)}>Next &raquo;</button>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default BlogCards;