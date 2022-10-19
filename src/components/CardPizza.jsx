import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function CardPizza() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/fondo-pizza.jpg" />
                <Card.Body>
                    <Card.Title> Napolitana </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <Card.Text>
                            Ingredientes:
                        </Card.Text>
                        <ul>
                            <li><img width="20" src="/pizza.png" alt="" /> Mozarella</li>
                            <li><img width="20" src="/pizza.png" alt="" /> Tomates</li>
                            <li><img width="20" src="/pizza.png" alt="" /> Jamon</li>
                            <li><img width="20" src="/pizza.png" alt="" /> Oregano</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <span className='precio-card'> $5.590</span>
                        <br />
                        <div className='botones-card'>
                            <Button className='btn-card' variant="info">Ver Más <img width="20" src="/ojos.png" alt="" /></Button>{' '}
                            <Button className='btn-card' variant="danger">Añadir <img width="20" src="/carrito.png" alt="" /></Button>{' '}
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

