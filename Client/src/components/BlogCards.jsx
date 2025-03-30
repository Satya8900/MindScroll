
function BlogCards() {
    return (
        <>
            <div className="BlogCards-container mx-5 mt-5">

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                                <a href="#" className="card-link text-decoration-none">Read More..</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                                <a href="#" className="card-link text-decoration-none">Read More..</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                                <a href="#" className="card-link text-decoration-none">Read More..</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                                <a href="#" className="card-link text-decoration-none">Read More..</a>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="mt-5" aria-label="...">
                    <ul className="pagination d-flex justify-content-between">
                        <li className="page-item disabled">
                            <a className="page-link">&laquo; Previous</a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#">Next &raquo;</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </>
    )
}

export default BlogCards;