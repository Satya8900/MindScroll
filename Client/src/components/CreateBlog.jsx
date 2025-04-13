import { useEffect, useState } from "react";
import api from "../utils/api";
import Alert from "./Alert";
import { useLocation, useNavigate } from "react-router-dom";


function CreateBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [key, setKey] = useState(1);

    const navigate = useNavigate();
    const location = useLocation();
    const props = location.state?.props;
    const isLogged = location.state?.isLogged;

    async function submitHandler(e) {
        e.preventDefault();

        const data = { title, content };

        try {
            const res = await api.post("v1/blog/create", data);

            setMessage(res.data.message);
            setKey((prev) => prev + 1);
        } catch (error) {
            console.log("Erorr:", error);
            setMessage("Something went wrong. Try again!");
            setKey((prev) => prev + 1);
        }

        setTitle("");
        setContent("");
    }

    async function updateHandler(e) {
        e.preventDefault();

        const data = { title, content, blog_id: props.blog_id };

        try {
            const res = await api.patch("v1/blog/update", data);

            if (!res.data.success) {
                setMessage("Something went wrong. Try again!");
                setKey((prev) => prev + 1);
            }
            else {
                navigate("/my-blogs", { state: { message: res.data.message } });
            }

        } catch (error) {
            console.log("Erorr:", error);
            setMessage("Something went wrong. Try again!");
            setKey((prev) => prev + 1);
        }
    }

    useEffect(() => {
        async function fetchCurrentUser() {
            try {
                const res = await api.get("v1/user/current");

                if (!res.data.success) {
                    navigate("/", { state: { message: res.data.message } });
                }
                else if (res.data.success && res.data?.data[1] == 1) {
                    setUsername(res.data?.data[0][0].name);
                }

            } catch (error) {
                console.log("Error:", error);
                setMessage("Something went wrong. Try again!");
            }
        }

        fetchCurrentUser();


        if (props && isLogged) {
            setTitle(props.title);
            setContent(props.content);
        } else {
            setTitle("");
            setContent("");
        }

    }, [props, isLogged]);

    return (
        <>
            {message && <Alert key={key} type="primary" message={message} />}

            <div className="intro-msg ms-2 mt-4">
                <h2 className="mt-3 ms-3 mb-0">Hello,{username}</h2>

                {props && isLogged ?
                    <h5 className="ms-3">We’d love to see what’s new update.</h5>
                    :
                    <h5 className="ms-3">We’d love to hear your thoughts.</h5>
                }

            </div>

            <div className="container py-4 CreateBlog-container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow">
                            <div className="card-body p-4">

                                {props && isLogged ?
                                    <h3 className="mb-4 text-center CreateBlog-title">Update The Blog Post</h3>
                                    :
                                    <h3 className="mb-4 text-center CreateBlog-title">Write a Blog Post</h3>
                                }

                                <form id="blogForm" onSubmit={(e) => {
                                    if (isLogged && props) {
                                        updateHandler(e);
                                    }
                                    else {
                                        submitHandler(e);
                                    }
                                }}>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label fw-medium input-lable">Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name="title"
                                            placeholder="Enter your blog title"
                                            required
                                            onChange={(e) => setTitle(e.target.value)}
                                            value={title}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="content" className="form-label fw-medium input-lable">Content</label>
                                        <textarea
                                            className="form-control"
                                            id="content"
                                            name="content"
                                            rows="8"
                                            placeholder="Write your blog content here..."
                                            required
                                            onChange={(e) => setContent(e.target.value)}
                                            value={content}
                                        ></textarea>
                                    </div>
                                    <div className="d-grid">

                                        {props && isLogged ?
                                            <>
                                                <button type="submit" className="btn btn-primary btn-lg smbtBtn">
                                                    Update
                                                </button>
                                                <button type="button" className="btn btn-primary btn-lg smbtBtn mt-3"
                                                    onClick={() => navigate(-1)}
                                                >
                                                    Cancel
                                                </button>
                                            </>
                                            :
                                            <button type="submit" className="btn btn-primary btn-lg smbtBtn">
                                                Submit Post
                                            </button>
                                        }

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateBlog;