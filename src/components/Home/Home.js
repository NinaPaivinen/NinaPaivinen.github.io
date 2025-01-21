import React from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Cover from "./Cover";

import AOS from "aos";

import "./Home.css";

import "./home.scss";
import "aos/dist/aos.css";


function Home() {

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });
//n

  return (

      <div>
    <Cover />
      <Container fluid className="home-section" >
   
       <Container className="home-content">

        </Container>
      
      </Container>

</div>

    
  );
}

export default Home;