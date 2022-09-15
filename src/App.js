import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Main from "./pages/Main";
import LoginForm from "./pages/LoginForm";
import MemberForm from "./pages/MemberForm";
import Selftest from "./pages/Selftest";
import Selftest2 from "./pages/Selftest2";
import Selftest3 from "./pages/Selftest3";
import Semain from "./pages/Semain";
import React3D from "./pages/React3D";
import Depression from "./pages/depression";
import PanicDisorder from "./pages/PanicDisorder";
import ADHD from "./pages/ADHD";
import MBTItable from "./pages/MBTItable";
import Testmodal from "./pages/Testmodal";
import Mypage from "./pages/Mypage";
import React3Dra from "./pages/React3Dra";

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Semain />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/main" element={<Main />} />
          <Route path="/member" element={<MemberForm />} />
          <Route path="/self" element={<Selftest />} />
          <Route path="/self2" element={<Selftest2 />} />
          <Route path="/self3" element={<Selftest3 />} />
          <Route path="/React3D" element={<React3D />} />
          <Route path="/dep" element={<Depression />} />
          <Route path="/panic" element={<PanicDisorder />} />
          <Route path="/adhd" element={<ADHD />} />
          <Route path="/modal" element={<Testmodal />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage3d" element={<React3Dra />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
