import "./App.css";
import Background from "./components/layout/Background";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <div className="relative min-h-screen">
          <Background />

          <div className="relative z-10 h-1000">
            <Header />
            <Profile />
            <Footer />
          </div>
        </div>
      </body>S
    </html>
  );
}

export default App;
