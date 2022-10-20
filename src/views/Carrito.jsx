import React from 'react'
import ItemCarrito from '../components/ItemCarrito';
import Button from 'react-bootstrap/Button';

export default function Carrito() {
    return (
        <div className='carrito'>
            <h4 className='carrito-titulo'> Detalles del pedido:</h4>
            <ItemCarrito />
            <ItemCarrito />
            <div className='carrito-total'>
                <span className='span-total'>
                    Total: $ 
                </span>
                <Button variant="success">Ir a Pagar</Button>{' '}
            </div>
        </div>
    )
}
