import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Products1 = () => {
  let [products, setProducts] = useState([
    { id: 1, pName: "Oppo", price: 12000, manufacturedIn: "India" },
    { id: 2, pName: "Vivo", price: 12000, manufacturedIn: "China" },
    { id: 3, pName: "Apple", price: 12000, manufacturedIn: "Hngkong" },
    { id: 4, pName: "Samsung", price: 12000, manufacturedIn: "Pakistan" },
    { id: 5, pName: "Oneplus", price: 12000, manufacturedIn: "Bangladesh" },
  ]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <Button as={Link} to="/" variant="primary">Back to Home</Button>
        <h1> Total Products </h1>
      </div>
      <section className="row">
        {products.map((product, ind) => (
          <Card style={{ width: "18rem" }} className="m-3" key={ind}>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJ2u482NBtw501OOICaZxGrIcxNtG5SuqWQ&s"
            />
            <Card.Body>
              <Card.Title>{product.pName}</Card.Title>
              <Card.Text> {product.manufacturedIn}</Card.Text>
              <Card.Text> {product.price}</Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Products1;
