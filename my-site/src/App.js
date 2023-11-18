import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom"
import Experience from './components/pages/experience';
import Resume from './components/pages/resume';
import Projects from './components/pages/projects';
import Kenna from './components/pages/kenna';
import Intro from './components/pages/kenna#intro'
import About from './components/pages/kenna#about'
import Description from './components/pages/kenna#description'
import Goals from './components/pages/kenna#goals'
import CA from './components/pages/kenna#ca'


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
        <Route path="/kenna" element={<Kenna />} />
        <Route path="/kenna#intro" element={<Intro />} />
        <Route path="/kenna#description" element={<Description />} />
        <Route path="/kenna#goals" element={<Goals />} />
        <Route path="/kenna#about" element={<About />} />
        <Route path="/kenna#ca" element={<CA />} />
       </Routes>
      <kenna/>



    </div>
  );
}

export default App;