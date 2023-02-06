import React from "react";
import Container from 'react-bootstrap/Container';
import { Avatar, Stack, Grid, Box } from "@mui/material";
import reed from '../projectImages/PortraitGif.gif'
import reedhat from '../projectImages/IMG_4904.jpeg'

const About = () => {
    return (
        <>
            <Container className="p-4">
                <h2 className="heading text-center">About</h2>
                <hr></hr>
            </Container>

            <section className='container d-flex flex-wrap'>
                <div className='row justify-content-center m-4 mt-0'>
                    <div className='col-12 col-md-6 col-lg-4 m-1 mt-0'>
                        <img src={reedhat} className="portrait"></img>

                    </div>
                    <div className='col-12 col-md-5 col-lg-6 m-1'>
                        <p>
                            Among many things, Reed is a father, teacher, homemaker, artist, writer, musician, social worker, video game nerd, and graphic designer. Now he's forging all his experience into becoming a <span>Full Stack</span> and <span>Frontend Developer</span>, a dream he's had since the long summer days of his youth spent attempting to get the family Commodore 64 to reveal it's secrets through the command line.
                        </p>
                        <p>
                            Reed is driven by discovery, communication, learning, and a love for crafting well made things.
                        </p>
                        <p>
                            Reed lives with his partner, their three daughters, their huntress house cat, and their elephantine puppy along the stony edge of Lake Superior in Grand Marais, MN.
                        </p>
                    </div>
                </div>
            </section>



        </>

    );
};

export default About;
