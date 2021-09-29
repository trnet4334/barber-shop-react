import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
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
                  <Route path="/reservation">
                      <Reservation/>
                  </Route>
              </Switch>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
