import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../Styles/Header.css";

function Header() {
  return (
    <>
      <Navbar className="header">
        <Container fluid="lg">
          <div className="wrapper">
            <Navbar.Brand href="#home">Senti Senti</Navbar.Brand>
            <Nav className="me-auto d-flex gap-4 align-items-center menu">
              <Nav.Link href="#analysis" className="active">Analysis</Nav.Link>
              <Nav.Link href="#features">Team Members</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
