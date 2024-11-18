import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Tutorials from "./Components/Tutorials/Tutorials";
// import Tutorials from "./pages/Tutorials";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
