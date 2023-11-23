import Category from "./camponents/Category";
import Food from "./camponents/Food";
import HeadlineCards from "./camponents/HeadlineCards";
import Hero from "./camponents/Hero";
import Navbar from "./camponents/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
