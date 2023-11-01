import {
  Row,
  Col,
  Container,
  Form,
  Alert,
  ListGroup,
  Button,
} from "react-bootstrap";
import CartItemComponent from "../../../components/CartItemComponent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserCartDetailsPageComponent = ({
  cartItems,
  itemsCount,
  cartSubtotal,
  userInfo,
  addToCart,
  removeFromCart,
  reduxDispatch,
  getUser,
  createOrder
}) => {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [userAddress, setUserAddress] = useState(false);
    const [missingAddress, setMissingAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("paypal");

    const navigate = useNavigate();
    
  const changeCount = (productID, count) => {
    reduxDispatch(addToCart(productID, count));
  };

  const removeFromCartHandler = (productID, quantity, price) => {
    if (window.confirm("Êtes-vous sur?")) {
      reduxDispatch(removeFromCart(productID, quantity, price));
    }
  };

   useEffect(() => {
        getUser()
        .then((data) => {
            if (!data.address || !data.city || !data.country || !data.zipCode || !data.phoneNumber) {
                setButtonDisabled(true);
                setMissingAddress(" .Afin de passer commande, remplissez votre profil avec l'adresse correcte, la ville, etc.");
            }else {
                setUserAddress({address: data.address, city: data.city, country: data.country, zipCode: data.zipCode,  phoneNumber: data.phoneNumber})
                setMissingAddress(false);
            }
        })
        .catch((er) => console.log(er.response.data.message ? er.response.data.message : er.response.data));
    }, [userInfo._id])
    
    const orderHandler = () => {
        const orderData = {
            orderTotal: {
               itemsCount: itemsCount, 
               cartSubtotal: cartSubtotal,
            },
            cartItems: cartItems.map(item => {
                return {
                    productID: item.productID,
                    name: item.name,
                    price: item.price,
                    image: { path: item.image ? (item.image.path ?? null) : null },
                    quantity: item.quantity,
                    count: item.count,

                }
            }),
            paymentMethod: paymentMethod,
        }
        createOrder(orderData)
        .then(data => {
            if (data) {
                navigate("/user/order-details/" + data._id);
            }
        })
        .catch((err) => console.log(err));
    }

    const choosePayment = (e) => {
        setPaymentMethod(e.target.value);
    }
  return (
    <Container>
      <Row className="mt-4">
        <h1>Détails du panier</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Livraison</h2>
              <b>Nom</b>: {userInfo.name} {userInfo.lastName} <br />
              <b>Adresse</b>:{userAddress.address} {userAddress.city}  {userAddress.zipCode}  <br />
              <b>Contact</b>: {userAddress.phoneNumber} <br />
            </Col>
            <Col md={6}>
              <h2>Mode de payement</h2>
              <Form.Select  onChange={choosePayment}>
                <option value="paypal">PayPal</option>
                <option value="cod">
                  Paiement à la livraison (la livraison peut être retardée)
                </option>
                <option value="Tmoney">TMONEY</option>
                <option value="Flooz">FLOOZ</option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3" variant="danger">
                  Non livré
                   {missingAddress}
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant="success">
                  Pas encore payé.
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Commande des articles</h2>
          <ListGroup variant="flush">
            {cartItems.map((item, idx) => (
              <CartItemComponent
                item={item}
                key={idx}
                removeFromCartHandler={removeFromCartHandler}
                changeCount={changeCount}
              />
            ))}
          </ListGroup>
        </Col>

        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Récapitulatif de la commande</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              Prix de l’article (après taxes):
              <span className="fw-bold">{cartSubtotal} FCFA</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Livraison:<span className="fw-bold">Inclus</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Taxe:<span className="fw-bold">Inclus</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Prix total:<span className="fw-bold">{cartSubtotal} FCFA</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button size="lg" onClick={orderHandler}  variant="danger" type="button" disabled={buttonDisabled}>
                Passer la commande
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCartDetailsPageComponent;
