import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Presentation from "./components/Presentation/Presentation";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter/Counter";
import { useSelector } from "react-redux";

function App() {
  useSelector((state) => console.log(state.lang.lang));
  return (
    <div className="App">
      <NavBar />
      <Presentation />
      <Counter />
    </div>
  );
}

// <a href="https://www.flaticon.com/free-icons/spain" title="spain icons"> Icons created by Freepik - Flaticon </a>

export default App;
