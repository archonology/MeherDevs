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
                        <Tab label="Education" {...a11yProps(2)} />
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

                    <Grid direction="row" container sx={{ padding: "1rem" }}>
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

                    <Grid flexdirection="row" container sx={{ padding: "1rem", marginBottom: "1rem" }}>
                        <Grid container spacing={2} textAlign="left" justifyContent="left" className="exp" >

                            <div className='row m-1 mt-0 p-4'>
                                <h3><a href="https://www.credly.com/badges/38a79ed6-ec04-410f-9ba1-f54002812bf5/public_url" target={'_blank'} rel={'nonreferrer'}><strong>Full Stack Web Development Certificate</strong></a>
                                    <br></br>
                                    University of MN • June 2022 - December 2022 </h3>
                                <p>
                                    A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, NoSQL, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS (MERN and RESTFul practices).
                                </p>
                                <p> <strong>GPA: 4.0+</strong></p>
                                <hr></hr>
                                <h3><a href="https://morris.umn.edu/" target={'_blank'} rel={'nonreferrer'}><strong>Bachelor's of Fine Arts</strong></a>
                                    <br></br>
                                    University of MN, Morris • August 2004 - June 2008</h3>
                                <br></br>
                                <p>
                                    English Literature with a minor in Studio Art.  <strong>GPA: 3.74</strong>
                                </p>

                            </div>

                        </Grid>
                    </Grid>

                </TabPanel>

            </Box>

        </>

    );
};

export default Resume;
