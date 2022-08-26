import "./App.css";
import Hero from "./Components/HomePage/Hero";
import Product from "./Components/HomePage/Product";
import Recommend from "./Components/HomePage/Recommend";
import Service from "./Components/HomePage/Service";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Service />
      <Recommend />
    </>
  );
}

export default App;
