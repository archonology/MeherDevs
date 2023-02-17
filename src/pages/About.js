import React from "react";
import Container from 'react-bootstrap/Container';
import { Tooltip, Stack, Grid } from "@mui/material";
import reedhat from '../projectImages/IMG_4904.jpeg'

const About = () => {
    return (
        <>

            <Container className="p-3">
                <h2 className="heading text-center">About</h2>
                <hr></hr>
            </Container>
            {/* 
            <section className='container d-flex flex-wrap'>
                <div className='row justify-content-center m-4 mt-0'>
                    <div className='col-12 col-md-6 col-lg-4 m-1 mt-0'>
                        <img src={reedhat} alt="Reed Meher portrait" className="portrait"></img>

                    </div>
                    <div className='col-12 col-md-5 col-lg-6 m-1'>
                        <p>
                            Reed brings skills in design, communication, collaboration, & creative problem solving to develop well-built, user-friendly applications. Seeking new tech frontiers, people who make a difference, and great team work.
                        </p>
                        <p>
                            Reed is driven by discovery, communication, learning, and a love for crafting well made things.
                        </p>
                        <p>
                            Reed lives with his partner, their three daughters, their huntress house cat, and their elephantine puppy along the stony edge of Lake Superior in Grand Marais, MN.
                        </p>
                    </div>
                </div>
            </section> */}
            <Grid direction="row" container sx={{ padding: 2 }}>
                <Grid container spacing={0} justifyContent="center">

                    <Stack direction="row" spacing={2} margin={0}>

                        <img src={reedhat} alt="Reed Meher portrait" className="portrait"></img>

                        <div className="bio">
                            <p>
                                Reed brings skills in design, communication, collaboration, & creative problem solving to develop well-built, user-friendly applications. Seeking new tech frontiers, people who make a difference, and great team work.
                            </p>
                            <p>
                                Reed is driven by discovery, communication, learning, and a love for crafting well made things.
                            </p>
                            <p>
                                Reed lives with his partner, their three daughters, their huntress house cat, and their elephantine puppy along the stony edge of Lake Superior in Grand Marais, MN.
                            </p>
                            <Tooltip title="visit LinkedIn page">
                                <a href="https://www.linkedin.com/in/reed-meher" target={'_blank'} rel={'nonreferrer'}><i className="fa-brands fa-linkedin-in"></i></a>
                            </Tooltip>
                            <Tooltip title="visit Github page">
                                <a className="github-icon" href="https://github.com/archonology" target={'_blank'} rel={'nonreferrer'}><i className="fa-brands fa-github-alt"></i></a>
                            </Tooltip>
                        </div>
                    </Stack>

                </Grid>
            </Grid>

        </>

    );
};

export default About;
