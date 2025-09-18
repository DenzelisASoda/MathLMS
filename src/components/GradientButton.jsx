import "../styles/GradientButton.css";

export default function button(props) {
    return (
        <div className="gradient-button">
            <p>{props.value}</p>
        </div>
    )
}