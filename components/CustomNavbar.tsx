import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Category from '@/models/Category';

const CustomNavbar = () => {
  const [categorySlugs, setCategorySlugs] = useState<Category[] | null>(null);

  const getCategorySlugs = async function () {
    const response = await fetch('/api/category');
    const categories = await response.json();

    setCategorySlugs(categories);
    // return categories;
  };

  useEffect(() => {
    // Call the function to fetch category data when the component mounts
    getCategorySlugs();
  }, []);

  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect={false}>
      <div className='container'>
        <Link href='/' passHref className='no-underline'>
          <Navbar.Brand as='div' style={{ textDecoration: 'none' }}>
            News APP
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            {/* <Link href="/" passHref className="nav-link"> Home </Link> */}
            <Nav.Link href='/' as={Link}>
              {' '}
              Breaking News
            </Nav.Link>

            {/* <Link href="/search" passHref className="nav-link"> Search </Link> */}
            <Nav.Link href='/search' as={Link}>
              Search
            </Nav.Link>

            <NavDropdown title='Categories' id='categories-dropdown'>
              {/* <NavDropdown.Item as={Link} href="/categories/business">Business</NavDropdown.Item> */}

              {categorySlugs?.map((slug) => (
                <NavDropdown.Item
                  as={Link}
                  href={`/categories/${slug.name}`}
                  key={slug.id}
                >
                  {slug.name.charAt(0).toUpperCase() + slug.name.slice(1)}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
