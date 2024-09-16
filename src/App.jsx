import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./componentes/home/Home";
import AboutUs from "./pages/abouts/AboutUs";
import Varieties from "./pages/varieties/Varieties";
import Gallery from "./pages/Gallery/Gallery";
import Reviews from "./pages/review/Reviews";
import Contact from "./pages/contacts/Contact";
import Story from "./pages/story/Story";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Varieties" element={<Varieties />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Story" element={<Story />} />
      </Routes>
    </>
  );
}

export default App;
