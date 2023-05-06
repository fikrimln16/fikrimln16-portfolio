import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Keahlian from './components/Keahlian/Keahlian';
import Projects from './components/Projects/Projects';
import Certification from './components/Certification/Certification';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Keahlian/>
      <Projects/>
      <Certification/>
      <Contact/>
    </div>
  );
}

export default App;
