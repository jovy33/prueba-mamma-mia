import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarPropio from "./components/NavbarPropio";
import Home from "./views/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarPropio/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
