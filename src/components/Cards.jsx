import Card from "./Card"
import "../styles/Cards.css"

export default function Cards() {
    return (
        <div className="cards">
            <Card number="1" src="./learn.svg" alt="learn" text="learn"/>
            <Card number="2" src="./practice.svg" alt="practice" text="practice"/>
            <Card number="3" src="./play.svg" alt="play" text="play"/>
        </div>
    )
}