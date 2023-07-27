import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar"
import HelloWorld from "../components/HelloWorld"
import AboutMe from "../components/AboutMe"

export default function Home() {
  return (
    <Router>
      <Navbar />
      <div id="home"><HelloWorld /></div>
      <div id="aboutme"><AboutMe /></div>
    </Router>
  )
}