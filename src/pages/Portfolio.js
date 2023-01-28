import React from "react";
import Container from 'react-bootstrap/Container';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


import CWP from '../projectImages/ChildWelfarePortal.jpg'
import Prima from '../projectImages/prima-materia-home.jpg'
import Hparty from '../projectImages/home-party-page.jpg'
import NightIn from '../projectImages/a-night-in-page.jpg'
import Wandering from '../projectImages/wandering-comma.jpg'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2, mt: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Portfolio = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Container className="text-center p-4">
                <h2 className="heading">Portfolio</h2>
                <hr></hr>
                {/* <p className="mainText">Below you can check out some of my favorite, recent projects.  The first 6 are full stack or frontend; below that, you'll find demos to my favorite backend applications.</p> */}
            </Container>

            <Box sx={{ width: '100%', marginTop: 0 }}>
                <Box>

                    <Tabs
                        sx={{ alignContent: "center" }}
                        // variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        centered
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable Dashboard List Tabs"
                        indicatorColor="secondary">
                        <Tab label="Full-Stack" {...a11yProps(0)} />
                        <Tab label="Frontend" {...a11yProps(1)} />
                        <Tab label="Backend" {...a11yProps(2)} />
                    </Tabs>

                </Box>

                <TabPanel value={value} index={0}>

                    <Grid direction="row" container sx={{ padding: "2rem", marginBottom: "2rem" }}>
                        <Grid container spacing={3} justifyContent="center">

                            <Grid item >
                                <div className="card">
                                    <img src={CWP} className="portfolio-img m-3"></img>
                                    <hr></hr>
                                    <h5>Child Welfare Portal</h5>
                                    <p>A full stack, collaboratively built app that allows users to create an account, manage a wishlist, build decks, and complete refined searches. Prima-Materia was created with React and utilizes GraphQL API practices.</p>
                                    <CardActions>
                                        <Button href="https://childwelfareportal.herokuapp.com/" target={'_blank'} rel={'nonreferrer'} color="primary">Visit the Site</Button>
                                        <Button href="https://github.com/archonology/CW-Portal" target={'_blank'} rel={'nonreferrer'} color="primary">See the Repo in Github</Button>
                                    </CardActions>
                                </div>
                            </Grid>
                            <Grid item >
                                <div className="card">
                                    <img src={Prima} className="portfolio-img m-3"></img>
                                    <hr></hr>
                                    <h5>Child Welfare Portal</h5>
                                    <p>A full stack, collaboratively built app that allows users to create an account, manage a wishlist, build decks, and complete refined searches. Prima-Materia was created with React and utilizes GraphQL API practices.</p>
                                    <CardActions>
                                        <Button href="https://childwelfareportal.herokuapp.com/" target={'_blank'} rel={'nonreferrer'} color="primary">Visit the Site</Button>
                                        <Button href="https://github.com/archonology/CW-Portal" target={'_blank'} rel={'nonreferrer'} color="primary">Visit the Repo</Button>
                                    </CardActions>
                                </div>
                            </Grid>

                            <Grid item >
                                <div className="card">
                                    <img src={Hparty} className="portfolio-img m-3"></img>
                                    <hr></hr>
                                    <h5>Child Welfare Portal</h5>
                                    <p>A full stack, collaboratively built app that allows users to create an account, manage a wishlist, build decks, and complete refined searches. Prima-Materia was created with React and utilizes GraphQL API practices.</p>
                                    <CardActions>
                                        <Button href="https://childwelfareportal.herokuapp.com/" target={'_blank'} rel={'nonreferrer'} color="primary">Visit the Site</Button>
                                        <Button href="https://github.com/archonology/CW-Portal" target={'_blank'} rel={'nonreferrer'} color="primary">See the Repo in Github</Button>
                                    </CardActions>
                                </div>
                            </Grid>

                            <Grid item >
                                <div className="card">
                                    <img src={Wandering} className="portfolio-img m-3"></img>
                                    <hr></hr>
                                    <h5>Child Welfare Portal</h5>
                                    <p>A full stack, collaboratively built app that allows users to create an account, manage a wishlist, build decks, and complete refined searches. Prima-Materia was created with React and utilizes GraphQL API practices.</p>
                                    <CardActions>
                                        <Button href="https://childwelfareportal.herokuapp.com/" target={'_blank'} rel={'nonreferrer'} color="primary">Visit the Site</Button>
                                        <Button href="https://github.com/archonology/CW-Portal" target={'_blank'} rel={'nonreferrer'} color="primary">See the Repo in Github</Button>
                                    </CardActions>
                                </div>
                            </Grid>


                        </Grid>
                    </Grid>

                </TabPanel>
                <TabPanel value={value} index={1}>

                    <Grid direction="row" container sx={{ padding: "2rem", marginBottom: "1em" }}>
                        <Grid container spacing={2} justifyContent="center">


                            <Grid item >
                                <div className="card">
                                    <img src={NightIn} className="portfolio-img m-3"></img>
                                    <hr></hr>
                                    <h5>Child Welfare Portal</h5>
                                    <p>A full stack, collaboratively built app that allows users to create an account, manage a wishlist, build decks, and complete refined searches. Prima-Materia was created with React and utilizes GraphQL API practices.</p>
                                    <CardActions>
                                        <Button href="https://childwelfareportal.herokuapp.com/" target={'_blank'} rel={'nonreferrer'} color="primary">Visit the Site</Button>
                                        <Button href="https://github.com/archonology/CW-Portal" target={'_blank'} rel={'nonreferrer'} color="primary">See the Repo in Github</Button>
                                    </CardActions>
                                </div>
                            </Grid>


                        </Grid>
                    </Grid>

                </TabPanel>
                <TabPanel value={value} index={2}>

                    <Grid direction="row" container sx={{ padding: "2rem", marginBottom: "1em" }}>
                        <Grid container spacing={2} justifyContent="center">
                            {/* video card 1 */}
                            <Grid item className="video-card m-2">
                                <div className="card-body">
                                    <div className="ratio ratio-16x9 mb-2">
                                        <iframe
                                            className='video'
                                            src="https://www.youtube.com/embed/5A9lBIHdNGY"
                                            title="Bubble World Demo"
                                            allowFullScreen></iframe>
                                    </div>
                                    <hr></hr>
                                    <h5 className="card-title">Bubble World</h5>
                                    <p className="card-text">An experiment in understanding and developing a social media app. Bubble World is a backend application that utilizes MongoDB, Mongoose, and Express to explore the possiblities of social media.</p>
                                    <CardActions>
                                        <Button href="https://github.com/archonology/Bubble-World" target={'_blank'} rel={'nonreferrer'} color="primary">Visit the Repo</Button>
                                        <Button href="https://youtu.be/5A9lBIHdNGY" target={'_blank'} rel={'nonreferrer'} color="primary">Watch the Demo</Button>
                                    </CardActions>
                                </div>
                            </Grid>

                            {/* video card 2 */}
                            <Grid item className="video-card m-2">
                                <div className="card-body">

                                    <div className="ratio ratio-16x9 mb-2">
                                        <iframe
                                            className='video'
                                            src="https://www.youtube.com/embed/L7r7JGepZZ4"
                                            title="eCommerce Back End Demo"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                    <hr></hr>
                                    <h5 className="card-title">eCommerce</h5>
                                    <p className="card-text">Back end application to develop my skill in back end technologies and learn about managing ORM techniques.</p>
                                    <CardActions>
                                        <Button href="https://github.com/archonology/E-Commerce-Back-End" target={'_blank'} rel={'nonreferrer'} color="primary">Visit the Repo</Button>
                                        <Button href="https://youtu.be/L7r7JGepZZ4" target={'_blank'} rel={'nonreferrer'} color="primary">Watch the Demo</Button>
                                    </CardActions>
                                </div>
                            </Grid>


                            {/* video card 4 */}
                            <Grid item className="video-card m-2">
                                <div className="card-body">
                                    <h5 className="card-title">Team Generator</h5>
                                    <p className="card-text">I wanted to be able to generate an html page for team projects. Having a page to keep track of my group helps keep things organized and makes it easy to find contact info for my team and important links, like their github accounts or school info.</p>
                                    <CardActions>
                                        <Button href="https://github.com/archonology/Team-Profile-Generator" target={'_blank'} rel={'nonreferrer'} color="primary">Visit the Repo</Button>
                                        <Button href="https://youtu.be/ZaHrOHW6bLg" target={'_blank'} rel={'nonreferrer'} color="primary">Watch the Demo</Button>
                                    </CardActions>
                                </div>
                            </Grid>

                            {/* video card 3 */}
                            <Grid item className="video-card m-2">
                                <div className="card-body">
                                    <h5 className="card-title">Employee Library</h5>
                                    <p className="card-text">Backend employee database management program. Solves the need for managing an employee database easily through the backend.</p>
                                    <CardActions>
                                        <Button href="https://github.com/archonology/Employee-Library" target={'_blank'} rel={'nonreferrer'} color="primary">Visit the Repo</Button>
                                        <Button href="https://youtu.be/r-aP_ufH47U" target={'_blank'} rel={'nonreferrer'} color="primary">Watch the Demo</Button>
                                    </CardActions>
                                </div>
                            </Grid>

                        </Grid>
                    </Grid>

                </TabPanel>

            </Box>


        </>

    );
};

export default Portfolio;
