import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

const Products1 = () => {
  // JSON - Javascript Object Notation - {  }
  let navigate = useNavigate();

  let [products, setProducts] = useState([]);
  let [error, setError] = useState( null )
  let [isLoading, setIsLoading] = useState( true )

  useEffect(() => {
    let fetchData = async () => {
      try{
        let res = await fetch("https://fakestoreapi.com/products", {
          method : "GET"
        });
        if(res.ok){
          let data = await res.json();
          setProducts(data);
        }
        else{
          throw new Error("Network Issues...")
        }

      }
      catch(err){
        setError( err.message );
      }
      finally{
        setIsLoading(false)
      }

    };
    fetchData();
  }, []);

  if(isLoading){
      return <div> Loading..... </div>
  }
  if( error ){
    return <div> Error : {error} </div>
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <Button as={Link} to="/" variant="primary">
          Back to Home
        </Button>
        <h1> Total Products : {products.length} </h1>
      </div>
      <section className="row">
        { products &&
          products.map((product) => (
            <Card style={{ width: "18rem", height:"auto" }} className="m-3 d-grid align-item-between" key={product.id}>
              <article>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text> {product.brand}</Card.Text>
                  <Card.Text> {product.description}</Card.Text>
                  <Card.Text> {product.price}</Card.Text>
                </Card.Body>
              </article>
              <hr />
              <center>
                <Button variant="primary">Add to Card</Button>
              </center>
            </Card>
          ))}
      </section>
    </div>
  );
};

export default Products1;
