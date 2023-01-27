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
import resume from '../components/resume/reedMeherResume.pdf'


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

const Resume = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Container className="text-center p-5 mt-1 box">
                <h2 className="heading">Resume
                    <span>
                        <Tooltip title="Download Resume">
                            <a href={resume} className="resume" download>
                                <i class="fa-solid fa-download">
                                </i>
                            </a>
                        </Tooltip>
                    </span>
                </h2>
                <hr></hr>
                <p className="mainText">Below you can check out some of my favorite, recent projects.  The first 6 are full stack or frontend; below that, you'll find demos to my favorite backend applications.</p>
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
                        <Tab label="Languages" {...a11yProps(0)} />
                        <Tab label="Skills" {...a11yProps(1)} />
                        <Tab label="Experience" {...a11yProps(2)} />
                    </Tabs>

                </Box>

                <TabPanel value={value} index={0}>

                    <Grid direction="row" container sx={{ padding: "1rem", marginBottom: "1em" }}>
                        <Grid container spacing={2} justifyContent="center">

                            <Grid item><h2 className="icons"><i class="fa-brands fa-square-js"></i> JavaScript</h2></Grid>

                            <Grid item><h2 className="icons"><i class="fa-brands fa-css3"></i> CSS3</h2></Grid>

                            <Grid item><h2 className="icons"><i class="fa-brands fa-html5"></i> HTML5</h2></Grid>


                        </Grid>
                    </Grid>

                </TabPanel>
                <TabPanel value={value} index={1}>

                    <Grid direction="row" container sx={{ padding: "1rem", marginBottom: "1em" }}>
                        <Grid container spacing={2} justifyContent="center">

                            <Grid item>
                                <h3 className="icons">
                                    <i class="fa-brands fa-react"> </i>
                                    ReactJS
                                </h3>
                            </Grid>

                            <Grid item>
                                <h3 className="icons mt-2">
                                    <i class="devicon-express-original"> </i>
                                    ExpressJS
                                </h3>
                            </Grid>

                            <Grid item>
                                <h3 className="icons mt-2">
                                    <i class="devicon-mongodb-plain"> </i>
                                    MongoDB
                                </h3>
                            </Grid>

                            <Grid item>
                                <h3 className="icons mt-2">
                                    <i class="devicon-nodejs-plain"> </i>
                                    NodeJS
                                </h3>
                            </Grid>

                            <Grid item>
                                <h3 className="icons mt-2">
                                    <i className="devicon-graphql-plain"> </i>
                                    GraphQL
                                </h3>
                            </Grid>

                            <Grid item>
                                <h3 className="icons mt-2">
                                    <i class="devicon-materialui-plain"> </i>
                                    Material UI
                                </h3>
                            </Grid>

                            <Grid item>
                                <h3 className="icons mt-2">
                                    <i class="devicon-bootstrap-plain"> </i>
                                    Bootstrap
                                </h3>
                            </Grid>

                            <Grid item>
                                <h3 className="icons mt-2">
                                    <i class="devicon-git-plain"> </i>
                                    Git
                                </h3>
                            </Grid>

                            <Grid item>
                                <h3 className="icons mt-2">
                                    <i class="devicon-webpack-plain"> </i>
                                    Webpack
                                </h3>
                            </Grid>

                            <Grid item>
                                <h3 className="icons mt-2">
                                    <i class="devicon-jest-plain"> </i>
                                    Jest
                                </h3>
                            </Grid>

                            <Grid item>
                                <h3 className="icons mt-2">
                                    <i class="devicon-mysql-plain"> </i>
                                    mySQL
                                </h3>
                            </Grid>

                            <Grid item>
                                <h3 className="icons mt-2">
                                    <i class="devicon-heroku-original"> </i>
                                    Heroku
                                </h3>
                            </Grid>


                        </Grid>
                    </Grid>

                </TabPanel>

                <TabPanel value={value} index={2}>

                    <Grid flexdirection="row" container sx={{ padding: "1rem", marginBottom: "2rem" }}>
                        <Grid container spacing={2} textAlign="center" justifyContent="center" className="exp" >

                            <Grid item xs={12}><h5>3 full-stack team coding projects</h5></Grid>
                            <Grid item xs={12}><h5>Over 15 solo coding projects</h5></Grid>
                            <Grid item xs={12}><h5>12+ years project management skills</h5></Grid>
                            <Grid item xs={12}><h5>12+ years leadership experience</h5></Grid>
    





                        </Grid>
                    </Grid>

                </TabPanel>

            </Box>


        </>

    );
};

export default Resume;
