import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom"
import Experience from './components/pages/experience';
import Resume from './components/pages/resume';
import Projects from './components/pages/projects';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* adding pages in these route tags, curly braces are the components which are the js files */}
        <Route path="/" element={<home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

    </div>
  );
}

export default App;