import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from './my_context';
import NavbarPropio from "./components/NavbarPropio";
import Home from "./views/Home";
import PizzaDetalle from "./views/PizzaDetalle";
import Carrito from "./views/Carrito";


function App() {
  const [pizzas, setPizzas] = useState([]);
  const [listadoCarrito, setListadoCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const host = window.location.href;
  const url = `${host}/pizzas.json`;
  const traerPizzas = async () => {
    const res = await fetch(url);
    const resultadoPizzas = await res.json();
    setPizzas(resultadoPizzas);
  }

  const calcularTotal = () => {
    let totalPrecio = 0;
    listadoCarrito.map(pizza => {
      totalPrecio = totalPrecio + pizza.price;
    })
    setTotal(totalPrecio);
  }

  const agregarCarrito = (pizza) => {
    const listadoNuevo = [pizza, ...listadoCarrito];
    setListadoCarrito(listadoNuevo);
    console.log(listadoNuevo)
  }

  useEffect(() => {
    calcularTotal();
  }, [listadoCarrito]);

  useEffect(() => {
    traerPizzas();
  }, []);

  const sharedPizzas = { pizzas, setPizzas, listadoCarrito, setListadoCarrito, total, agregarCarrito };

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
