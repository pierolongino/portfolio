import styles from "./App.module.css"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/NavBar/Navbar"
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Projects} from "./components/Project/Projects"
import { Contact} from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      {/* <Projects></Projects> */}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}


export default App
