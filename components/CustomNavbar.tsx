
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container">
        <Link href="/" passHref
          className='no-underline'
        >
          <Navbar.Brand as="div"
            style={{ textDecoration: 'none' }}
          >News APP</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/" passHref className="nav-link">
              Home

            </Link>
            <Link href="/search" passHref className="nav-link">
              Search
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar >
  );
};

export default CustomNavbar;
