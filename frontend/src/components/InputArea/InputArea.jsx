import React from "react";
import { Container, InputGroup, Form } from "react-bootstrap";
import "../../Styles/InputArea.css";
export default function InputArea() {
  return (
    <>
      <div className="input-area-wrapper">
        <Container fluid="lg" className="input-area">
          <h2>Input Area</h2>
          <div className="input-area-header ">
            <div className="input-area-body">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter Your Text Here"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <button className="btn">Analyze Sentiment</button>
          </div>
        </Container>
      </div>
    </>
  );
}
