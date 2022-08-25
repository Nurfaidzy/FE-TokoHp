import "./App.css";
import Hero from "./Components/HomePage/Hero";
import Product from "./Components/HomePage/Product";
import Service from "./Components/HomePage/Service";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Service />
    </>
  );
}

export default App;
