import { Form } from "react-bootstrap";

const PriceFilterComponent = ({ price, setPrice }) => {
  return (
    <>
      <Form.Label>
        <span className="fw-bold">Prix Ne Dépassant pas:</span> {price} FCFA
      </Form.Label>
      <Form.Range
        min={15000}
        max={50000}
        step={1000}
        onChange={(e) => setPrice(e.target.value)}
      />
    </>
  );
};

export default PriceFilterComponent;
