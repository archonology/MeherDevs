import React from "react";
import Container from 'react-bootstrap/Container';
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <>
      <Container className="text-center p-5 mt-5 box">
        <h1 className="welcome">MeherDevs</h1>
   <hr></hr>
        <p className="mainText">
            MeherDevs is <span>Reed Meher</span>: a budding full stack and frontend developer seeking compelling projects, dynamic teamwork, and new ideas.  On this site you will find Reed's development portfolio, a contact form, his resume, and links to his Github and LinkedIn pages. 
          </p>
      </Container>

        {/* <Grid direction="row" container sx={{ padding: "2rem" }}>
          <Grid container spacing={0} justifyContent="center">


          </Grid>
        </Grid> */}
  
    </>

  );
};

export default Home;
