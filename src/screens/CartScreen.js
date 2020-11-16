import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { Link, useParams, useHistory, useLocation } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

// /cart/:id?qty=3  or /cart
const CartScreen = () => {
  const history = useHistory()
  const productId = useParams().id

  console.log(useLocation())

  const { search } = useLocation() // ?qty=3
  const qty = search ? Number(search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  console.log(cartItems)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    console.log("remode", id)
  }

  return (
    <Row>
      <Col md={8}>
        {cartItems.length === 0 ? <Message>
            Your cart is empty 
            <Link className="btn btn-light my-3" to="/">Go Back</Link>
          </Message> : (
            <ListGroup variant="flush">
              {cartItems.map(item => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>

                    <Col md={3}>
                      <Link className="btn btn-light my-3" to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>

                    <Col md={2}>${item.price}</Col>

                    <Col md={2}>
                        <Form.Control as="select" value={item.qty} 
                            onChange={e=> dispatch(addToCart(item.product, Number(e.target.value)))}>
                          {
                            [...Array(item.countInStock).keys()].map(x => (
                              <option key={x+1} value={x+1}>{x+1}</option>
                            ))
                          }
                        </Form.Control>
                    </Col>

                    <Col md={2}>
                      <Button type="button" variant="light" onClick={() => removeFromCartHandler(item.product)}>
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
}

export default CartScreen;
