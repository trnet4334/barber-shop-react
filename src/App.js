import Header from "./components/Header";
import Service from "./components/Service";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import News from "./components/News";
import "./App.css";

function App() {
  return (
    <div className="App h-screen w-screen font-noto">
        <Header/>
        <Service/>
        <Work/>
        <Testimonial/>
        <Team/>
        <News/>
        <Pricing/>
        <Footer/>
    </div>
  );
}

export default App;
