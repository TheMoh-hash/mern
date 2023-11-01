import { Row, Col, Image, ListGroup, Form } from "react-bootstrap";
import RemoveFromCartComponent from "./RemoveFromCartComponent";

const CartItemComponent = ({
  item,
  removeFromCartHandler = false,
  orderCreated = false,
  changeCount = false,
  //changeSize = false,
  //changeColor = false,
}) => {
  //const { selectedSize, selectedColor } = item;

  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={2}>
            <Image
              crossOrigin="anonymous"
              src={item.image ? item.image.path ?? null : null}
              fluid
            />
          </Col>
          <Col md={2}>{item.name}</Col>
          <Col md={2}>
            <b>{item.price} FCFA</b>
          </Col>
          <Col md={3}>
            <Form.Select
              onChange={
                changeCount
                  ? (e) => changeCount(item.productID, e.target.value)
                  : undefined
              }
              disabled={orderCreated}
              value={item.quantity}
            >
              {[...Array(item.count).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </Form.Select>

            {/* <Form.Select
              onChange={(e) => changeSize(item.productID, e.target.value)}
              value={item.size}
              disabled={orderCreated}
            >
              <option value="">Pointure</option>
              {Array.isArray(selectedSize) &&
                selectedSize.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
            </Form.Select>

            <Form.Select
              onChange={(e) => changeSize(item.productID, e.target.value)}
              value={item.color}
              disabled={orderCreated}
            >
              <option value="">Coloris</option>
              {Array.isArray(selectedColor) &&
                selectedColor.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
            </Form.Select> */}
          </Col>

          <Col md={3}>
            <RemoveFromCartComponent
              orderCreated={orderCreated}
              productID={item.productID}
              quantity={item.quantity}
              price={item.price}
              removeFromCartHandler={
                removeFromCartHandler ? removeFromCartHandler : undefined
              }
            />
          </Col>
        </Row>
      </ListGroup.Item>
      <br />
    </>
  );
};

export default CartItemComponent;
