import assets from "../assets/assets"
import "../css/notfound.css"

function NotFound() {
    return (
        <>
            <div className="NotFound-container">
                <img src={assets.NotFound_404} alt="404" className="NotFound-img" />
            </div>
        </>
    )
}

export default NotFound;