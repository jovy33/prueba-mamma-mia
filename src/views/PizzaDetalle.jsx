import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function PizzaDetalle() {
    return (
        <div className='vista-detalle'>
            <Card className='card-detalle'>
                <div className='foto-detalle'>
                    <Card.Img variant="top" src="/fondo-pizza.jpg" />
                </div>
                <div className='info-detalle'>
                    <Card.Body>
                        <Card.Title className='titulo-detalle'> Napolitana </Card.Title>
                    </Card.Body>
                    <hr/>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                        <Card.Text className='detalle-descripcion'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quisquam molestiae, beatae, fugiat porro incidunt, asperiores consequuntur quia doloribus sint quam voluptate nobis velit nam et perspiciatis! Praesentium, earum illum!
                            </Card.Text>
                            <Card.Text className='detalle-ingredientes'>
                                Ingredientes:
                            </Card.Text>
                            <ul>
                                <li><img width="20" src="/pizza.png" alt="" /> Mozarella</li>
                                <li><img width="20" src="/pizza.png" alt="" /> Tomates</li>
                                <li><img width="20" src="/pizza.png" alt="" /> Jamon</li>
                                <li><img width="20" src="/pizza.png" alt="" /> Oregano</li>
                            </ul>

                            <br />
                            <div className='botones-detalle'>
                                <span className='precio-card'> Precio: $5.590</span>
                                <Button className='btn-card' variant="danger">Añadir <img width="20" src="/carrito.png" alt="" /></Button>{' '}
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Card>
        </div>
    )
}
