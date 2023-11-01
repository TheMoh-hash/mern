import { Container, Row, Col, Alert, ListGroup, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartItemComponent from "../../components/CartItemComponent";

const CartPageComponent = ({
  addToCart,
  removeFromCart,
  cartItems,
  cartSubtotal,
  reduxDispatch,
}) => {
  const changeCount = (productID, count) => {
    reduxDispatch(addToCart(productID, count));
  };

  const changeSize = (productID,size) => {
    reduxDispatch(addToCart(productID, size));
  };
  const changeColor = (productID,color) => {
    reduxDispatch(addToCart(productID, color));
  };

  const removeFromCartHandler = (productID, quantity, price,size,color) => {
    if (window.confirm("êtes-vous sûr?")) {
      reduxDispatch(removeFromCart(productID, quantity, price,size,color));
    }
  };

  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={8}>
          <h1>Panier</h1>
          <ListGroup variant="flush">
            {cartItems.length === 0 ? (
              <Alert variant="info">Votre panier est vide</Alert>
            ) : (
              <ListGroup variant="flush">
                {cartItems.map((item, idx) => (
                  <CartItemComponent
                    item={item}
                    key={idx}
                    changeCount={changeCount}
                    removeFromCartHandler={removeFromCartHandler}
                    changeSize = {changeSize}
                    changeColor ={ changeColor}
                    selectedSize={item.size} // Passer la valeur sélectionnée de la taille
                    selectedColor={item.color} // Passer la valeur sélectionnée de la couleur
                  
                  />
                ))}
              </ListGroup>
            )}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>
                Sous-total ({cartItems.length}{" "}
                {cartItems.length === 1 ? "Produit" : "Products"})
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Prix: <span className="fw-bold">{cartSubtotal} FCFA</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to="/user/cart-details">
                <Button disabled={cartSubtotal === 0} type="button">
                  Procéder à l'achat
                </Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPageComponent;
