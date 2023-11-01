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
import { useEffect, useState, useRef } from "react";
import axios from 'axios';

import { useParams } from "react-router-dom";


const UserOrderDetailsPageComponent = ({
  userInfo,
  getUser,
  getOrder,
  loadPayPalScript,
}) => {
  const [userAddress, setUserAddress] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [orderButtonMessage, setOrderButtonMessage] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [isDelivered, setIsDelivered] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const paypalContainer = useRef();
  console.log(paypalContainer);

  const { id } = useParams();

  useEffect(() => {
    getUser()
      .then((data) => {
        setUserAddress({
          address: data.address,
          city: data.city,
          country: data.country,
          zipCode: data.zipCode,
          /* state: data.state, */
          phoneNumber: data.phoneNumber,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const initiatePayGateTransaction = () => {
    const url = "https://paygateglobal.com/api/v1/pay";
    const payload = {
      auth_token: "5c0eb928-e111-4564-8a73-46f5b27e58a3",
      phone_number: userAddress.phoneNumber,
      amount: cartSubtotal,
      description: "Détails de la transaction",
      identifier: id, 
      network: "FLOOZ"
    };
    console.log(payload)

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        // Traiter la réponse de PayGateGlobal ici
        console.log(data);
        // Mise à jour de l'état après le paiement réussi
        updateStateAfterOrder(data.tx_reference);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête PayGateGlobal", error);
        // Gérer l'erreur de la requête PayGateGlobal ici
      });
  };

  useEffect(() => {
    getOrder(id)
      .then((data) => {
        setPaymentMethod(data.paymentMethod);
        setCartItems(data.cartItems);
        setCartSubtotal(data.orderTotal.cartSubtotal);
        data.isDelivered
          ? setIsDelivered(data.deliveredAt)
          : setIsDelivered(false);
        data.isPaid ? setIsPaid(data.paidAt) : setIsPaid(false);
        if (data.isPaid) {
          setOrderButtonMessage("Votre commande est terminée");
          setButtonDisabled(true);
        } else {
          if (data.paymentMethod === "paypal") {
            setOrderButtonMessage("Payez avec PayPal");
          } else if (data.paymentMethod === "cod") {
            setButtonDisabled(true);
            setOrderButtonMessage(
              "Attendez votre commande. Vous payez à la livraison"
            );
          } else if (data.paymentMethod === "Tmoney") {
            setOrderButtonMessage("Payez avec TMONEY");
          } else if (data.paymentMethod === "Flooz") {
            setOrderButtonMessage("Payez avec FLOOZ");
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const orderHandler = () => {
    setButtonDisabled(true);
    if (paymentMethod === "paypal") {
      setOrderButtonMessage(
        "Pour payer votre commande, cliquez sur l'un des boutons ci-dessous"
      );
      if (!isPaid) {
        loadPayPalScript(cartSubtotal, cartItems, id, updateStateAfterOrder);
      }
    } else if (paymentMethod === "Tmoney" || paymentMethod === "Flooz") {
      initiatePayGateTransaction();
    } else {
      setOrderButtonMessage("Votre commande a été passée. Merci");
    }
    

  };

 

  const updateStateAfterOrder = (paidAt) => {
    const formattedPaidAt = new Date(paidAt).toLocaleString()

    setOrderButtonMessage("Merci pour votre paiement !Un email de confirmation vous sera envoyer");
    setIsPaid(formattedPaidAt);
    setButtonDisabled(true);
    paypalContainer.current.style = "display: none";
  
     // Envoyez l'e-mail à l'utilisateur
  const userEmail =`${userInfo.email}` ; // Remplacez par l'adresse e-mail de l'utilisateur
  const emailSubject = 'Confirmation de commande';
  let emailBody = `Bonjour ${userInfo.name} ${userInfo.lastName},

  Merci d'avoir effectué votre achat ! Voici les détails de votre transaction :

  Montant de la commande: ${cartSubtotal} FCFA
  Méthode de paiement: ${paymentMethod}
  Date de paiement: ${formattedPaidAt}

  Liste des produits :
  `;

  // Ajouter les détails de chaque produit
  cartItems.forEach((item) => {
    emailBody += `\nNom du produit: ${item.name}
      Quantité: ${item.quantity}
      Prix unitaire: ${item.price} FCFA
    `;
  });

  emailBody += `

  Nous vous remercions pour votre confiance.

  Cordialement,
  Votre équipe The SneakerHead
  `;

  sendEmail(userEmail, emailSubject, emailBody); // Appel à la fonction d'envoi d'e-mail

  };

  const sendEmail = (to, subject, text) => {
    const emailData = {
      to: to,
    subject: subject,
    text: text,
    };
  
    axios
      .post('/api/emails/send-email', emailData)
      .then((response) => {
        console.log(response.data); // Réponse de l'API backend
        // Faire d'autres actions après l'envoi d'e-mails réussi
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'e-mail :", error);
        // Gérer les erreurs d'envoi d'e-mails
      });
  };
  

  

  return (
    <Container>
      <Row className="mt-4">
        <h1>Détails de la commande</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Livraison</h2>
              <b>Nom</b>: {userInfo.name} {userInfo.lastName}
              <br />
              <b>Adresse</b>: {userAddress.address} {userAddress.city}{" "}
              {/* {userAddress.state} */} {userAddress.zipCode} <br />
              <b>Contact</b>: {userAddress.phoneNumber}
            </Col>
            <Col md={6}>
              <h2>Méthode de payement</h2>
              <Form.Select disable={false}>
                <option value={paymentMethod} disabled={false}>
                  PayPal
                </option>
                <option value="cod" disabled={true}>
                  Paiement à la livraison (la livraison peut être retardée)
                </option>
                <option value={paymentMethod} disabled={true}>
                  TMONEY
                </option>
                <option value={paymentMethod} disabled={true}>
                  FLOOZ
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert
                  className="mt-3"
                  variant={isDelivered ? "success" : "danger"}
                >
                  {isDelivered ? <>Livré à {isDelivered}</> : <>Non livrés</>}
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant={isPaid ? "success" : "danger"}>
                  {isPaid ? <>Payé le {isPaid}</> : <>Pas encore payé</>}
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Commande des articles</h2>
          <ListGroup variant="flush">
            {cartItems.map((item, idx) => (
              <CartItemComponent item={item} key={idx} orderCreated={true} />
            ))}
          </ListGroup>
        </Col>

        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Récapitulatif de la commande</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              Montant de la commande(après taxes):
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
                <Button
                  size="lg"
                  onClick={orderHandler }
                  variant="danger"
                  type="button"
                  disabled={buttonDisabled}
                >
                  {orderButtonMessage}
                </Button>
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <div ref={paypalContainer} id="paypal-container-element"></div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UserOrderDetailsPageComponent;
