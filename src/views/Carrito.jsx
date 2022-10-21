import React, { useContext } from 'react'
import ItemCarrito from '../components/ItemCarrito';
import Button from 'react-bootstrap/Button';
import MyContext from '../my_context';

export default function Carrito() {
    const { total, listadoCarrito } = useContext(MyContext);

    const obtenerPizzasUnicas = () => {
        const pizzasMap = listadoCarrito.map(item => [item.name, item]);
        const pizzasMapArr = new Map(pizzasMap); // Pares de clave y valor    
        return [...pizzasMapArr.values()]; // Conversión a un array
    };

    const obtenerCantidadPorTipoPizza = (idPizza) => {
        const cantidad = listadoCarrito.filter(pizza => pizza.id === idPizza).length
        return cantidad;
    }

    const obtenerTotalPorTipoPizza = (idPizza) => {
        const pizzasFiltradasPorTipo = listadoCarrito.filter(pizza => pizza.id === idPizza);
        const cantidadPizzasPorTipo = pizzasFiltradasPorTipo.length;
        const valorPizza = pizzasFiltradasPorTipo[0].price;
        return cantidadPizzasPorTipo * valorPizza;
    }

    const pizzasUnicasOrdenadas = (listadoPizzas) => {
        /* Se copia lista 'listadoPizzas' a una constante llamada 'lista'. Para proceder con el ordenamiento. */
        const lista = [...listadoPizzas];

        /*
            Devuelve la lista ordenada.
            Si el valor de 'a' va antes que el valor de 'b', entonces devuelve valor negativo.
            Si el valor de 'a' va después que el valor de 'b', entonces devuelve valor positivo.
            Si el valor de 'a' es igual que el valor de 'b', entonces devuelve 0.
        */
        return lista.sort((a, b) => a.name.localeCompare(b.name))
    }

    const pizzasUnicasObtenidas = obtenerPizzasUnicas();
    const pizzasUnicas = pizzasUnicasOrdenadas(pizzasUnicasObtenidas);

    return (
        <div className='carrito'>
            <h4 className='carrito-titulo'> Detalles del pedido:</h4>
            {
                pizzasUnicas.map(pizza =>
                    <ItemCarrito pizza={pizza} cantidad={obtenerCantidadPorTipoPizza(pizza.id)} totalValorPorPizza={obtenerTotalPorTipoPizza(pizza.id)} />)
            }
            <div className='carrito-total'>
                <span className='span-total'>
                    Total: $ {total}
                </span>
                <Button variant="success">Ir a Pagar</Button>{' '}
            </div>
        </div>
    )
}
