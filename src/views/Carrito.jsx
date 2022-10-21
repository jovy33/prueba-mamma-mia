import React, { useContext } from 'react'
import ItemCarrito from '../components/ItemCarrito';
import Button from 'react-bootstrap/Button';
import MyContext from '../my_context';

export default function Carrito() {
    const { total, listadoCarrito } = useContext(MyContext);

    return (
        <div className='carrito'>
            <h4 className='carrito-titulo'> Detalles del pedido:</h4>
            {
                listadoCarrito.map(pizza => <ItemCarrito pizza={pizza} />)
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
