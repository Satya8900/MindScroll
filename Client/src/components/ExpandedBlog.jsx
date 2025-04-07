import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ExpandedBlog() {

    const location = useLocation();
    const props = location.state?.props;
    const isLogged = location.state?.isLogged;

    const navigate = useNavigate();

    useEffect(() => {
        if (!props) {
            navigate("/", { state: { message: "Something Went Wrong..." } });
        }
    }, []);

    if (!props) return null;

    return (
        <>
            {isLogged ? (
                <>
                    <button type="button" className="btn btn-outline-primary editBtn mt-4 ms-4 p-2">

                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512" fill="#2774ac"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" /></svg>

                        <span className="fw-bold ms-1">Edit</span>
                    </button>
                </>
            ) : null}

            <div className="container-ExpandedBlog">
                <div>
                    <h2>
                        {props.title}
                    </h2>
                </div>

                <div className="author mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg>

                    <p className="mb-0 ms-1">By {props.author_name}</p>
                </div>

                <div className="divider"></div>

                <div className="story-content">
                    <p>
                        {props.content}
                    </p>
                </div>
            </div>

        </>
    )
}


export default ExpandedBlog;