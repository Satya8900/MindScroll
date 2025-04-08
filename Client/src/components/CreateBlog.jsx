import { useState } from "react";
import api from "../utils/api";
import Alert from "./Alert";


function CreateBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");
    const [key, setKey] = useState(1);

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

    return (
        <>
            {message && <Alert key={key} type="primary" message={message} />}

            <div className="container py-5 mt-5 CreateBlog-container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow">
                            <div className="card-body p-4">
                                <h3 className="mb-4 text-center CreateBlog-title">Write a Blog Post</h3>
                                <form id="blogForm" onSubmit={submitHandler}>
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
                                        <button type="submit" className="btn btn-primary btn-lg smbtBtn">
                                            Submit Post
                                        </button>
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