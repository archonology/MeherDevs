import React from "react";
import Container from 'react-bootstrap/Container';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SailingIcon from '@mui/icons-material/Sailing';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';


import CWP from '../projectImages/ChildWelfarePortal.jpg';
import Prima from '../projectImages/prima-materia-home.jpg';
import Hparty from '../projectImages/home-party-page.jpg';
import Wandering from '../projectImages/wandering-comma.jpg';
import BookSearch from '../projectImages/booksearch-pic.jpg';
import PWA from '../projectImages/pwa-text-editor.jpg';

import NightIn from '../projectImages/a-night-in-page.jpg';
import drumkit from '../projectImages/drumkit.png';
import weather from '../projectImages/weather-dashboard.jpg';
import scheduler from '../projectImages/scheduler.jpg'

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
                        indicatorColor="primary">
                        <Tab label="Full-Stack" {...a11yProps(0)} />
                        <Tab label="Frontend" {...a11yProps(1)} />
                        <Tab label="Backend" {...a11yProps(2)} />
                    </Tabs>

                </Box>

                <TabPanel value={value} index={0}>


                    <Grid container spacing={{ xs: 2, md: 2, lg: 3 }} columns={{ xs: 12, sm: 12, md: 12, lg: 10 }} justifyContent="center">

                        <Grid item xs={11} sm={6} md={5} lg={3}>
                            <div className="card">
                                <img src={CWP} alt="child welfare portal" className="portfolio-img m-3 mb-0"></img>
                                <hr></hr>
                                <h5>Child Welfare Portal</h5>
                                <p>Built with a client to be a resource hub for child welfare workers in Minnesota. All content needed to be easily added, changed and deleted by the admin. Created with the MERN stack and utilizes GraphQL API practices.</p>

                                <CardActions sx={{ justifyContent: "center" }}>

                                    <Tooltip title="Visit Site">
                                        <IconButton className="" href="https://www.childwelfareportal.org/" target={'_blank'} rel={'nonreferrer'}>
                                            <SailingIcon fontSize="medium" />
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip title="visit Github page">
                                        <IconButton className="" href="https://github.com/archonology/CW-Portal" target={'_blank'} rel={'nonreferrer'}>
                                            <GitHubIcon fontSize="medium" />
                                        </IconButton>
                                    </Tooltip>

                                </CardActions>
                            </div>
                        </Grid>
                        <Grid item xs={11} sm={6} md={5} lg={3}>
                            <div className="card">
                                <img src={Prima} alt="prima materia" className="portfolio-img m-3 mb-0"></img>
                                <hr></hr>
                                <h5>Prima Materia</h5>
                                <p className="mb-4">A full stack, collaboratively built app that allows users to create an account, manage a wishlist, build decks, and complete refined searches. Prima-Materia was created with the MERN stack and utilizes GraphQL practices.</p>

                                <CardActions sx={{ justifyContent: "center" }}>

                                    <Tooltip title="Visit Site">
                                        <IconButton className="" href="https://prima-materia-84.herokuapp.com/" target={'_blank'} rel={'nonreferrer'}>
                                            <SailingIcon fontSize="medium" />
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip title="visit Github page">
                                        <IconButton className="" href="https://github.com/archonology/Prima-Materia" target={'_blank'} rel={'nonreferrer'}>
                                            <GitHubIcon fontSize="medium" />
                                        </IconButton>
                                    </Tooltip>

                                </CardActions>
                            </div>
                        </Grid>

                        <Grid item xs={11} sm={6} md={4} lg={3}>
                            <div className="card">
                                <img src={Hparty} alt="home party" className="portfolio-img m-3 mb-0"></img>
                                <hr></hr>
                                <h5>Home Party</h5>
                                <p>Built collaboratively, Home Party is a place to invite your family and friends for tracking real estate. Utilizes MySQL, Sequelize, Node, Bootstrap, and Nodemailer.</p>

                                <CardActions sx={{ justifyContent: "center" }}>

                                    <Tooltip title="Visit Site">
                                        <IconButton className="" href="https://home-party-app.herokuapp.com" target={'_blank'} rel={'nonreferrer'}>
                                            <SailingIcon fontSize="medium" />
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip title="visit Github page">
                                        <IconButton className="" href="https://github.com/archonology/Home-Party" target={'_blank'} rel={'nonreferrer'}>
                                            <GitHubIcon fontSize="medium" />
                                        </IconButton>
                                    </Tooltip>

                                </CardActions>
                            </div>
                        </Grid>

                        <Grid item xs={11} sm={6} md={4} lg={3}>
                            <div className="card">
                                <img src={Wandering} alt="wandering comma" className="portfolio-img m-3 mb-0"></img>
                                <hr></hr>
                                <h5>The Wandering Comma</h5>
                                <p>A full stack tech blog created with RESTful practices. Users can leave comments and make posts. Utilizes MySQL, Sequelize, Express, Node, and Bootstrap.</p>

                                <CardActions sx={{ justifyContent: "center" }}>

                                    <Tooltip title="Visit Site">
                                        <IconButton className="" href="https://the-wandering-comma.herokuapp.com" target={'_blank'} rel={'nonreferrer'}>
                                            <SailingIcon fontSize="medium" />
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip title="visit Github page">
                                        <IconButton className="" href="https://github.com/archonology/The-Wandering-Comma-Tech-Blog" target={'_blank'} rel={'nonreferrer'}>
                                            <GitHubIcon fontSize="medium" />
                                        </IconButton>
                                    </Tooltip>

                                </CardActions>
                            </div>
                        </Grid>

                        <Grid item xs={11} sm={6} md={4} lg={3}>
                            <div className="card">
                                <img src={BookSearch} alt="booksearch" className="portfolio-img m-3 mb-0"></img>
                                <hr></hr>
                                <h5>Book Search</h5>
                                <p>A study in refactoring RESTful API to GraphQL API practices, this book search tool tackles the joy of using the MERN stack for searching fetch APIs. Allows users to login and manage a booklist.</p>

                                <CardActions sx={{ justifyContent: "center" }}>

                                    <Tooltip title="Visit Site">
                                        <IconButton className="" href="https://book-search-84.herokuapp.com" target={'_blank'} rel={'nonreferrer'}>
                                            <SailingIcon fontSize="medium" />
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip title="visit Github page">
                                        <IconButton className="" href="https://github.com/archonology/Book-Search-with-MERN" target={'_blank'} rel={'nonreferrer'}>
                                            <GitHubIcon fontSize="medium" />
                                        </IconButton>
                                    </Tooltip>

                                </CardActions>
                            </div>
                        </Grid>

                        <Grid item xs={11} sm={6} md={4} lg={3}>
                            <div className="card">
                                <img src={PWA} alt="pwa text-editor" className="portfolio-img m-3 mb-0"></img>
                                <hr></hr>
                                <h5>PWA Text Editor</h5>
                                <p>A full stack PWA text editor. You can save it to your local device (via Chrome)  Uses Webpack, Workbox, Express, Idb, and more.</p>

                                <CardActions sx={{ justifyContent: "center" }}>

                                    <Tooltip title="Visit Site">
                                        <IconButton className="" href="https://simple-pwa-text-editor-84.herokuapp.com" target={'_blank'} rel={'nonreferrer'}>
                                            <SailingIcon fontSize="medium" />
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip title="visit Github page">
                                        <IconButton className="" href="https://github.com/archonology/PWA-Text-Editor" target={'_blank'} rel={'nonreferrer'}>
                                            <GitHubIcon fontSize="medium" />
                                        </IconButton>
                                    </Tooltip>

                                </CardActions>
                            </div>
                        </Grid>


                    </Grid>


                </TabPanel>
                <TabPanel value={value} index={1}>

                    <Grid >
                        <Grid container spacing={{ xs: 2, md: 2, lg: 3 }} columns={{ xs: 12, sm: 12, md: 10, lg: 10 }} justifyContent="center">


                            <Grid item xs={11} sm={6} md={4} lg={3}>
                                <div className="card">
                                    <img src={NightIn} alt="a night in" className="portfolio-img m-3 mb-0"></img>
                                    <hr></hr>
                                    <h5>A Night In</h5>
                                    <p>Built collaboratively on Github. This app will help a user find culinary and media inspiration through randomized searches to find ideas. Tailwind, JQUERY, and webAPI.</p>

                                    <CardActions sx={{ justifyContent: "center" }}>

                                        <Tooltip title="Visit Site">
                                            <IconButton className="" href="https://archonology.github.io/A-Night-In/" target={'_blank'} rel={'nonreferrer'}>
                                                <SailingIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="visit Github page">
                                            <IconButton className="" href="https://github.com/archonology/A-Night-In" target={'_blank'} rel={'nonreferrer'}>
                                                <GitHubIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

                                    </CardActions>
                                </div>
                            </Grid>

                            <Grid item xs={11} sm={6} md={4} lg={3}>
                                <div className="card">
                                    <img src={weather} alt="weather dashboard" className="portfolio-img m-3 mb-0"></img>
                                    <hr></hr>
                                    <h5>Weather Dashboard</h5>
                                    <p>A weather tracking website that uses webAPI tools. Weather searches can easily check & track weather updates while they're traveling.</p>

                                    <CardActions sx={{ justifyContent: "center" }}>

                                        <Tooltip title="Visit Site">
                                            <IconButton className="" href="https://archonology.github.io/Weather-Dashboard/" target={'_blank'} rel={'nonreferrer'}>
                                                <SailingIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="visit Github page">
                                            <IconButton className="" href="https://github.com/archonology/Weather-Dashboard" target={'_blank'} rel={'nonreferrer'}>
                                                <GitHubIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

                                    </CardActions>
                                </div>
                            </Grid>


                            <Grid item xs={11} sm={6} md={4} lg={3}>
                                <div className="card">
                                    <img src={scheduler} alt="work day scheduler" className="portfolio-img m-3 mb-0"></img>
                                    <hr></hr>
                                    <h5>Work Day Scheduler</h5>
                                    <p>A scheduling application that tracks the current day and time and allows a user to create and save persistent time events via webAPI tools.</p>

                                    <CardActions sx={{ justifyContent: "center" }}>

                                        <Tooltip title="Visit Site">
                                            <IconButton className="" href="https://archonology.github.io/Work-Day-Scheduler/" target={'_blank'} rel={'nonreferrer'}>
                                                <SailingIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="visit Github page">
                                            <IconButton className="" href="https://github.com/archonology/Work-Day-Scheduler" target={'_blank'} rel={'nonreferrer'}>
                                                <GitHubIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

                                    </CardActions>
                                </div>
                            </Grid>

                            <Grid item xs={11} sm={6} md={4} lg={3}>
                                <div className="card">
                                    <img src={drumkit} alt="drumkit app" className="portfolio-img m-3 mb-0"></img>
                                    <hr></hr>
                                    <h5>JS Drum Kit</h5>
                                    <p>A typing drumkit built with vanilla JS and CSS only. Users can rock out on their keyboard.</p>

                                    <CardActions sx={{ justifyContent: "center" }}>

                                        <Tooltip title="Visit Site">
                                            <IconButton className="" href="https://archonology.github.io/drum-kit/" target={'_blank'} rel={'nonreferrer'}>
                                                <SailingIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="visit Github page">
                                            <IconButton className="" href="https://github.com/archonology/drum-kit" target={'_blank'} rel={'nonreferrer'}>
                                                <GitHubIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

                                    </CardActions>
                                </div>
                            </Grid>

                        </Grid>
                    </Grid>

                </TabPanel>
                <TabPanel value={value} index={2}>

                    <Grid direction="row" container sx={{ padding: "3rem", marginBottom: "1em" }}>
                        <Grid container spacing={2} justifyContent="center">
                            {/* video card 1 */}
                            <Grid item className="video-card m-2" lg={8}>
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
                                    <CardActions sx={{ justifyContent: "left" }}>

                                        <Tooltip title="Watch on YouTube">
                                            <IconButton className="" href="https://youtu.be/5A9lBIHdNGY" target={'_blank'} rel={'nonreferrer'}>
                                                <VideoLibraryIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="visit Github page">
                                            <IconButton className="" href="https://github.com/archonology/Bubble-World" target={'_blank'} rel={'nonreferrer'}>
                                                <GitHubIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

                                    </CardActions>
                                </div>
                            </Grid>

                            {/* video card 2 */}
                            <Grid item className="video-card m-2" lg={8}>
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
                                    <CardActions sx={{ justifyContent: "left" }}>

                                        <Tooltip title="Watch on YouTube">
                                            <IconButton className="" href="https://youtu.be/L7r7JGepZZ4" target={'_blank'} rel={'nonreferrer'}>
                                                <VideoLibraryIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="visit Github page">
                                            <IconButton className="" href="https://github.com/archonology/E-Commerce-Back-End" target={'_blank'} rel={'nonreferrer'}>
                                                <GitHubIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

                                    </CardActions>
                                </div>
                            </Grid>


                            {/* video card 4 */}
                            <Grid item className="video-card m-2" lg={4}>
                                <div className="card-body">
                                    <h5 className="card-title">Team Generator</h5>
                                    <p className="card-text">I wanted to be able to generate an html page for team projects. Having a page to keep track of my group helps keep things organized and makes it easy to find contact info for my team and important links, like their github accounts or school info.</p>
                                    <CardActions sx={{ justifyContent: "left" }}>

                                        <Tooltip title="Watch on YouTube">
                                            <IconButton className="" href="https://youtu.be/ZaHrOHW6bLg" target={'_blank'} rel={'nonreferrer'}>
                                                <VideoLibraryIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="visit Github page">
                                            <IconButton className="" href="https://github.com/archonology/Team-Profile-Generator" target={'_blank'} rel={'nonreferrer'}>
                                                <GitHubIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

                                    </CardActions>
                                </div>
                            </Grid>

                            {/* video card 3 */}
                            <Grid item className="video-card m-2" lg={4}>
                                <div className="card-body">
                                    <h5 className="card-title">Employee Library</h5>
                                    <p className="card-text">Backend employee database management program. Solves the need for managing an employee database easily through the backend.</p>
                                    <CardActions sx={{ justifyContent: "left" }}>

                                        <Tooltip title="Watch on YouTube">
                                            <IconButton className="" href="https://youtu.be/r-aP_ufH47U" target={'_blank'} rel={'nonreferrer'}>
                                                <VideoLibraryIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="visit Github page">
                                            <IconButton className="" href="https://github.com/archonology/Employee-Library" target={'_blank'} rel={'nonreferrer'}>
                                                <GitHubIcon fontSize="medium" />
                                            </IconButton>
                                        </Tooltip>

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
