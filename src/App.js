import "./App.css";
import Home from "./components/Home";
import History from "./components/History";
import Climb from "./components/Climb";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Navbar background={true} />
      <History />
      <Climb />
      <Footer />
    </div>
  );
}

export default App;
