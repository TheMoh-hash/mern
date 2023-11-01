import React, { useState, useEffect, useRef } from "react";
import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddedToCartMessageComponent from "../../components/AddedToCartMessageComponent";
import { Link, useParams } from "react-router-dom";
import ImageZoom from "js-image-zoom";
import MetaComponent from "../../components/MetaComponent";

const ProductDetailsPageComponent = ({
  addToCartReduxAction,
  reduxDispatch,
  getProductDetails,
  userInfo,
  writeReviewApiRequest,
  getSimilarProducts,
}) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [showCartMessage, setShowCartMessage] = useState(false);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productReviewed, setProductReviewed] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);

  const messagesEndRef = useRef(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const addToCartHandler = () => {
    reduxDispatch(
      addToCartReduxAction(id, quantity, selectedSize, selectedColor)
    );
    setShowCartMessage(true);
  };

  useEffect(() => {
    if (productReviewed) {
      setTimeout(() => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [productReviewed]);

  useEffect(() => {
    getProductDetails(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((er) =>
        setError(
          er.response.data.message ? er.response.data.message : er.response.data
        )
      );
  }, [id, productReviewed]);

  const sendReviewHandler = (e) => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const formInputs = {
      comment: form.comment.value,
      rating: form.rating.value,
    };
    if (e.currentTarget.checkValidity() === true) {
      writeReviewApiRequest(product._id, formInputs)
        .then((data) => {
          if (data === "review created") {
            setProductReviewed("Votre avis a été pris en compte avec succès !");
          }
        })
        .catch((er) =>
          setProductReviewed(
            er.response.data.message
              ? er.response.data.message
              : er.response.data
          )
        );
    }
  };

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        const similarProducts = await getSimilarProducts(id);
        setSimilarProducts(similarProducts);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des produits similaires :",
          error
        );
      }
    };
    fetchSimilarProducts();
  }, [id, getSimilarProducts]);

  useEffect(() => {
    if (product.images) {
      var options = {
        //width: 400,
        // zoomWidth: 500,
        // fillContainer: true,
        // zoomPosition: "bottom",
        scale: 2,
        offset: { vertical: 0, horizontal: 0 },
      };

      product.images.map(
        (image, id) =>
          new ImageZoom(document.getElementById(`imageId${id + 1}`), options)
      );
    }
  });

  return (
    <>
    <MetaComponent title={product.name} description={product.description}/>
    <Container>
      <AddedToCartMessageComponent
        showCartMessage={showCartMessage}
        setShowCartMessage={setShowCartMessage}
      />
      <Row className="mt-5">
        {loading ? (
          <h2>Chargement des détails du produit...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <Col style={{ zIndex: 1 }} md={4}>
              {product.images
                ? product.images.map((image, id) => (
                    <div key={id}>
                      <div key={id} id={`imageId${id + 1}`}>
                        <Image
                          crossOrigin="anonymous"
                          fluid
                          src={image.path ?? null}
                          style={{
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            maxWidth: "100%",
                            height: "auto",
                            margin: "10px 0",
                          }}
                        />
                      </div>
                      <br />
                    </div>
                  ))
                : null}
            </Col>
            <Col md={8}>
              <Row>
                <Col md={8}>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h1>{product.name}</h1>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Rating
                        readonly
                        size={20}
                        initialValue={product.rating}
                      />{" "}
                      ({product.reviewsNumber})
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Prix <span className="fw-bold">{product.price} FCFA</span>
                    </ListGroup.Item>
                    <ListGroup.Item>{product.description}</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={4}>
                  <ListGroup>
                    <ListGroup.Item>
                      Statut :{" "}
                      {product.count > 0 ? "en stock" : "rupture de stock"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Prix:{" "}
                      <span className="fw-bold">{product.price} FCFA</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Pointure :
                      <Form.Select
                        name="size"
                        required
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        aria-label="Sélectionner la Pointure"
                      >
                        <option value="">Sélectionner la Pointure</option>
                        {product.attrs
                          .find((attr) => attr.key === "Taille")
                          .value.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                      </Form.Select>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Couleur :
                      <Form.Select
                        name="color"
                        required
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        aria-label="Sélectionner la couleur"
                      >
                        <option value="">Sélectionner la couleur</option>
                        {product.attrs
                          .find((attr) => attr.key === "Coloris")
                          .value.map((color) => (
                            <option key={color} value={color}>
                              {color}
                            </option>
                          ))}
                      </Form.Select>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Quantité:
                      <Form.Select
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        size="lg"
                        aria-label="Default select example"
                      >
                        {[...Array(product.count).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Select>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button onClick={addToCartHandler} variant="danger">
                        Ajouter au panier
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
              <Row>
                <Col className="mt-5">
                  <h5>COMMENTAIRES</h5>
                  <ListGroup variant="flush">
                    {product.reviews &&
                      product.reviews.map((review, idx) => (
                        <ListGroup.Item key={idx}>
                          {review.user.name} <br />
                          <Rating
                            readonly
                            size={20}
                            initialValue={review.rating}
                          />
                          <br />
                          {review.createdAt.substring(0, 10)} <br />
                          {review.comment}
                        </ListGroup.Item>
                      ))}
                    <div ref={messagesEndRef} />
                  </ListGroup>
                </Col>
              </Row>
              <hr />
              {!userInfo.name && (
                <Alert variant="danger">
                  Connectez-vous d'abord pour écrire un avis
                </Alert>
              )}

              <Form onSubmit={sendReviewHandler}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Écrire une critique</Form.Label>
                  <Form.Control
                    name="comment"
                    required
                    as="textarea"
                    disabled={!userInfo.name}
                    rows={3}
                  />
                </Form.Group>
                <Form.Select
                  name="rating"
                  required
                  disabled={!userInfo.name}
                  aria-label="Default select example"
                >
                  <option value="">Votre note</option>
                  <option value="5">5 (Très bien)</option>
                  <option value="4">4 (Bien)</option>
                  <option value="3">3 (Moyenne)</option>
                  <option value="2">2 (Mauvais)</option>
                  <option value="1">1 (Affreux)</option>
                </Form.Select>
                <Button
                  disabled={!userInfo.name}
                  type="submit"
                  className="mb-3 mt-3"
                  variant="primary"
                >
                  Soumettre
                </Button>

                {productReviewed}
              </Form>
            </Col>
            <div>
              {/* Partie pour afficher les produits similaires */}
              {similarProducts && (
  <Row className="mt-5">
    <Col>
      <h2>Produits similaires</h2>
      <div
        className="d-flex flex-wrap justify-content-start"
        style={{ display: "flex", gap: "20px" }}
      >
        {similarProducts.map((similarProduct) => (
          <div
            key={similarProduct._id}
            style={{
              marginRight: "20px",
              width: "220px",
              textAlign: "center",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Link
              to={`/product-details/${similarProduct._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Image
                src={similarProduct.images[0].path}
                alt={similarProduct.name}
                width={220}
              />
              <p style={{ marginTop: "10px" }}>{similarProduct.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </Col>
  </Row>
)}



            </div>
          </>
        )}
      </Row>
    </Container>
    </>
  );
};

export default ProductDetailsPageComponent;
