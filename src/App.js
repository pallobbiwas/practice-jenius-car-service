import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import CheekOut from "./pages/CheekOut/CheekOut";
import BookinfDetails from "./pages/Home/BookinfDetails/BookinfDetails";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Ragister from "./pages/Ragister/Ragister";
import RequerdAuth from "./pages/RequerdAuth/RequerdAuth";
import Footer from "./pages/shaered/Footer/Footer";
import Header from "./pages/shaered/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/service/:serviceId" element={<BookinfDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/ragister" element={<Ragister />}></Route>
        <Route
          path="/cheekout"
          element={
            <RequerdAuth>
              <CheekOut />
            </RequerdAuth>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
