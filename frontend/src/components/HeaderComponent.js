import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Form,
  DropdownButton,
  Dropdown,
  Button,
  InputGroup,
} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategories } from "../redux/actions/categoryActions";
import socketIOClient from "socket.io-client";
import {
  setChatRooms,
  setSocket,
  setMessageReceived,
  removeChatRoom,
} from "../redux/actions/chatActions";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userRegisterLogin);
  const itemsCount = useSelector((state) => state.cart.itemsCount);
  const { categories } = useSelector((state) => state.getCategories);
  const { messageReceived } = useSelector((state) => state.adminChat);

  const [searchCategoryToggle, setSearchCategoryToggle] = useState("Toutes");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const submitHandler = (e) => {
    if (e.keyCode && e.keyCode !== 13) return;
    e.preventDefault();
    if (searchQuery.trim()) {
      if (searchCategoryToggle === "Toutes") {
        navigate(`/product-list/search/${searchQuery}`);
      } else {
        navigate(
          `/product-list/category/${searchCategoryToggle.replace(/\//g, ",")}/search/${searchQuery}`
        );
      }
    } else if (searchCategoryToggle !== "Toutes") {
      navigate(
        `/product-list/category/${searchCategoryToggle.replace(/\//g, ",")}`
      );
    } else {
      navigate("/product-list");
    }
  };

  useEffect(() => {
    if (userInfo.isAdmin) {
      var audio = new Audio("/audio/chat-msg.mp3");
      const socket = socketIOClient();
      socket.emit(
        "admin connected with server",
        "Admin" + Math.floor(Math.random() * 1000000000000)
      );
      socket.on(
        "server sends message from client to admin",
        ({ user, message }) => {
          dispatch(setSocket(socket));
          //   let chatRooms = {
          //     fddf54gfgfSocketID: [{ "client": "dsfdf" }, { "client": "dsfdf" }, { "admin": "dsfdf" }],
          //   };
          dispatch(setChatRooms(user, message));
          dispatch(setMessageReceived(true));
          audio.play();
        }
      );
      socket.on("disconnected", ({ reason, socketId }) => {
        //   console.log(socketId, reason)
        dispatch(removeChatRoom(socketId));
      });
      return () => socket.disconnect();
    }
  }, [userInfo.isAdmin]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <LinkContainer to="/">
          <div>
            <img
              className="logo"
              src="images/logo.jpg"
              alt="Logo"
              style={{ width: "100px", height: "100px", float: "left" }}
            />
          </div>
        </LinkContainer>
        ""
        <LinkContainer to="/">
          <Navbar.Brand href="/">The SneakerHead</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton
                id="dropdown-basic-button"
                title={searchCategoryToggle}
                renderMenuOnMount={true} // Cela affiche le menu au montage (au survol)
              >
                <Dropdown.Item
                  onClick={() => setSearchCategoryToggle("Toutes")}
                >
                  Toutes
                </Dropdown.Item>
                {categories.map((category, id) => (
                  <Dropdown.Item
                    key={id}
                    onClick={() => setSearchCategoryToggle(category.name)}
                  >
                    {category.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>

              <Form.Control
                onKeyUp={submitHandler}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Rechercher dans le Shop"
              />

              <Button onClick={submitHandler} variant="warning">
                <i className="bi bi-search text-dark"></i>
              </Button>
            </InputGroup>
          </Nav>

          <Nav className="ms-auto">
            {userInfo.isAdmin ? (
              <LinkContainer to="/admin/orders">
                <Nav.Link>
                  Admin
                  {messageReceived && (
                    <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                  )}
                </Nav.Link>
              </LinkContainer>
            ) : userInfo.name && !userInfo.isAdmin ? (
              <NavDropdown
                title={`${userInfo.name} ${userInfo.lastName}`}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  eventKey="/user/my-orders"
                  as={Link}
                  to="/user/my-orders"
                >
                  Mes Commandes
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                  Mon Profil
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item onClick={() => dispatch(logout())}>
                  Déconnexion
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <LinkContainer to="/">
                  <Nav.Link href="/">Accueil</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Connexion</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/register">
                  <Nav.Link>S'inscrire</Nav.Link>
                </LinkContainer>
              </>
            )}

            <LinkContainer to="/cart">
              <Nav.Link>
                <Badge pill bg="danger">
                  {itemsCount === 0 ? "" : itemsCount}
                </Badge>
                <i className="bi bi-cart-dash-fill"></i>{" "}
                <span className="ms-1">Panier</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Add custom CSS styles here */}
      <style type="text/css">{`
        .navbar {
          box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
        }
        .navbar-brand, .nav-link {
          font-family: Georgia, serif;
        .navbar-brand {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .nav-link {
          font-size: 1.2rem;
        }
        
      `}</style>
    </Navbar>
  );
};

export default HeaderComponent;
