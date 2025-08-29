import "./App.css";
import Background from "./components/layout/Background";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />

      <div className="relative z-10 h-1000">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
