import BlogCards from "../components/BlogCards";
import HeroHome from "../components/HeroHome";
import "../css/home.css"
import Alert from "../components/Alert";
import { useLocation } from "react-router-dom";


function Home() {
    const API = "v1/blog/retrieve/all";

    const location = useLocation();
    const message = location.state?.message

    return (
        <>
            {message && <Alert key={Math.random()} type="primary" message={message} />}

            <HeroHome />
            <BlogCards API={API} />
        </>
    )
}

export default Home;