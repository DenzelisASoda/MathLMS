import Card from "./Card"
import "../styles/Cards.css"

export default function Cards() {
    return (
        <div className="cards">
            <Card number="1" src="./learn.svg" alt="learn" heading="Learn" text="Learn Addition, Multiplication,
                division and subtraction."/>
            <Card number="2" src="./practice.svg" alt="practice" heading="Practice" text="Practice What You Learn With
Our Curated Assessments."/>
            <Card number="3" src="./play.svg" alt="play" heading="Play" text="Play Our Interactive Games And 
Have Fun Practicing."/>
            <Card number="4" src="./ai.svg" alt="AI" heading="AI?" text="With Our AI Assistant Razan, You get
personalised assessments and evaluations"/>
        </div>
    )
}