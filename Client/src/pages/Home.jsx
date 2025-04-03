import { useEffect, useState } from "react";
import BlogCards from "../components/BlogCards";
import HeroHome from "../components/HeroHome";
import Alert from "../components/Alert.jsx";
import "../css/home.css"
import api from "../utils/api.js";

function Home() {

    const limit = 3 * 4;
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    const [response, setResponse] = useState([]);
    const [error_msg, setError_msg] = useState(false);


    useEffect(() => {

        async function fetchTotal() {
            try {
                const res = await api.get("v1/blog/retrieve/all", {
                    params: { page, limit }
                });

                setTotal(Math.max(res.data.data[1][0]?.total_blogs, 1));
            } catch (error) {
                console.error("Login error:", error);
                setError_msg("Something went wrong. Try again!");
            }
        }

        fetchTotal();
    }, []);

    useEffect(() => {

        async function fetchData() {
            try {
                const res = await api.get("v1/blog/retrieve/all", {
                    params: { page, limit }
                });

                setResponse(res.data.data[0]);
            } catch (error) {
                console.error("Login error:", error);
                setError_msg("Something went wrong. Try again!");
            }
        }

        fetchData();
    }, [page]);


    return (
        <>
            {error_msg && <Alert type="primary" message={error_msg} />}
            <HeroHome />

            <div className="BlogCards-container mx-5 mt-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {response.map((e) => (
                        <BlogCards key={e.blog_id} b_id={e.blog_id} b_title={e.title} b_content={e.content} b_author={e.author_name} />
                    ))
                    }
                </div >
            </div>

            <nav className="mt-5 mx-5" aria-label="...">
                <ul className="pagination d-flex justify-content-between">
                    <li className={`page-item ${page === 1 ? "disabled" : "active"}`}>
                        <button className="page-link" onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>&laquo; Previous</button>
                    </li>
                    <li className={`page-item ${page === Math.ceil(total / limit) ? "disabled" : "active"}`}>
                        <button className="page-link" onClick={() => setPage((prev) => Math.min(prev + 1, Math.ceil(total / limit)))} disabled={page === Math.ceil(total / limit)}>Next &raquo;</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Home;