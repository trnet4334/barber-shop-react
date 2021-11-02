import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import About from "./pages/About";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App h-screen w-screen font-noto">
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/team">
                        <Team/>
                    </Route>
                    <Route path="/gallery">
                        <Gallery/>
                    </Route>
                    <Route path="/reservation">
                        <Reservation/>
                    </Route>
                    <Route path="/news">
                        <Blog/>
                    </Route>
                    <Route path="/sitemap">
                        <Sitemap/>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
                <Footer/>
          </div>
      </Router>
    );
}

export default App;
