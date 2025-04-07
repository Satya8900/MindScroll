import BlogCards from "../components/BlogCards";

function MyBlogs() {

    const API = "v1/blog/retrieve/user";

    return (
        <>
            <BlogCards API={API} isLogged={true} />
        </>
    )
}

export default MyBlogs;