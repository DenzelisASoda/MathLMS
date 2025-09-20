import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Cards from "./components/Cards";
import Heading from "./components/Heading"
import Testimonial from "./components/Testimonial";
import "./App.css"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Heading heading="Our Testimonials" />
      <div className="grid-container">
        <Testimonial message="I love the math games on this platform and the diverse sets of
        word problems and math stories I get are no joke. I’ve been 
        practicing my math all day everyday. Thank you so much for this
        platform" date="September 19, 2025" name="Prince Gyanti" school="Rolls Royce International School" />
        <Testimonial message="I love the math games on this platform and the diverse sets of
        word problems and math stories I get are no joke. I’ve been 
        practicing my math all day everyday. Thank you so much for this
        platform" date="September 19, 2025" name="Prince Gyanti" school="Rolls Royce International School" />
      </div>
      <Heading heading="Frequently Asked Questions" />
      <div>
        
      </div>
    </>
  );
}