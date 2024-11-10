import About from "./About";
import Hero from "./Hero/Hero";
import Portfolio from "./Portfolio";
import ServicesSection from "./Services";
import Stat from "./Stat";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <ServicesSection />
            <Portfolio />
            <Stat />
        </>
    )
}

export default Home;