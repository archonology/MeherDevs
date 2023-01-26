import React from "react";
import Container from 'react-bootstrap/Container';
import Grid from '@mui/material/Grid';
import CWP from '../projectImages/ChildWelfarePortal.jpg'
import Prima from '../projectImages/prima-materia-home.jpg'

const Home = () => {
    return (
        <>
            <Container className="text-center p-5 mt-5 box">
                <h2 className="heading">Portfolio</h2>
                <hr></hr>
                <p className="mainText">Below you can check out some of my favorite, recent projects.  The first 6 are full stack or frontend; below that, you'll find demos to my favorite backend applications.</p>
            </Container>

            <Grid direction="row" container sx={{ padding: "2rem", marginBottom: "6rem" }}>
                <Grid container spacing={0} justifyContent="center">

                    <img src={CWP} className="portfolio-img m-3" width={"450px"}></img>

                    <img src={Prima} className="portfolio-img m-3" width={"450px"}></img>

                </Grid>
            </Grid>

        </>

    );
};

export default Home;
