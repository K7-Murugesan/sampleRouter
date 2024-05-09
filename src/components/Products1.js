import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { FaEdit } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from "axios";
import Swal from "sweetalert2";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const Products1 = () => {
  // JSON - Javascript Object Notation - {  }
  let navigate = useNavigate();

  let [products, setProducts] = useState([]);
  let [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await fetch("http://localhost:4000/products", {
          method: "GET",
        });
        if (res.ok) {
          let data = await res.json();
          setProducts(data);
        } else {
          throw new Error("Network Issues...");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  let handleDelete = (id) => {
     axios.delete( "http://localhost:4000/products/"+id )
     .then( ()=> {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      
      window.location.reload()
    }  )
  }


  if (isLoading) {
    return <div> Loading..... </div>;
  }
  if (error) {
    return <div> Error : {error} </div>;
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <Button variant="contained" color="success" style={ { height:"40px"} }>
          <IoArrowBackCircleSharp style={ {fontSize:"30px"} }/>
        </Button>
        <h1> Total Products : {products.length} </h1>
      </div>
      <section className="row">
        {products &&
          products.map((product) => (
            <Card
              style={{ width: "18rem", height: "auto" }}
              className="m-3 d-grid align-item-between"
              key={product.id}
            >
              <article>
                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text> {product.brand}</Card.Text>
                  <Card.Text> {product.description}</Card.Text>
                  <Card.Text> {product.price}</Card.Text>
                </Card.Body>
              </article>
              <hr />
              <Grid container spacing={2}>
                <Grid item xs={3}>
                <Button  
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    <MdAddShoppingCart/>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={ ()=>navigate(`/update/${product.id}`) }
                  >
                     <FaEdit/> 
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={()=>handleDelete(product.id)}
                  >
                     <RiDeleteBin6Fill/> 
                  </Button>
                </Grid>
              </Grid>
            </Card>
          ))}
      </section>
    </div>
  );
};

export default Products1;
