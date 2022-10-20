import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function CardPizza(props) {
    const { pizza } = props;
    const { id, name, desc, ingredients, price, img } = pizza;
    const navigate = useNavigate();
    const irDetallePizza = async () => {
		navigate(`/pizza-detalle/${id}`);
	};
    return (
        <div>
            <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <Card.Text>
                            Ingredientes:
                        </Card.Text>
                        <ul>
                            {
                                ingredients.map((ingredient, i) => (
                                    <li key={i}><img width="20" src="/pizza.png" alt="" /> {ingredient} </li>
                                ))
                            }
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <span className='precio-card'> ${price}</span>
                        <br />
                        <div className='botones-card'>
                            <Button className='btn-card' variant="info"  onClick={irDetallePizza}>Ver Más <img width="20" src="/ojos.png" alt="" /></Button>{' '}
                            <Button className='btn-card' variant="danger">Añadir <img width="20" src="/carrito.png" alt="" /></Button>{' '}
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

