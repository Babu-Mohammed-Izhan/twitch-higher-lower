import { Routes, Route } from "react-router-dom";
import Game from "./components/game";
import Startpage from "./components/startpage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="game" element={<Game />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
