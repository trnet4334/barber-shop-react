import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  useRoutes
} from "react-router-dom";
import { routes } from "./common/route";
import "./App.css";

const App = () => {
  let element = useRoutes(routes)

  return (
    <div className="App h-screen w-screen font-noto">
      <Navbar/>
      {element}
      <Footer/>
    </div>
  );
}

export default App;
