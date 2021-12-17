import { Routes, Route } from "react-router-dom";
import Game from "./components/game";
import Startpage from "./components/startpage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Startpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
