import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ItemCarrito() {
  return (
    <div>
            <Card className='carrito-card'>
                <Card.Body className='pedido'>
                    <div className='detalle-pedido'>
                        <img width="100" src="/fondo-pizza.jpg" alt="" />
                        <h6 className='carrito-nombre-pizza'>Napolitana </h6>
                    </div>
                    <div className='carrito-botones'>
                        <span className='precio-carrito'> $5.590</span>
                        <Button className='btn-carrito' variant="danger"> - </Button>{' '}
                        <span className='carrito-cantidad'> 6 </span>
                        <Button className='btn-carrito' variant="info"> + </Button>{' '}
                    </div>
                </Card.Body>
            </Card>
        </div>
  )
}
