import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

// let a = 10;
// let b = 20;

// let obj = {
//   a,
//   b
// }

const CreateProduct = () => {
  // let [ title, setTitle ] = useState( "" )
  // let [ description, setDescription ] = useState( "" )
  // let [ brand, setBrand ] = useState( "" )
  // let [ price, setPrice ] = useState( 0 )

  let [product, setProduct] = useState({
    title: "",
    description: "",
    price : 10,
    discountPercentage : 25,
    rating : 6.6,
    stock : 50,
    brand : "",
    category : "",
    thumbnail : "",
    images : []
  });

  let navigate = useNavigate()

  let handleChange = (e) => {
      setProduct( { ...product, [e.target.name] : e.target.value }  )
  }

  let handleSubmit = (e) => {
      e.preventDefault();

      console.log( product );

      fetch( "http://localhost:4000/products", {
        method : 'POST',
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify( product )
      } )
      .then( ()=> {
        console.log(  "Added Successfuly" );
        navigate( "/products" )
      } )

  }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create New Product
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={ handleSubmit }>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Enter Title"
              name="title"
              autoComplete="title"
              autoFocus
              value={ product.title }
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              id="description"
              autoComplete="description"
              value={ product.description }
              onChange={handleChange}
            />
            <Grid container spacing={2}>
              <Grid xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  type="number"
                  id="price"
                  autoComplete="current-price"
                  value={ product.price }
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="discountPercentage"
                  label="Discount"
                  type="number"
                  id="discountPercentage"
                  autoComplete="discountPercentage"
                  value={ product.discountPercentage }
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="rating"
                  label="Rating"
                  type="number"
                  id="rating"
                  autoComplete="current-rating"
                  value={ product.rating }
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="stock"
                  label="Stock"
                  type="number"
                  id="stock"
                  autoComplete="current-stock"
                  value={ product.stock }
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              name="brand"
              label="Enter Your Brand"
              id="brand"
              autoComplete="my-brand"
              value={ product.brand }
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="category"
              label="Category"
              id="category"
              autoComplete="my-category"
              value={ product.category }
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add New Item
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default CreateProduct;
