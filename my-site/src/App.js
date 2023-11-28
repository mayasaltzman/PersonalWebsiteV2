import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom"
import Experience from './components/pages/experience';
import Projects from './components/pages/projects';
import Kenna from './components/pages/kenna';
import Home from './components/pages/home';
import Contact from './components/Contact'



function App() {
  return (
    <div className="App">
      <NavBar />

      <div id='content'>
        <home />
      </div>

      <Routes>
        {/* adding pages in these route tags, curly braces are the components which are the js files */}
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/kenna" element={<Kenna />} />
      </Routes>

    </div>
  );
}

export default App;