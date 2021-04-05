import "./App.scss";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
