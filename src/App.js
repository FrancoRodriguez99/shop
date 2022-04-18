import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Presentation from "./components/Presentation/Presentation";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter/Counter";
import Contacto from "./components/Contacto";
import About from "./components/About";
import Shop from "./components/Shop";
import ShopNavBar from "./components/Shop/ShopNavBar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <ShopNavBar />
      <Shop />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar />
              <Presentation />
              <Counter />
              <About />
              <Services />
            </div>
          }
        />
        <Route
          path="/Contacto"
          element={
            <div>
              <NavBar />
              <Contacto />
            </div>
          }
        />
        <Route path="/shop" element={<div></div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

// <a href="https://www.flaticon.com/free-icons/spain" title="spain icons"> Icons created by Freepik - Flaticon </a>

export default App;
