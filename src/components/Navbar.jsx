import "../styles/Navbar.css"
import GradientButton from "./GradientButton"

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src="./logo.svg" alt="Logo" />
                <p>MathLMS</p>
            </div>
            <div className="other-links">
                <span>
                    programs
                    <img src="./arrow-down.svg" alt="drop down" />
                </span>
                <span>Contact</span>
                <GradientButton value="SIGN IN" />
            </div>
        </nav>
    )
}