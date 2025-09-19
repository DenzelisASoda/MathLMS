import "../styles/Card.css"

export default function Card(props) {
    return (
        <>
            <div className="card">
                <div className="left">
                    <div className="number">{props.number}</div>
                    <div>
                        <p className="text">{props.text}</p>
                        <h2>{props.heading}</h2>
                    </div>
                </div>
                <img src={props.src} alt={props.alt} />
            </div>
        </>
    );
}