

function CreateBlog() {
    return (
        <>
            <div className="container py-5 mt-5 CreateBlog-container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow">
                            <div className="card-body p-4">
                                <h3 className="mb-4 text-center CreateBlog-title">Write a Blog Post</h3>
                                <form id="blogForm">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label fw-medium input-lable">Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name="title"
                                            placeholder="Enter your blog title"
                                            required
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