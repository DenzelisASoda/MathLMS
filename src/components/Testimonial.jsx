import "../styles/Testimonial.css"

export default function Testimonial(props) {
    return (
        <div className="testimonial-card">
            <div className="message">
                <p className="testimonial-message">{props.message}</p>
                <p className="date">{props.date}</p>
            </div>
            <div className="author">
                <div className="image"><img src="./testimonial-profile.svg" alt="Testimonial Profile Image" /></div>
                <div className="info">
                    <div className="name">{props.name}</div>
                    <div className="school">{props.school}</div>
                </div>
            </div>
        </div>
    )
}