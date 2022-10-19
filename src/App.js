import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarPropio from "./components/NavbarPropio";
import Home from "./views/Home";
import PizzaDetalle from "./views/PizzaDetalle";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarPropio/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzaDetalle" element={<PizzaDetalle />} />

        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
