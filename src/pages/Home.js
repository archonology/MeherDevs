import React from "react";
import Container from 'react-bootstrap/Container';

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
  
    </>

  );
};

export default Home;
