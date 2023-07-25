import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container">
        <Link href="/">
          <Navbar.Brand>News APP</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/">
              {/* <Nav.Link> */}
              Home
              {/* </Nav.Link> */}
            </Link>
            <Link href="/search">
              {/* <Nav.Link> */}
              Search
              {/* </Nav.Link> */}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
