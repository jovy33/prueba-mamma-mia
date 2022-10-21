import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MyContext from '../my_context';

export default function ItemCarrito(props) {
    const { listadoCarrito, setListadoCarrito } = useContext(MyContext);
    const pizza = props.pizza;

    const agregarPizza = () => {
        const nuevoListado = [pizza, ...listadoCarrito];
        setListadoCarrito(nuevoListado);
    }

    const eliminarPizza = () => {

    }
    return (
        <div>
            <Card className='carrito-card'>
                <Card.Body className='pedido'>
                    <div className='detalle-pedido'>
                        <img width="100" src={pizza.img} alt="" />
                        <h6 className='carrito-nombre-pizza'>{pizza.name} </h6>
                    </div>
                    <div className='carrito-botones'>
                        <span className='precio-carrito'> ${pizza.price}</span>
                        <Button className='btn-carrito' variant="danger" onClick={ () => eliminarPizza() }> - </Button>{' '}
                        <span className='carrito-cantidad'> 6 </span>
                        <Button className='btn-carrito' variant="info" onClick={ () => agregarPizza() }> + </Button>{' '}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
