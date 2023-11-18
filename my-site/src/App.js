import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          {/* adding pages in these route tags, curly braces are the components which are the js files */}
          <Route path="/" element={<home />} />
          <Route path="/experience" element={<experience />} />
          <Route path="/projects" element={<projects />} />
          <Route path="/resume" element={<resume />} />
        </Routes>

    </div>
  );
}

export default App;