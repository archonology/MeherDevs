import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// import PortfolioContainer from "./pages/MeherDevsContainer";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import About from "./pages/About";

//dark theme by default
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {

  return (

      <ThemeProvider theme={darkTheme}>
        <Router>
          <div>
            <Header />
          </div>
          <div className="footspace">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route index element={<Home />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="contact" element={<Contact />} />
              <Route path="resume" element={<Resume />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
          <div >
            <Footer />
          </div>
        </Router>
      </ThemeProvider>

  );
}


export default App;
