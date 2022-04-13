import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import Ragister from "./pages/Ragister/Ragister";
import Footer from "./pages/shaered/Footer/Footer";
import Header from "./pages/shaered/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/ragister" element={<Ragister />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
