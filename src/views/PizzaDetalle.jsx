import React, { useState, useEffect } from 'react'
import MyContext from '../my_context';
import { useContext } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

export default function PizzaDetalle() {
    const [pizzaDetalle, setPizzaDetalle] = useState({});
    const { pizzas } = useContext(MyContext);
    const { id } = useParams();
    const cargarDetalle = () => {
        const detalle = pizzas.find(pizza => pizza.id === id);
        setPizzaDetalle(detalle);
    };
    useEffect(() => {
        cargarDetalle();
    }, [pizzas]);
    
    return (
        <div className='vista-detalle'>
            <Card className='card-detalle'>
                <div className='foto-detalle'>
                    <Card.Img variant="top" src="/fondo-pizza.jpg" />
                </div>
                <div className='info-detalle'>
                    <Card.Body>
                        <Card.Title className='titulo-detalle'> {pizzaDetalle.name} </Card.Title>
                    </Card.Body>
                    <hr/>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                        <Card.Text className='detalle-descripcion'>
                                {pizzaDetalle.desc}
                            </Card.Text>
                            <Card.Text className='detalle-ingredientes'>
                                Ingredientes:
                            </Card.Text>
                            <ul>
                            {
                                pizzaDetalle.ingredients.map((ingredient, i) => (
                                    <li key={i}><img width="20" src="/pizza.png" alt="" /> {ingredient} </li>
                                ))
                            }
                            </ul>

                            <div className='botones-detalle'>
                                <span className='precio-card'> Precio: ${pizzaDetalle.price}</span>
                                <Button className='btn-card' variant="danger">Añadir <img width="20" src="/carrito.png" alt="" /></Button>{' '}
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Card>
        </div>
    )
}
