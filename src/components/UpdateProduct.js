import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    
    let [ product, setProduct ] = useState( {} )
    let {id} = useParams()
    let navigate = useNavigate()


   useEffect( ()=>{
        axios.get( "http://localhost:4000/products/"+id )
        .then( res => setProduct( res.data )  )
   }, []  )

   let handleChange = (e) => {
      let {name, value} = e.target
        setProduct( { ...product, [name] : value } )
   }

   let handleUpdate = (e) => {
      e.preventDefault();

      axios.put( "http://localhost:4000/products/"+id, product )
      .then( ()=>{
        Swal.fire({
            title: "Good job!",
            text: "Successfully Updated",
            icon: "success"
          });    
        navigate("/products")
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
            Update Your Product
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={ handleUpdate }>
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
              onChange={ handleChange }
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
              onChange={ handleChange }
            />
            <Grid container spacing={2}>
              <Grid item xs={3}>
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
                  onChange={ handleChange }
                />
              </Grid>
              <Grid item xs={3}>
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
                  onChange={ handleChange }
                />
              </Grid>
              <Grid item xs={3}>
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
                  onChange={ handleChange }
                />
              </Grid>
              <Grid item xs={3}>
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
                  onChange={ handleChange }
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
              onChange={ handleChange }
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
              onChange={ handleChange }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default UpdateProduct
