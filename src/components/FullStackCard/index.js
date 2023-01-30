import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
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
import clock from '../projectImages/jsclock.png';
import weather from '../projectImages/weather-dashboard.jpg';
import scheduler from '../projectImages/scheduler.jpg'

function FullStackCard(project) {

    return (
        <>
            {/* <Grid item key={project._id} xs={10} sm={5} md={4} lg={3}>
                <div className="card">
                    <img src={project.image} alt={project.title} className="portfolio-img m-3"></img>
                    <hr></hr>
                    <h5>{project.title}</h5>
                    <p>Built with a client to be a resource hub for child welfare workers in Minnesota. All content needed to be easily added, changed and deleted by the admin. Created with the <span>MERN stack</span> and utilizes <span>GraphQL</span> API practices.</p>

                    <CardActions sx={{ justifyContent: "center" }}>

                        <Tooltip title="Visit Site">
                            <IconButton className="" href="https://www.childwelfareportal.org/" target={'_blank'} rel={'nonreferrer'}>
                                <SailingIcon fontSize="large" sx={{ color: "lightblue" }} />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="visit Github page">
                            <IconButton className="" href="https://github.com/archonology/CW-Portal" target={'_blank'} rel={'nonreferrer'}>
                                <GitHubIcon fontSize="large" sx={{ color: "pink" }} />
                            </IconButton>
                        </Tooltip>

                    </CardActions>
                </div>
            </Grid> */}
        </>
    );
}

export default FullStackCard;