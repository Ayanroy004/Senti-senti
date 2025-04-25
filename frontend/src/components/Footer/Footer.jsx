import React from "react";
import Container from "react-bootstrap/esm/Container";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Container fluid="lg">
          <div className=" d-flex justify-content-center align-items-center flex-column gap-2">
            <p className="text-center">
              © 2023 Senti Senti. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}
