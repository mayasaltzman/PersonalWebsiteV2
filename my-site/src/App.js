
function App() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          {/* adding pages in these route tags, curly braces are the components which are the js files */}
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </div>
    );
  }
  
  export default App;
  