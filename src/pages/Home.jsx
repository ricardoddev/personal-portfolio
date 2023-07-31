import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar"
import HelloWorld from "../components/HelloWorld"
import AboutMe from "../components/AboutMe"
import Techs from "../components/Techs";

export default function Home() {
  return (
    <Router>
      <Navbar />
      <div id="home"><HelloWorld /></div>
      <div id="aboutme"><AboutMe /></div>
      <div id="techs"><Techs /></div>
    </Router>
  )
}