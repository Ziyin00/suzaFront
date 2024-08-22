import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./componentes/home/Home";
import AboutUs from "./componentes/abouts/AboutUs";
import Varieties from "./componentes/varieties/Varieties";
import Gallery from "./componentes/Gallery/Gallery";
import Reviews from "./componentes/review/Reviews";
import Contact from "./componentes/contacts/Contact";
import Story from "./componentes/story/Story";
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
