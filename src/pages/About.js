import React from "react";
import Container from 'react-bootstrap/Container';
import { Tooltip, Stack, Grid } from "@mui/material";
import reedhat from '../projectImages/IMG_5676.jpeg'

const About = () => {
    return (
        <>

            <Container className="p-3">
                <h2 className="heading text-center">About</h2>
                <hr></hr>
            </Container>

            <Grid direction="row" container sx={{ padding: 2 }}>
                <Grid container spacing={0} justifyContent="center">

                    <Stack direction="row" spacing={3} margin={1} sx={{ maxWidth: '700px' }}>

                        <img src={reedhat} alt="Reed Meher portrait" className="portrait"></img>

                        <div className="bio">
                            <p>
                                MeherDevs is the freelance work of Reed Meher. He brings a long background in design, communication, collaboration, & creative problem solving to develop well-built, user-friendly applications.
                            </p>
                            <p>
                                Reed lives with his partner, their three daughters, their huntress house cat, and their elephantine puppy along the stony edge of Lake Superior in Grand Marais, MN.
                            </p>
                            <h2>
                                <span>
                                    <Tooltip title="visit LinkedIn page">
                                        <a href="https://www.linkedin.com/in/reed-meher" target={'_blank'} rel={'nonreferrer'}><i className="fa-brands fa-linkedin-in"></i></a>
                                    </Tooltip>
                                    <Tooltip title="visit Github page">
                                        <a className="github-icon" href="https://github.com/archonology" target={'_blank'} rel={'nonreferrer'}><i className="fa-brands fa-github-alt"></i></a>
                                    </Tooltip>
                                </span>
                            </h2>
                        </div>
                    </Stack>

                </Grid>
            </Grid>

        </>

    );
};

export default About;
