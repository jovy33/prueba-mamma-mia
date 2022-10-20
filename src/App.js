import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from './my_context';
import NavbarPropio from "./components/NavbarPropio";
import Home from "./views/Home";
import PizzaDetalle from "./views/PizzaDetalle";
import Carrito from "./views/Carrito";


function App() {
  const [pizzas, setPizzas] = useState([]);
  const sharedPizzas = { pizzas, setPizzas };
  const url = "http://localhost:3000/pizzas.json";
  const traerPizzas = async () => {
    const res = await fetch(url);
    const resultadoPizzas = await res.json();  
    setPizzas(resultadoPizzas);
  }

  useEffect(() => {
    traerPizzas();
  }, []);

  return (
    <>
      <MyContext.Provider value={sharedPizzas}>
        <BrowserRouter>
          <NavbarPropio />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/pizza-detalle/:id" element={<PizzaDetalle />} />

          </Routes>

        </BrowserRouter>
      </MyContext.Provider>

    </>
  );
}

export default App;
