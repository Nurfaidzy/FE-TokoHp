import "./App.css";
import Feedback from "./Components/HomePage/Feedback";
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
      <Feedback />
    </>
  );
}

export default App;
