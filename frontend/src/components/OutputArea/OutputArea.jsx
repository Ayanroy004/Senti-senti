import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import "../../Styles/OutputArea.css";
export default function OutputArea() {
  return (
    <>
      <div className="output-area-wrapper">
        <Container fluid="lg" className="output-area">
          <h2>Output Area</h2>
          <div className="output-area-header ">
            <div className="output-area-body">
              <h3>Show the Original Text </h3>
              <ListGroup>
                <ListGroup.Item>
                  <div className="show">
                    <p>Emotion : </p>
                    <div className="output d-flex gap-2 align-items-center">
                      <p>Love</p>
                      <div className="color-div"></div>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="show">
                    <p>Sentiment : </p>
                    <div className="output d-flex gap-2 align-items-center">
                      <p>Positive</p>
                      <div className="color-div"></div>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
