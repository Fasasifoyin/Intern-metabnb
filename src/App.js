import "./Styles/index.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TheCoffee from "./components/TheCoffee";
import Popular from "./components/Popular";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import PopularCoffee from "./components/PopularCoffee";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <TheCoffee/>
    <PopularCoffee/>
    <Popular/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
