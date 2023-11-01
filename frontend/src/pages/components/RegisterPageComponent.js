import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  
} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

const RegisterPageComponent = ({
  registerUserApiRequest,
  reduxDispatch,
  setReduxUserState,
}) => {
  const [validated, setValidated] = useState(false);
  const [registerUserResponseState, setRegisterUserResponseState] = useState({
    success: "",
    error: "",
    loading: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const [passwordsMatchState, setPasswordsMatchState] = useState(true);

  let email;
  let password;
  let name;
  let lastName;

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onChange = () => {
    const password = document.querySelector("input[name=password]");
    const confirmPassword = document.querySelector(
      "input[name=confirmPassword]"
    );
    if (confirmPassword.value === password.value) {
      setPasswordsMatchState(true);
    } else {
      setPasswordsMatchState(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget.elements;
    email = form.email.value;
    name = form.name.value;
    lastName = form.lastName.value;
    password = form.password.value;
    if (
      event.currentTarget.checkValidity() === true &&
      email &&
      password &&
      name &&
      lastName &&
      form.password.value === form.confirmPassword.value
    ) {
      setRegisterUserResponseState({ loading: true });
      registerUserApiRequest(name, lastName, email, password)
        .then((data) => {
          setRegisterUserResponseState({
            success: data.success,
            loading: false,
          });
          reduxDispatch(setReduxUserState(data.userCreated));

          // Envoi de l'e-mail de confirmation
          sendConfirmationEmail(email);
        })
        .catch((er) =>
          setRegisterUserResponseState({
            error: er.response.data.message
              ? er.response.data.message
              : er.response.data,
          })
        );
    }

    setValidated(true);
  };

  const sendConfirmationEmail = (email, name) => {
    const emailData = {
      to: email,
      subject: "Confirmation d'inscription",
      text: `Bonjour ${name},

      Merci de vous être inscrit à notre site ! Nous sommes ravis de vous compter parmi nos membres.
  
      Cordialement,
      Votre équipe The SneakerHead`,
    };

    axios
      .post("/api/emails/send-email", emailData) // Assurez-vous de remplacer "/api/emails/send-email" par l'URL de votre route d'envoi d'e-mail
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
      <Row className="mt-5 justify-content-md-center align-items-center">
        <Col md={6}>
          <Col
            xs="auto"
            className="d-flex justify-content-center align-items-center"
          >
            <i className="bi bi-person-circle fs-1 "></i>
          </Col>
          <h1 className="text-center">S'inscrire</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Entrer votre Nom"
                name="name"
                style={{ width: "88%" }}
              />
              <Form.Control.Feedback type="invalid">
                Veuiller saisir un Nom
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Entrer votre Prénom"
                name="lastName"
                style={{ width: "88%" }}
              />
              <Form.Control.Feedback type="invalid">
                Veuiller saisir un Prénom
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse e-mail</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                placeholder="Entrer votre e-mail"
                style={{ width: "88%" }}
              />
              <Form.Control.Feedback type="invalid">
                Veuiller saisir une adresse e-mail valide
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <div className="password-input">
                <Form.Control
                  name="password"
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Mot de passe"
                  style={{ width: "88%" }}
                  minLength={8}
                  onChange={onChange}
                  isInvalid={!passwordsMatchState}
                />
                <i
                  className={`bi bi-eye${showPassword ? "-slash" : ""}`}
                  style={{
                    position: "relative",
                   
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={handleTogglePassword}
                ></i>
              </div>
              <Form.Control.Feedback type="invalid">
                Veuiller saisir un mot de passe valide
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Le mot de passe doit contenir 8 caractères au minimum
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
              <Form.Label>Confirmer le mot de passe</Form.Label>
              <Form.Control
                name="confirmPassword"
                required
                type="password"
                placeholder="Confirmer le mot de passe"
                style={{ width: "88%" }}
                minLength={8}
                onChange={onChange}
                isInvalid={!passwordsMatchState}
              />
              <Form.Control.Feedback type="invalid">
                Les deux mots de passe doivent correspondre
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="pb-2">
              <Col>
                Avez-vous déjà un compte ?
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  {" "}
                  Se connecter{" "}
                </Link>
              </Col>
            </Row>
            <div className="text-center">
              <Button type="submit" className="col-4">
                {/* <Spinner animation="grow" size="sm" />
              <Spinner animation="grow" /> */}
                {registerUserResponseState &&
                registerUserResponseState.loading === true ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  ""
                )}
                S'Inscrire
              </Button>
            </div>

            <Alert
              show={
                registerUserResponseState &&
                registerUserResponseState.error === "user exists"
              }
              variant="danger"
            >
              Un utilisateur avec cet e-mail existe déjà !
            </Alert>
            <Alert
              show={
                registerUserResponseState &&
                registerUserResponseState.success === "User created"
              }
              variant="info"
            >
              Compte créer
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPageComponent;
