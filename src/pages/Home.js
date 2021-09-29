import Header from "../components/home/Header";
import Protocol from '../components/home/Protocol';
import Service from "../components/home/Service";
import Work from "../components/home/Work";
import Testimonial from "../components/home/Testimonial";
import Team from "../components/home/Team";
import Pricing from "../components/home/Pricing";
import News from "../components/home/News";

const Home = () => {
    return (
        <div>
            <Header/>
            <Protocol/>
            <Service/>
            <Work/>
            <Testimonial/>
            <Team/>
            <News/>
            <Pricing/>
        </div>
    )
}

export default Home
