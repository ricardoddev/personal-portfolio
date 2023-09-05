import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar"
import HelloWorld from "../components/HelloWorld"
import AboutMe from "../components/AboutMe"
import Techs from "../components/Techs";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Router>
        <div id="navbar"><Navbar /></div>
        <div id="home"><HelloWorld /></div>
        <div id="aboutme"><AboutMe /></div>
        <div id="techs"><Techs /></div>
        <div id="projects"><Projects /></div>
      </Router>
      <Footer />
    </>
  )
}