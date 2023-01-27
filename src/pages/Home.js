import React from "react";
import Container from 'react-bootstrap/Container';
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <>
      <Container className="text-center p-5 mt-5 box">
        <h1 className="welcome">MeherDevs</h1>
   <hr></hr>
        <h5>a Portfolio by Reed Meher</h5>
        <p className="mainText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae turpis. Auctor urna nunc id cursus metus aliquam eleifend mi in. Turpis egestas sed tempus urna.</p>
      </Container>

        {/* <Grid direction="row" container sx={{ padding: "2rem" }}>
          <Grid container spacing={0} justifyContent="center">


          </Grid>
        </Grid> */}
  
    </>

  );
};

export default Home;
