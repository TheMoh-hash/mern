import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { logout } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const AdminLinksComponent = () => {
    const dispatch = useDispatch()
  return (
    <Navbar bg="light" variant="light">
      <Nav className="flex-column">
        <LinkContainer to="/admin/orders">
          <Nav.Link>Commandes</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/products">
          <Nav.Link>Produits</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/users">
          <Nav.Link>Utilisateurs</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/chats">
          <Nav.Link>Discussion</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/analytics">
          <Nav.Link>Analyse</Nav.Link>
        </LinkContainer>
        <Nav.Link onClick={() => dispatch(logout())}>Se déconnecter</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default AdminLinksComponent;
