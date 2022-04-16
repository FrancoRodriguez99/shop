import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Presentation from "./components/Presentation/Presentation";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter/Counter";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <NavBar />
      <Presentation />
      <Counter />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

// <a href="https://www.flaticon.com/free-icons/spain" title="spain icons"> Icons created by Freepik - Flaticon </a>

export default App;
