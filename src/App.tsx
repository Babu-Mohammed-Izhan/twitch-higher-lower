import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Game from "./components/game";
import Startpage from "./components/startpage";
import Footer from "./components/footer";
import Tryagain from "./components/tryagain";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="h-screen w-full bg-black overflow-hidden">
      <Routes>
        <Route
          path="/game"
          element={<Game score={score} setScore={setScore} />}
        />
        <Route path="/result" element={<Tryagain points={score} />} />
        <Route path="/" element={<Startpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
