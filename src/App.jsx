import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Cards from "./components/Cards";
import Heading from "./components/Heading"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Heading heading="Our Testimonials" />
    </>
  );
}