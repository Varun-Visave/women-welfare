import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import NewAboutUs from "./Components/AboutUs.jsx/AboutUs";
import BlogPage from "./Components/Blogpage/Blogpage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<NewAboutUs />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
