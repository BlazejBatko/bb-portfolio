import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import ScrollTop from "./components/ScrollTop";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  console.log(location);
  window.onload = function () {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 1);
  };
  return (
    <div className="App">
      <GlobalStyle />

      <Nav />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />}></Route>
          {/* :id oznacza ze bez wzgledu na route po / bedziemy przenoszeni na MovieDetail. */}
          <Route path="/work/:id" element={<MovieDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
