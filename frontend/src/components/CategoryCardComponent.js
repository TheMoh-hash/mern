import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardComponent = ({ category, idx }) => {
  return (
    <div className="zoom-image">
      <Card
        className="h-100 shadow-sm bg-white rounded"
        style={{ border: "1px solid #ddd" }}
      >
        <Card.Img
          crossOrigin="anonymous"
          variant="top"
          src={category.image ?? null}
          className="p-2"
        />
        <Card.Body className="d-flex flex-column">
          <div className="d-flex mb-2 justify-content-between">
            <Card.Title className="mb-0 font-weight-bold">
              {category.name}
            </Card.Title>
          </div>
          <Card.Text className="text-secondary">
            {category.description}
          </Card.Text>
          <LinkContainer to={`/product-list/category/${category.name}`}>
            <Button
              variant="warning"
              className="mt-auto font-weight-bold"
              style={{ backgroundColor: "#f8e825", borderColor: "#f8e825" }}
            >
              Voir la Catégorie
            </Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategoryCardComponent;
