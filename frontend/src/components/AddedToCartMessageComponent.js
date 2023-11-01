import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddedToCartMessageComponent = ({
  showCartMessage,
  setShowCartMessage,
}) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Alert
      show={showCartMessage}
      variant="success"
      onClose={() => setShowCartMessage(false)}
      dismissible
    >
      <Alert.Heading>Le Produit a été ajouté à votre Panier!</Alert.Heading>
      <p>
        <Button variant="success" onClick={goBack}>
          Retourner à votre Page
        </Button>{" "}
        <Link to="/cart">
          <Button variant="danger">Aller au Panier</Button>
        </Link>
      </p>
    </Alert>
  );
};

export default AddedToCartMessageComponent;
