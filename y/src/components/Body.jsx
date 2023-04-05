import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

export const Body = () => {
  return (
    <div className="bg-primary text-light">
      <div className="text-center" >
        <h2 className="">Social Media Management</h2>
        <h5>
          The leading social media dashborad to manage and measure your social
          networks
        </h5>
      </div>
      <Container fluid >
        <Row className="bg-primary" >
          <Col className="d-flex justify-content-center"><img className="w-50 shadow-lg" src="https://e.rpp-noticias.io/normal/2022/03/16/241224_1232803.jpg" alt="imagen pc" /></Col>
          <Col className="">
            <ul>
              <li>Manage múltiple social profiles</li>
              <li>Schedule Manage and tarjet</li>
              <li>Track brand mencions</li>
              <li>Analis social media traffic</li>
              <li>4 millon + satisfer users</li>
            </ul>
            <Button className="bg-light text-dark">View plans and price</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
};
