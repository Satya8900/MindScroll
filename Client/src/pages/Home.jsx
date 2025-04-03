import BlogCards from "../components/BlogCards";
import HeroHome from "../components/HeroHome";
import "../css/home.css"


function Home() {
    const API = "v1/blog/retrieve/all";

    return (
        <>
            <HeroHome />
            <BlogCards API={API} />
        </>
    )
}

export default Home;