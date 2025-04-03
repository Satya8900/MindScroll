
function BlogCards(props) {
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">{props.b_title}</h5>
                        <p className="card-text">{props.b_content}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <small className="text-body-secondary">By {props.b_author}</small>
                        <a className="card-link text-decoration-none">Read More..</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCards;