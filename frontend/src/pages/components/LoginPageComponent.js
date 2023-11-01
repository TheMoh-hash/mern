import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const LoginPageComponent = ({
  loginUserApiRequest,
  reduxDispatch,
  setReduxUserState,
}) => {
  const [validated, setValidated] = useState(false);
  const [loginUserResponseState, setLoginUserResponseState] = useState({
    success: "",
    error: "",
    loading: false,
  });
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State to track whether to show the forgot password section
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState(""); // State to store the email for password recovery
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget.elements;

    const email = form.email.value;
    const password = form.password.value;
    const doNotLogout = form.doNotLogout.checked;

    if (event.currentTarget.checkValidity() === true && email && password) {
      setLoginUserResponseState({ loading: true });
      loginUserApiRequest(email, password, doNotLogout)
        .then((res) => {
          setLoginUserResponseState({
            success: res.success,
            loading: false,
            error: "",
          });

          if (res.userLoggedIn) {
            reduxDispatch(setReduxUserState(res.userLoggedIn));
          }

          if (res.success === "user logged in" && !res.userLoggedIn.isAdmin)
            navigate("/user");
          else navigate("/admin/orders");
        })
        .catch((er) =>
          setLoginUserResponseState({
            error: er.response.data.message
              ? er.response.data.message
              : er.response.data,
          })
        );
    }

    setValidated(true);
  };

  const handleForgotPassword = () => {
    // Implement the logic for password recovery here
    // You can send an API request to the server to initiate the password recovery process
    // You may also show a success message or notification to inform the user that the password recovery email has been sent
    console.log("Password recovery initiated for email:", forgotPasswordEmail);
  };

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <Col xs="auto" className="d-flex justify-content-center">
            <i className="bi bi-person-circle fs-1"></i>
          </Col>
          <h1 className="text-center">Connexion</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse e-mail</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                placeholder="Saisir l'adresse e-mail"
                style={{ width: '88%' }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Mot de passe"
                style={{ width: '88%' }}
              />

              <Form.Group controlId="formBasicCheckbox">
                <div className="d-flex justify-content-between align-items-center">
                  <Form.Check
                    name="doNotLogout"
                    type="checkbox"
                    label="Rester connecter"
                  />
                  {!showForgotPassword && (
                    <Button
                      variant="link"
                      onClick={toggleForgotPassword}
                      className="text-decoration-none w-auto"
                    >
                      Mot de passe oublié ?
                    </Button>
                  )}
                </div>
              </Form.Group>
              {showForgotPassword && (
                <div className="mt-3">
                  <h5 className="text-center">Mot de passe oublié</h5>
                  <Form.Group controlId="formBasicForgotPasswordEmail">
                    <Form.Label>Adresse e-mail</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Saisir l'adresse e-mail"
                      style={{ width: '88%' }}
                      value={forgotPasswordEmail}
                      onChange={(e) =>
                        setForgotPasswordEmail(e.target.value)
                      }
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    onClick={handleForgotPassword}
                    className="me-2"
                  >
                    Envoyer
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={toggleForgotPassword}
                    className="ms-2"
                  >
                    Annuler
                  </Button>
                </div>
              )}
            </Form.Group>

            <Row className="pb-2">
              <Col>
                Vous n'avez pas de compte ?{" "}
                <Link to={"/register"} style={{ textDecoration: "none" }}>
                  S'inscrire
                </Link>
              </Col>
            </Row>
            <div className="text-center">
              <Button variant="primary" type="submit" className="col-4">
                {loginUserResponseState &&
                loginUserResponseState.loading === true ? (
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
                Se Connecter
              </Button>
            </div>
            <Alert
              show={
                loginUserResponseState &&
                loginUserResponseState.error === "wrong credentials"
              }
              variant="danger"
            >
              Mauvaises informations d'identification
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPageComponent;
