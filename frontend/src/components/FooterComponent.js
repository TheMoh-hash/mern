import { Container, Row, Col } from "react-bootstrap";
import React from "react";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Inscription à la newsletter réussie !");
  };

  return (
    <footer>
      <Container fluid>
        <Row className="mt-5 justify-content-between">
          <Col md={6} className="bg-dark text-white text-center py-5">
            <div className="social-icons">
              {/* ... Icônes de médias sociaux ... */}
              <a href="https://www.facebook.com/">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://wa.me/+22893661655">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/invites/contact/?i=3pmoronhbj3c&utm_content=s7jyndy">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            <p className="text-muted small mb-0">
              &copy; {currentYear} The SneakerHead. Tous droits réservés.
            </p>
            <p className="text-muted small">
              <a href="/privacy">Politique de confidentialité</a> |{" "}
              <a href="/terms">Conditions d'utilisation</a>
            </p>
          </Col>
          <Col md={6} className="bg-dark text-white text-center py-5">
            <div className="newsletter-form" style={newsletterFormStyle}>
              <h4>Inscrivez-vous pour les nouvelles et les promotions</h4>
              <form onSubmit={handleSubscribe}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Votre adresse e-mail"
                    required
                    style={inputStyle}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={buttonStyle}>
                  S'inscrire
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const newsletterFormStyle = {
  padding: "20px",
  textAlign: "center",
};

const inputStyle = {
  marginBottom: "10px",
  padding: "10px",
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default FooterComponent;
