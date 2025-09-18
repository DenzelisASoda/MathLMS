import "../styles/Card.css"

export default function Card(props) {
    return (
        <>
            <div className="card">
                <div className="number">{props.number}</div>
                <img src={props.src} alt={props.alt} />
                <p className="text">{props.text}</p>
            </div>
        </>
    );
}