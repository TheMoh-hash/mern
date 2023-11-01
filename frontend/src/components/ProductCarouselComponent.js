import { Carousel, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarouselComponent = ({ bestSellers }) => {
  const cursorP = {
    cursor: "pointer",
  };

  return bestSellers.length > 0 ? (
    <Carousel>
      {bestSellers.map((item, idx) => (
        <Carousel.Item key={idx}>
          <img
            crossOrigin="anonymous"
            className="d-block w-100"
            style={{ height: "800px", objectFit: "contain" }}
            src={item.images ? item.images[0].path : null}
            alt="First slide"
          />
          <Carousel.Caption className="text-center">
            <LinkContainer style={cursorP} to={`/product-details/${item._id}`}>
              <h3 className="font-weight-bold mb-3">
                Bestseller dans la catégorie {item.category}
              </h3>
            </LinkContainer>
            <p>{item.description}</p>
            <LinkContainer to={`/product-details/${item._id}`}>
              <Button
                variant="warning"
                className="font-weight-bold"
                style={{ backgroundColor: "#f8e825", borderColor: "#f8e825" }}
              >
                Voir le produit
              </Button>
            </LinkContainer>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  ) : null;
};

export default ProductCarouselComponent;
