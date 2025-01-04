import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Inuka Gunathilake </span>
            from <span className="purple"> Kandy, Sri Lanka.</span>
            <br />
            I am currently employed as a Full-Stack developer.
            <br />
            Undergraduate at University of Moratuwa, Faculty of Information Technology studying for a BSc in Information Technology and Management.
            <br />
            <br />

          </p>



        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
