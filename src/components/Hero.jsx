import "../styles/Hero.css"
import GradientButton from "./GradientButton"

export default function Hero() {
    return (
        <div className="hero">
            <div className="description">
                <h1>Master Math One Step at a Time</h1>
                <p>Our platform combines lessons, challenges, and rewards so kids can master numbers while enjoying every step of the journey.</p>
                <GradientButton value="GET STARTED" />
            </div>
            <div className="image">
                <img src="./hero-image.svg" alt="Hero Image" />
            </div>
        </div>
    )
}