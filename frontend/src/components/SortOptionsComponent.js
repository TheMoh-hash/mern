import { Form } from "react-bootstrap";

const SortOptionsComponent = ({ setSortOption }) => {
  return (
    <Form.Select
      onChange={(e) => setSortOption(e.target.value)}
      aria-label="Default select example"
    >
      <option>TRIER PAR</option>
      <option value="price_1">Prix: Du Plus Bas Au Plus Elevée</option>
      <option value="price_-1">Prix: Du Plus Elevée Au Plus Bas</option>
      <option value="rating_-1">Evaluation du Client</option>
      <option value="name_1">Nom A-Z</option>
      <option value="name_-1">Nom Z-A</option>
    </Form.Select>
  );
};

export default SortOptionsComponent;
