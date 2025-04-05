import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home"; 
import Gallery from "./Gallery/gallery";
import Reviews from "./reviews/Reviews";
import ContactUs from "./contactUs/ContactUs";
import Facilities from "./facilities/Facilities";
import AboutUs from "./aboutUs/AboutUs";
import Footer from "./footer/footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/gallery" element={<Gallery/>}/>
          <Route exact path="/reviews" element={<Reviews/>}/>
          <Route exact path="/contactUs" element={<ContactUs/>}/>
          <Route exact path="/facilities" element={<Facilities/>}/>
          <Route exact path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
