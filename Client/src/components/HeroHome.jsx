import assets from "../assets/assets";

function HeroHome() {
    return (
        <>
            <div className="HeroHome-container mt-4">
                <img src={assets.hero_banner} className="img-fluid" alt="..." />

                <div className="HeroHome-text me-2">
                    <h1 className="roboto-mono-hero">Scroll the thoughts, ideas, creativity, and knowledge.</h1>
                </div>
            </div>
        </>
    )
}

export default HeroHome;