import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// import "./App.css";
import Home from "./pages/Home";
import Cert from "./pages/Cert";
import Projects from "./pages/Projects";
import Exp from "./pages/Exp";
import TcProj from "./pages/TcProj";
import PlayGaProj from "./pages/PlayGaProj";
import ChatProj from "./pages/ChatProj";
import NoteProj from "./pages/NoteProj";
import CarProj from "./pages/CarProj";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiance" element={<Exp />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Cert />} />
          <Route path="/tcproj" element={<TcProj />} />
          <Route path="/playG" element={<PlayGaProj />} />
          <Route path="/chatproj" element={<ChatProj />} />
          <Route path="/noteproj" element={<NoteProj />} />
          <Route path="/car" element={<CarProj />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
